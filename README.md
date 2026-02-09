# 🌌 Creatorverse

Creatorverse is a React + Vite single-page application that lets users create, view, edit, and delete content creators.  
It uses **Supabase** as a backend and focuses on clean CRUD flows, routing, and modern React patterns.

This project was built as **prework for an advanced web development course**.
---

## ✨ Overview

**Browse all creators**  
![Creatorverse overview](./src/assets/creatorverse.gif)

**Add a new creator**  
![Add creator flow](./src/assets/creatorverse-add.gif)

---

## 🧰 Tech Stack

- **Vite + React** (JavaScript)
- **React Router** (SPA routing)
- **Supabase** (Postgres + API)
- **PicoCSS** (minimal styling)
- No SSR, no Next.js

---

## 🚀 Getting Started

### Install dependencies
```bash
npm install
````

### Run the development server

```bash
npm run dev
```

Then open the local URL printed by Vite (usually `http://localhost:5173`).

---

## 🗄️ Supabase Setup

This project connects directly to Supabase from the browser using a **public (anon/publishable) key**, which is acceptable for demos and coursework.

Row Level Security (RLS) is disabled for simplicity.

The Supabase project should include a `creators` table with columns similar to:

* `id` (primary key)
* `name`
* `url`
* `description`
* `imageURL`

---

## 🌱 Seeding the Database (Dev Convenience)

A seed script is included to reset the database to a known default state for development.

### Run the seed script

```bash
npm run seed
```

What this does:

* Clears existing rows from the `creators` table
* Inserts a small set of default creators
* Intended for **local/dev use only**

⚠️ Do not run the seed script against a production database.

---

### Routes

* `/` — View all creators
* `/creators/new` — Add creator
* `/creators/:id` — View creator
* `/creators/:id/edit` — Edit creator

---

## 🔒 Notes on Security

This project intentionally uses a **simplified Supabase client**:

* Direct browser access
* Public key
* No authentication or RLS

See comments `in client.js` regarding security and next steps for more advanced implementation.

---

## 📦 Scripts

```bash
npm run dev    # start development server
npm run seed   # reset + seed Supabase data (dev only)
```

