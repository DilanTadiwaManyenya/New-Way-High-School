-- ==========================================
-- NEW WAY COLLEGE - INITIAL SUPABASE SCHEMA & RLS MIGRATION
-- Migration: 20260817000000_initial_schema.sql
-- Description: Establishes user roles, student records, parent-student relationships,
--              academic records, attendance, behavior notes, announcements, and RLS policies.
-- ==========================================

-- ------------------------------------------
-- 1. CUSTOM ENUM TYPES
-- ------------------------------------------

-- User role enum
CREATE TYPE public.user_role AS ENUM ('parent', 'student', 'admin');

-- Fees status enum for fees-gating logic
CREATE TYPE public.fees_status_type AS ENUM ('paid', 'partial', 'owing');

-- Audience enum for announcements
CREATE TYPE public.announcement_audience AS ENUM ('all', 'parents', 'students');


-- ------------------------------------------
-- 2. TABLES CREATION
-- ------------------------------------------

-- Profiles Table (Linked to auth.users)
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  phone TEXT,
  role public.user_role NOT NULL DEFAULT 'parent',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Students Table
CREATE TABLE public.students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID UNIQUE REFERENCES public.profiles(id) ON DELETE SET NULL, -- Optional link if student has auth login
  admission_number TEXT NOT NULL UNIQUE,
  dob DATE,
  full_name TEXT NOT NULL,
  class TEXT NOT NULL,
  fees_status public.fees_status_type NOT NULL DEFAULT 'owing',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Parent-Student Relationship Table (Many-to-Many)
CREATE TABLE public.parent_student (
  parent_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  student_id UUID NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (parent_id, student_id)
);

-- Academic Records Table
CREATE TABLE public.academic_records (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  term TEXT NOT NULL,
  subject TEXT NOT NULL,
  score NUMERIC(5,2) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Attendance Table
CREATE TABLE public.attendance (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('present', 'absent', 'excused')),
  lateness BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Behavior Notes Table
CREATE TABLE public.behavior_notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  note TEXT NOT NULL,
  staff_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Announcements Table
CREATE TABLE public.announcements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  audience public.announcement_audience NOT NULL DEFAULT 'all',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);


-- ------------------------------------------
-- 3. HELPER FUNCTIONS FOR SECURITY DEFINER RLS
-- ------------------------------------------

-- Check if current user is an admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;

-- Check if current user is a parent linked to a specific student
CREATE OR REPLACE FUNCTION public.is_parent_of(student_uuid UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.parent_student
    WHERE parent_id = auth.uid() AND student_id = student_uuid
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;

-- Check if current user is the student associated with a specific student record
CREATE OR REPLACE FUNCTION public.is_student_self(student_uuid UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.students
    WHERE id = student_uuid AND (user_id = auth.uid() OR id = auth.uid())
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;


-- ------------------------------------------
-- 4. ROW LEVEL SECURITY (RLS) POLICIES
-- ------------------------------------------

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.parent_student ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.academic_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.behavior_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;

-- ==========================================
-- PROFILES POLICIES
-- ==========================================
-- Users can view their own profile
CREATE POLICY "Users can select own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id OR public.is_admin());

-- Users can update their own profile (phone number only, role locked)
CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id OR public.is_admin());

-- Admins can insert and delete profiles
CREATE POLICY "Admins can manage all profiles" ON public.profiles
  FOR ALL USING (public.is_admin());


-- ==========================================
-- STUDENTS POLICIES
-- ==========================================
-- Admins full access
CREATE POLICY "Admins full access on students" ON public.students
  FOR ALL USING (public.is_admin());

-- Parents can SELECT linked students
CREATE POLICY "Parents select linked students" ON public.students
  FOR SELECT USING (public.is_parent_of(id));

-- Students can SELECT own student record
CREATE POLICY "Students select own record" ON public.students
  FOR SELECT USING (user_id = auth.uid() OR id = auth.uid());


-- ==========================================
-- PARENT_STUDENT POLICIES
-- ==========================================
-- Admins full access
CREATE POLICY "Admins full access on parent_student" ON public.parent_student
  FOR ALL USING (public.is_admin());

-- Parents can view their own links
CREATE POLICY "Parents select own parent_student links" ON public.parent_student
  FOR SELECT USING (parent_id = auth.uid());

-- Students can view their own links
CREATE POLICY "Students select own parent_student links" ON public.parent_student
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.students s
      WHERE s.id = parent_student.student_id AND (s.user_id = auth.uid() OR s.id = auth.uid())
    )
  );


-- ==========================================
-- ACADEMIC RECORDS POLICIES
-- ==========================================
-- Admins full access
CREATE POLICY "Admins full access on academic_records" ON public.academic_records
  FOR ALL USING (public.is_admin());

-- Parents can SELECT academic records for linked students
CREATE POLICY "Parents select academic records for linked students" ON public.academic_records
  FOR SELECT USING (public.is_parent_of(student_id));

-- Students can SELECT own academic records
CREATE POLICY "Students select own academic records" ON public.academic_records
  FOR SELECT USING (public.is_student_self(student_id));


-- ==========================================
-- ATTENDANCE POLICIES
-- ==========================================
-- Admins full access
CREATE POLICY "Admins full access on attendance" ON public.attendance
  FOR ALL USING (public.is_admin());

-- Parents can SELECT attendance for linked students
CREATE POLICY "Parents select attendance for linked students" ON public.attendance
  FOR SELECT USING (public.is_parent_of(student_id));

-- Students can SELECT own attendance records
CREATE POLICY "Students select own attendance records" ON public.attendance
  FOR SELECT USING (public.is_student_self(student_id));


-- ==========================================
-- BEHAVIOR NOTES POLICIES
-- ==========================================
-- Admins full access
CREATE POLICY "Admins full access on behavior_notes" ON public.behavior_notes
  FOR ALL USING (public.is_admin());

-- Parents can SELECT behavior notes for linked students
CREATE POLICY "Parents select behavior notes for linked students" ON public.behavior_notes
  FOR SELECT USING (public.is_parent_of(student_id));

-- Students can SELECT own behavior notes
CREATE POLICY "Students select own behavior notes" ON public.behavior_notes
  FOR SELECT USING (public.is_student_self(student_id));


-- ==========================================
-- ANNOUNCEMENTS POLICIES
-- ==========================================
-- Admins full access
CREATE POLICY "Admins full access on announcements" ON public.announcements
  FOR ALL USING (public.is_admin());

-- Authenticated users can view announcements targeted to them
CREATE POLICY "Users select relevant announcements" ON public.announcements
  FOR SELECT USING (
    audience = 'all'
    OR (
      audience = 'parents' AND EXISTS (
        SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'parent'
      )
    )
    OR (
      audience = 'students' AND EXISTS (
        SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'student'
      )
    )
  );
