/*
  # Setup authentication system

  1. Changes
    - Enables the auth schema extensions if not already enabled
    - Creates necessary auth configuration
    - Adds a default admin user
*/

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Insert into auth.users table
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  recovery_token,
  raw_app_meta_data,
  raw_user_meta_data,
  created_at,
  updated_at,
  confirmation_token
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  uuid_generate_v4(),
  'authenticated',
  'authenticated',
  'admin@rfid.com',
  crypt('admin123', gen_salt('bf')),
  NOW(),
  '',
  '{"provider": "email", "providers": ["email"]}',
  '{}',
  NOW(),
  NOW(),
  ''
) ON CONFLICT (email) DO NOTHING;

-- Enable row level security
ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own data" ON auth.users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);