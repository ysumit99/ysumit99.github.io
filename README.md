# Sumit Yadav | Staff Engineer Portfolio

[![Deploy to GitHub Pages](https://github.com/ysumit99/ysumit99.github.io/actions/workflows/deployment.yml/badge.svg)](https://github.com/ysumit99/ysumit99.github.io/actions/workflows/deployment.yml)
[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

The personal portfolio and engineering hub for **Sumit Yadav**, a Staff Software Engineer specializing in distributed systems, AI integrations, and highly scalable cloud-native architectures.

🌐 **Live Site:** [ysumit99.github.io](https://ysumit99.github.io/)

---

## 🏗️ Architecture & Tech Stack

This portfolio is engineered for maximum performance, SEO optimization, and zero-maintenance deployment. It abandons heavy client-side rendering in favor of a purely static, edge-ready build.

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS + Lucide Icons + React Icons
- **Language:** TypeScript
- **Deployment:** GitHub Pages (Static Export)
- **CI/CD:** Automated via GitHub Actions

## 🚀 Key Engineering Decisions

1. **Static Export (`output: 'export'`):** The application is configured to compile down to raw HTML/CSS/JS at build time. This allows it to be hosted on any static edge network (like GitHub Pages) without requiring a Node.js runtime, resulting in sub-100ms TTFB (Time to First Byte).
2. **Component-Driven UI:** Built using semantic HTML and highly modular React components for maintainability.
3. **Automated Pipeline:** A custom GitHub Actions workflow (`deploy.yml`) handles dependency installation, static compilation, and artifact deployment on every push to the `main` branch.

---

## 💻 Local Development

To run this project locally and experiment with the architecture:

**1. Clone the repository**
```bash
git clone [https://github.com/ysumit99/ysumit99.github.io.git](https://github.com/ysumit99/ysumit99.github.io.git)
cd ysumit99.github.io
```

**2. Install dependencies**
```bash
npm install
```

**3. Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📂 Project Structure

```text
.
├── .github/workflows/   # CI/CD pipeline configuration (deploy.yml)
├── public/              # Static assets (favicons, images)
├── src/
│   └── app/
│       ├── globals.css  # Tailwind directives and global styles
│       ├── layout.tsx   # Root layout and SEO Metadata optimization
│       └── page.tsx     # Main portfolio interface and data arrays
├── next.config.ts       # Next.js static export configuration
└── tailwind.config.ts   # Tailwind theme settings
```

---

## 🤝 Connect

I am actively seeking Staff Engineer and Technical Leadership roles. If you are building ambitious, highly scalable systems, let's talk.

- [LinkedIn](https://www.linkedin.com/in/sumityadav-dev/)
- [Email](mailto:ysumit99@gmail.com)
- [Technical Blog](https://sumityadav-dev.vercel.app/)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

_Designed and engineered by [Sumit Yadav](https://ysumit99.github.io/) · [Blog](https://sumityadav-dev.vercel.app) · [LinkedIn](https://www.linkedin.com/in/sumityadav-dev/) · [GitHub](https://github.com/ysumit99/) © 2026_

