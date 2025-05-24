# 🛍️ ecommerce-store-assesment

A functional and visually appealing e-commerce store built with **Next.js 14** & **React.js 18**, designed to demonstrate skills in working with APIs, creating user interfaces, and following best practices in modern frontend development.

## 🌐 Live Demo

[https://ecommerce-store-assesment.vercel.app/](https://ecommerce-store-assesment.vercel.app/)

## 📦 Features

- 🔄 Integration with **[Fake Store API](https://fakestoreapi.com/)**.
- 🎨 Styled using **Tailwind CSS** for responsive and modern UI.
- ⚙️ Built with **Next.js 14 App Router** and **feature-based structure**.
- 🛒 Product listing, category filtering, and product detail views.
- 🛒 Add-to-cart functionality using Context API
- 🌐 State management using **React Context API**.
- 🔗 API interaction with **Axios**.
- 📱 Responsive layout for desktop, tablet, and mobile.

## 🧠 Tech Stack

- **React.js 18**
- **Next.js 14**
- **Tailwind CSS**
- **React Context API**
- **Axios**
- **TypeScript**
- **Feature-based Folder Structure**

## 🧩 Why Feature-Based Structure?

This project follows a **feature-based folder structure** to:

- Organize the code based on features instead of file type.
- Improve **scalability** as the application grows.
- Make it easier to navigate, maintain, and extend specific areas of the app (e.g., `products`, `cart`, `filters`, etc.).
- Reduce coupling between unrelated parts of the application.

Each feature (like `products`, `cart`) lives in its own folder, keeping all related logic (UI, hooks, types, reducers) in one place.

## DeepWiki

For technical documentation, implementation details, and development notes, check out the project wiki:  
👉 [DeepWiki](https://deepwiki.com/Eslam-E-Hossni/ecommerce-store-assesment/7.1-cart-state-management)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ecommerce-store-assesment.git
cd ecommerce-store-assesment
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Start the development server

```bash
npm run dev
# or
yarn dev
```

### 4. Environment Variables

Create a `.env.local` file and add

```bash
NEXT_PUBLIC_API_BASE_URL=https://fakestoreapi.com
```

## 🥂 Enjoy
