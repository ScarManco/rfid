/*
  # Create default admin user

  1. Changes
    - Creates a default admin user for initial access
    - Email: admin@rfid.com
    - Password: admin123

  Note: This uses Supabase's built-in auth.users table
*/

-- Create the default admin user
INSERT INTO auth.users (
  id,
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at,
  raw_app_meta_data,
  raw_user_meta_data,
  is_super_admin,
  role
)
VALUES (
  gen_random_uuid(),
  'admin@rfid.com',
  crypt('admin123', gen_salt('bf')),
  now(),
  now(),
  now(),
  '{"provider":"email","providers":["email"]}',
  '{}',
  false,
  'authenticated'
);