# Karthik Surya | Personal Portfolio & AI Portfolio

A high-performance, aesthetically driven personal portfolio website for **Karthik Surya**, a Software Engineer and AI Developer specializing in Multi-Agent Systems, RAG, and intelligent automation.

Built with a modern stack focusing on **Visual Excellence**, **SEO Optimization**, and **Seamless UX**.

Live at: [nakarthiksurya.com](https://nakarthiksurya.com)

## 🚀 Key Features

- **Brutalist-Inspired Aesthetics**: A signature design style using bold borders, vibrant accents, and high-impact typography.
- **AI-Centric Project Showcase**: Detailed breakdown of projects like *LegalAdviser-AI* and *Legal Information Retrieval System*.
- **Interactive Progress & Experience**: Dynamic timeline and skill visualizations using Framer Motion.
- **Dual-Mode Contact System**: Integrated contact form with support for both client-side Brevo direct send and serverless API modes.
- **Advanced SEO Engine**: Custom-built SEO component managing JSON-LD, Meta tags, OpenGraph, and Twitter Cards per route.
- **Performance Optimized**: Built on Vite with React 18, utilizing SSG/SSR patterns where applicable.
- **Responsive & Accessible**: Fully optimized for mobile, tablet, and desktop viewing with accessibility best practices.

## 🛠️ Tech Stack

### Core
- **Framework**: [React 18](https://reactjs.org/) (Vite-powered)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

### Services & Integrations
- **Email**: [Brevo (formerly Sendinblue)](https://www.brevo.com/) Transactional API
- **SEO**: React Helmet Async + Custom Config
- **Deployment**: Vercel (recommended) / Static Hosting

### Tooling
- **Bundler**: Vite 5
- **Linting**: ESLint + Prettier
- **Testing**: Vitest + Testing Library

## 📂 Project Structure

```text
├── api/             # Serverless backend functions (Contact API)
├── public/          # Static assets (robots.txt, profile images, resume PDF)
├── src/
│   ├── components/  # Reusable UI components (Navbar, Footer, SEO, etc.)
│   │   └── ui/      # shadcn/ui components
│   ├── config/      # Global site configuration (SEO constants)
│   ├── pages/       # Main route components (Index, About, Experience, Projects)
│   ├── App.tsx      # Routing and application entry
│   └── main.tsx     # React DOM initialization
├── .env.example     # Template for environment variables
└── tailwind.config.ts # Custom theme and brutalist design tokens
```

## ⚙️ Local Development

### Prerequisites
- Node.js (Latest LTS)
- npm or bun

### Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example` and add your Brevo API keys.
4. Start the development server:
   ```bash
   npm run dev
   ```

### Quality Control
- **Lint**: `npm run lint`
- **Test**: `npm run test`
- **Build**: `npm run build`

## 📧 Contact Setup

The contact system (found in `src/pages/Contact.tsx`) is designed for flexibility:

- **Client-Side Mode**: If `VITE_BREVO_API_KEY` is provided, the frontend will send emails directly. *Note: Use with caution in public repos.*
- **API Mode**: For better security, keep the key server-side and the frontend will attempt to call `/api/contact`.

## 📄 License

This project is personal property. Feel free to use it as inspiration, but please respect the personal branding and content.

---
Created with ❤️ by [Karthik Surya](https://github.com/nakarthiksurya)
