-- ==============================================================================
-- Fitness Pluse 9 - Supabase Database Schema
-- Table: appointments
-- Run this in your Supabase Dashboard: SQL Editor -> New query -> Run
-- ==============================================================================

-- 1. Create the appointments table
create table if not exists public.appointments (
  id uuid default gen_random_uuid() primary key,
  full_name text not null,
  phone text not null,
  email text not null,
  program text,
  goal text,
  experience text,
  notes text,
  status text default 'new',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Enable Row Level Security (RLS)
alter table public.appointments enable row level security;

-- 3. Policy: Allow visitors / website forms to insert new appointment applications
create policy "Allow public insert to appointments"
  on public.appointments
  for insert
  to anon, authenticated
  with check (true);

-- 4. Policy: Allow authenticated dashboard/admin users to read appointment applications
create policy "Allow authenticated read appointments"
  on public.appointments
  for select
  to authenticated
  using (true);

-- Optional: Create index on created_at for fast sorting
create index if not exists idx_appointments_created_at on public.appointments (created_at desc);
