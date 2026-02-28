# 🚀 Maurizio Tolomeo | Personal Website

[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://mauriziotolomeo.it)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Biome](https://img.shields.io/badge/Biome-60A5FA?style=for-the-badge&logo=biome&logoColor=white)](https://biomejs.dev/)

Welcome to my personal website! I'm **Maurizio Tolomeo** (aka **MORIS**), a Frontend Developer passionate about creating sleek, functional, and user-friendly interfaces. This site serves as my digital portfolio, blog, and playground for modern web technologies.

---

## ✨ Key Features

- **🌍 Multi-language Support (i18n)**: Full support for English and Italian, dynamically handled via dictionaries and cookies.
- **📝 Dynamic Blog**: A full-featured blog with articles stored in a local SQLite database, supporting filtering and pagination.
- **💼 Portfolio Showcase**: A detailed view of my projects, including tech stacks and descriptions.
- **📊 Skills & Experience**: Interactive curriculum vitae, professional experience timeline, and an infinite-scrolling skills section.
- **🎮 Interactive Quiz**: A built-in quiz system to engage visitors.
- **📨 Contact System**: Functional contact form integrated with **Nodemailer**.
- **🌗 Dark/Light Mode**: Seamless theme switching for better user experience.
- **🎭 Rich Animations**: Smooth transitions and interactive elements using **Framer Motion** and **AOS**.
- **⚡ High Performance**: Optimized with **Next.js**, **Vercel Analytics**, and **Speed Insights**.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Database**: [SQLite](https://www.sqlite.org/) (via [better-sqlite3](https://github.com/WiseLibs/node-better-sqlite3))
- **State Management**: [Jotai](https://jotai.org/)
- **Forms**: [React Hook Form](https://react-hook-form.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/), [AOS](https://michalsnik.github.io/aos/)
- **Tooling**: [Biome](https://biomejs.dev/) (Linting & Formatting)
- **Icons**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📂 Project Structure

```text
├── .github/             # CI/CD Workflows
├── public/              # Static assets & SQLite database
│   └── database.db      # Local SQLite database
├── src/
│   ├── app/             # Next.js App Router (Pages & API)
│   │   ├── api/         # Backend routes (Blog, Contacts)
│   │   ├── dictionaries/# i18n translation files (EN/IT)
│   │   └── (pages)/     # Application routes
│   ├── components/      # UI & Page-specific components
│   ├── data/            # Static JSON data (Skills, Projects, etc.)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Core logic & Database configuration
│   └── types/           # TypeScript declarations
```

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** (v22.x or later)
- **npm** or **pnpm**

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/moris88/my-web-site.git
    cd my-web-site
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Run the development server**:

    ```bash
    npm run dev
    ```

4. **Linting & Formatting**:

    ```bash
    npm run lint     # Check for linting issues
    npm run format   # Format the codebase with Biome
    ```

---

## 🚀 Deployment

The site is optimized for **Vercel**.

- **Staging**: Pushing to `main` triggers an automatic deployment.
- **Production**: Pushing a tag `vX.X.X` (e.g., `v1.0.0`) triggers a production release.

Make sure to configure the necessary environment variables (e.g., for Nodemailer) in your Vercel dashboard.

---

## 📄 License

This project is distributed under the **MIT License**. See `LICENSE` for more information.

---

Built with ❤️ by [Maurizio Tolomeo](https://github.com/moris88)
