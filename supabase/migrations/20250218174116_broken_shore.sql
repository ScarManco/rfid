/*
  # Create default user

  1. Authentication
    - Creates a default user using Supabase's auth.users() function
    - Email: admin@rfid.com
    - Password: admin123
*/

-- Create the user using Supabase's auth functions
SELECT auth.create_user(
  uid := gen_random_uuid(),
  email := 'admin@rfid.com',
  password := 'admin123',
  email_confirmed := true,
  created_at := now(),
  updated_at := now()
);