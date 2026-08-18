import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"
import { corsHeaders } from "../_shared/cors.ts"
import { verifyStudent } from "../_shared/student-verification.ts"

/**
 * REGISTER-PARENT EDGE FUNCTION
 * 
 * Flow:
 * 1. Accepts phone, password, admission_number, dob.
 * 2. Bypasses RLS using SUPABASE_SERVICE_ROLE_KEY to verify student existence.
 * 3. Atomic Rejection Policy: Rejects immediately if no student matches admission # + DOB.
 * 4. Creates Supabase Auth User, inserts `profiles` (role='parent'), and inserts `parent_student` link.
 * 
 * Security Note:
 * Uses SUPABASE_SERVICE_ROLE_KEY which grants admin access. Safe because execution is isolated
 * to this server-side Edge Function and guarded by input verification.
 */
serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders })
  }

  try {
    const { phone, password, admission_number, dob } = await req.json()

    // 1. Validate required fields
    if (!phone || !password || !admission_number || !dob) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields: phone, password, admission_number, and dob are required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      )
    }

    // 2. Initialize Service Role Supabase Client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")

    if (!supabaseUrl || !serviceRoleKey) {
      console.error("Missing environment variables: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.")
      return new Response(
        JSON.stringify({ success: false, error: "Server configuration error." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      )
    }

    const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey)

    // 3. Verify student matching admission_number and dob
    const verification = await verifyStudent(supabaseAdmin, admission_number, dob)

    if (!verification.matched || !verification.student) {
      return new Response(
        JSON.stringify({
          success: false,
          error: verification.error || "No student found matching the provided admission number and date of birth.",
        }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      )
    }

    const student = verification.student
    const sanitizedPhone = phone.replace(/\s+/g, "")
    const authEmail = `${sanitizedPhone.replace(/[^a-zA-Z0-9]/g, "")}@parent.newwaycollege.ac.zw`

    // 4. Create Auth user via Admin API
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email: authEmail,
      phone: sanitizedPhone,
      password: password,
      email_confirm: true,
      user_metadata: { role: "parent", full_name: `Parent of ${student.full_name}` },
    })

    if (authError || !authData.user) {
      console.error("Auth User Creation Error:", authError)
      return new Response(
        JSON.stringify({ success: false, error: authError?.message || "Failed to create authentication user." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      )
    }

    const userId = authData.user.id

    // 5. Insert profile record (role='parent')
    const { error: profileError } = await supabaseAdmin
      .from("profiles")
      .upsert({
        id: userId,
        phone: sanitizedPhone,
        role: "parent",
      })

    if (profileError) {
      console.error("Profile Creation Error:", profileError)
      // Rollback Auth User on profile failure
      await supabaseAdmin.auth.admin.deleteUser(userId)
      return new Response(
        JSON.stringify({ success: false, error: "Failed to initialize parent profile." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      )
    }

    // 6. Link parent to student in parent_student table
    const { error: linkError } = await supabaseAdmin
      .from("parent_student")
      .insert({
        parent_id: userId,
        student_id: student.id,
      })

    if (linkError) {
      console.error("Parent-Student Link Error:", linkError)
      // Rollback Auth User & Profile on link failure
      await supabaseAdmin.from("profiles").delete().eq("id", userId)
      await supabaseAdmin.auth.admin.deleteUser(userId)
      return new Response(
        JSON.stringify({ success: false, error: "Failed to link parent to student record." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      )
    }

    // 7. Success response
    return new Response(
      JSON.stringify({
        success: true,
        message: "Parent account created and linked successfully.",
        user_id: userId,
        student_id: student.id,
        student_name: student.full_name,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  } catch (err: any) {
    console.error("Unhandled error in register-parent:", err)
    return new Response(
      JSON.stringify({ success: false, error: "Internal server error." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  }
})
