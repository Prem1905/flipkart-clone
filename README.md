🛒 Flipkart Clone (Full-Stack)

A Flipkart-inspired e-commerce web application built using Next.js App Router, Prisma, and PostgreSQL, focusing on real-world frontend + backend patterns such as product listing, cart management, checkout flow, and order generation.

✨ Features
🏠 Product Listing

Paginated product grid

Category-based products

Discount badges & stock indicators

Product images with lazy loading

🔍 Product Detail Page

High-quality product images

Ratings & reviews summary

Price, discount, and stock status

Add to Cart (only from product page)

🛒 Cart System

Global cart state using React Context

Increment / decrement item quantity

Remove items from cart

Persistent cart using localStorage

Clean empty-cart experience

💳 Checkout Flow

Order summary

Total price calculation

Order ID generation

Order success screen

Cart cleared only after order placement

🎨 UI / UX

Flipkart-inspired layout

Responsive design (mobile + desktop)

Sticky cart summary

Clean typography & spacing

Polished empty states

🧱 Tech Stack
Frontend

Next.js 16 (App Router)

React

TypeScript

Tailwind CSS

Backend

Node.js

Prisma ORM

PostgreSQL (Neon)

Dev & Deployment

pnpm

GitHub

Vercel

Prisma Migrations & Seeding

🧠 Key Learnings

Building scalable layouts with Next.js App Router

Handling global state with React Context

Server vs Client Components

Managing database schema changes using Prisma

Real-world checkout & order flow logic

Debugging production-level issues (images, fetch, hydration)

🚀 Getting Started Locally
1️⃣ Clone the repository
git clone https://github.com/<your-username>/flipkart-clone.git
cd flipkart-clone

2️⃣ Install dependencies
pnpm install

3️⃣ Set up environment variables

Create .env file:

DATABASE_URL=postgresql://user:password@host/dbname?sslmode=require

4️⃣ Run Prisma migrations
npx prisma migrate dev

5️⃣ Seed the database
npx prisma db seed

6️⃣ Start the app
pnpm run dev


App runs on:
👉 http://localhost:3000

📝 Future Improvements

User authentication

Address management

Payment gateway integration

Order history page

Reviews & comments system

Wishlist feature
