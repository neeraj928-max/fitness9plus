-- ==============================================================================
-- Fitness Pluse 9 - Supabase Database Schema & RLS Fix
-- Table: appointments
-- Run this in your Supabase Dashboard: SQL Editor -> New query -> Run
-- ==============================================================================

-- 1. Create the appointments table (if not exists)
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

-- 2. Grant usage & table permissions to public/anon roles
grant usage on schema public to anon, authenticated;
grant all on table public.appointments to anon, authenticated;

-- 3. Ensure Row Level Security (RLS) is enabled
alter table public.appointments enable row level security;

-- 4. Remove any conflicting existing policies
drop policy if exists "Allow public insert to appointments" on public.appointments;
drop policy if exists "Enable insert for all users" on public.appointments;
drop policy if exists "allow_anon_insert" on public.appointments;
drop policy if exists "anon_insert" on public.appointments;
drop policy if exists "public_insert" on public.appointments;
drop policy if exists "Allow authenticated read appointments" on public.appointments;
drop policy if exists "Allow public select appointments" on public.appointments;

-- 5. Policy: Allow visitors / anonymous users to insert new appointments (Fixes 42501 RLS error)
create policy "Allow public insert to appointments"
  on public.appointments
  for insert
  to anon, authenticated
  with check (true);

-- 6. Policy: Allow reading appointments
create policy "Allow public select appointments"
  on public.appointments
  for select
  to anon, authenticated
  using (true);

-- 7. Index for performance
create index if not exists idx_appointments_created_at on public.appointments (created_at desc);

