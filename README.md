# Premium E-commerce Store | Minimalist Luxury

A high-fidelity, responsive e-commerce application built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. This project focuses on a "Minimalist Luxury" aesthetic, providing a seamless and premium shopping experience.

## 🚀 Live Deployment
**Live URL**: [Pending Vercel Deployment] (Please replace with your Vercel URL after deployment)

---

## ✨ Key Features

### 1. Home Page & Discovery
- **Editorial Hero Section**: High-impact visuals with sophisticated typography.
- **Dynamic Filtering**: Category (pills) and Price Range filters synced with URL parameters for shareable search states.
- **Real-time Search**: Search products instantly with dynamic string matching.
- **Responsive Product Grid**: Adaptive layout (3 columns desktop, 2 tablet, 1 mobile) with interactive, hover-animated product cards.

### 2. Deep Interaction
- **Dynamic Routing**: Individualized product pages (`/product/[id]`) for every item in the collection.
- **Quantity Management**: Precision controls for item counts on detail pages and in the cart.
- **Wishlist System**: Persistent "Saved Objects" functionality with a real-time notification badge in the header.

### 3. Shopping Flow
- **Persistent Cart**: Powered by **Zustand** with local storage persistence—your cart survives refreshes and session restarts.
- **Visual Feedback**: Success states for "Add to Bag" actions and hydration-safe rendering for accurate badge counts.
- **Comprehensive Cart Page**: Full overview of items, quantity controls, removal options, and price summary.

---

## 🛠️ Technology Stack
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Custom Glassmorphism, Sophisticated Color Palette)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: CSS Transitions & Framer-style micro-interactions

---

## 📦 Project Structure
- `/src/app`: Next.js App Router pages (Home, Product Detail, Cart, Profile, etc.)
- `/src/components`: Reusable UI components (Header, Footer, Filters, ProductCard, etc.)
- `/src/store`: State management logic for Cart and Wishlist.
- `/src/data`: Mock product data and types.

---

## 🛠️ Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/UkatoSpeaks/shop.git
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run in development mode**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## ✅ Assignment Checklist Coverage
- [x] **Home Page**: Header (Logo, Search, Cart), Sidebar (Category, Price), Responsive Grid.
- [x] **Product Detail**: Image gallery, Info, Quantity Selector, Add to Bag, Recommendations.
- [x] **Cart Page**: Item list, Quantity update, Remove item, Price summary.
- [x] **Logic**: Filtering, Search, URL-based state, Zustand persistence, Dynamic routing.
- [x] **Styling**: Premium UI, Lucide icons, mobile-responsive.
- [x] **Best Practices**: Incremental commits, Hydraion-fix implemented, TypeScript safety.

---

*Developed with an eye for detail and a commitment to premium design.*
