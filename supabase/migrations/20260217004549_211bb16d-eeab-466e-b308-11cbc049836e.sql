
-- Create enrollments table
CREATE TABLE public.enrollments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  confirmation_id TEXT NOT NULL UNIQUE,
  program_format TEXT NOT NULL,
  payment_plan TEXT NOT NULL,
  
  -- Student info
  student_first_name TEXT NOT NULL,
  student_last_name TEXT NOT NULL,
  student_dob DATE NOT NULL,
  student_grade TEXT NOT NULL,
  student_school TEXT,
  student_experience TEXT,
  student_interests TEXT,
  
  -- Parent/Guardian
  parent_first_name TEXT NOT NULL,
  parent_last_name TEXT NOT NULL,
  parent_email TEXT NOT NULL,
  parent_phone TEXT NOT NULL,
  parent_relationship TEXT NOT NULL,
  
  -- Address
  address_street TEXT NOT NULL,
  address_city TEXT NOT NULL,
  address_state TEXT NOT NULL,
  address_zip TEXT NOT NULL,
  address_country TEXT NOT NULL DEFAULT 'United States',
  
  -- Emergency contact
  emergency_name TEXT NOT NULL,
  emergency_phone TEXT NOT NULL,
  emergency_relationship TEXT NOT NULL,
  
  -- Meta
  opted_into_updates BOOLEAN NOT NULL DEFAULT false,
  total_charged TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anyone (public enrollment form)
CREATE POLICY "Anyone can submit enrollment"
  ON public.enrollments
  FOR INSERT
  WITH CHECK (true);
