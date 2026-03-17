# Database Setup Instructions

## Problem
The checkout system is failing because the `orders` and `order_items` tables haven't been created in your Supabase database yet.

## Solution
Follow these steps to manually create the required database tables:

### Step 1: Open Supabase Dashboard
1. Go to https://app.supabase.com
2. Select your "dachshundpuppies2025" project
3. Click on "SQL Editor" in the left sidebar

### Step 2: Create a New Query
1. Click the "+" button to create a new query
2. Copy and paste the entire SQL script below into the editor:

```sql
-- Create orders table
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  order_number text unique not null,
  customer_name text not null,
  customer_email text not null,
  customer_phone text not null,
  customer_address text not null,
  customer_city text not null,
  customer_state text not null,
  customer_zip text not null,
  payment_method text not null,
  total_amount numeric(10, 2) not null,
  status text not null default 'pending',
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Create order_items table
create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  puppy_name text not null,
  puppy_breed text not null,
  puppy_color text not null,
  puppy_gender text not null,
  puppy_age text not null,
  puppy_price numeric(10, 2) not null,
  puppy_image text,
  quantity integer default 1,
  payment_type text,
  created_at timestamp with time zone default now()
);

-- Enable RLS
alter table public.orders enable row level security;
alter table public.order_items enable row level security;

-- Create policies for orders
create policy "Anyone can view orders"
  on public.orders for select
  using (true);

create policy "Anyone can insert orders"
  on public.orders for insert
  with check (true);

create policy "Anyone can update orders"
  on public.orders for update
  using (true);

-- Create policies for order_items
create policy "Anyone can view order items"
  on public.order_items for select
  using (true);

create policy "Anyone can insert order items"
  on public.order_items for insert
  with check (true);

-- Create indexes
create index if not exists orders_email_idx on public.orders(customer_email);
create index if not exists orders_order_number_idx on public.orders(order_number);
create index if not exists order_items_order_id_idx on public.order_items(order_id);

-- Create function to update updated_at timestamp
create or replace function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- Create trigger for updated_at
drop trigger if exists orders_updated_at on public.orders;
create trigger orders_updated_at
  before update on public.orders
  for each row
  execute function public.handle_updated_at();
```

### Step 3: Execute the Script
1. Click the "Run" button (or press Ctrl+Enter / Cmd+Enter)
2. Wait for the query to complete successfully
3. You should see a confirmation message

### Step 4: Verify Tables Were Created
1. Go to the "Table Editor" in the left sidebar
2. You should now see `orders` and `order_items` tables listed
3. Click on each table to verify the columns are correct

## After Setup
Once the tables are created, the checkout system will work properly. Try placing an order again, and it should succeed!

## Troubleshooting
- If you get an error about "relation already exists", it means the tables were already created - you can ignore this error
- If the script fails, make sure you're using the correct Supabase project
- Check that Row Level Security (RLS) is enabled on both tables

## Questions?
If you need help, contact support@dachshundpuppiesonline.shop
