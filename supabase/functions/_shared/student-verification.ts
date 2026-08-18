import { SupabaseClient } from "https://esm.sh/@supabase/supabase-js@2"

export interface VerificationResult {
  matched: boolean
  student?: {
    id: string
    admission_number: string
    full_name: string
    user_id: string | null
    fees_status: string
  }
  error?: string
}

/**
 * Verify student admission number and date of birth against the database.
 * Bypasses RLS using service-role admin client to check student record existence.
 */
export async function verifyStudent(
  supabaseAdmin: SupabaseClient,
  admissionNumber: string,
  dob: string
): Promise<VerificationResult> {
  if (!admissionNumber || !dob) {
    return { matched: false, error: "Admission number and date of birth are required." }
  }

  const { data, error } = await supabaseAdmin
    .from("students")
    .select("id, admission_number, full_name, user_id, fees_status")
    .eq("admission_number", admissionNumber.trim())
    .eq("dob", dob.trim())
    .maybeSingle()

  if (error) {
    console.error("Database lookup error in verifyStudent:", error)
    return { matched: false, error: "Database error during student verification." }
  }

  if (!data) {
    return { matched: false, error: "No student record matches the provided admission number and date of birth." }
  }

  return { matched: true, student: data }
}
