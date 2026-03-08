export const siteConfig = {
  siteUrl: "https://nakarthiksurya.com",
  siteName: "Karthik Surya",
  author: "Karthik Surya",
  jobTitle: "Software Engineer & AI Developer",
  employer: "Class One Exchange (C1X)",
  defaultTitle: "Karthik Surya | Software Engineer, AI Developer, and RAG Engineer",
  defaultDescription:
    "Official portfolio of Karthik Surya, a software engineer and AI developer building AI agents, multi-agent systems, RAG workflows, and production-ready applications.",
  defaultKeywords:
    "Karthik Surya, nakarthiksurya, software engineer portfolio, AI developer portfolio, RAG engineer, AI agents, multi-agent systems, generative AI, Chennai India",
  defaultOgImage: "/profile.jpg",
  defaultOgImageAlt:
    "Karthik Surya portfolio preview for software engineering and AI development",
  defaultProfileImage: "/profile.jpg",
  themeColor: "#c97832",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  language: "en-IN",
  locale: "en_IN",
  email: "n.a.karthiksurya@gmail.com",
  phone: "+91-9360498834",
  location: "Chennai / Bangalore, India",
  addressLocality: "Chennai",
  addressRegion: "Tamil Nadu",
  addressCountry: "IN",
  twitterHandle: "@nakarthiksurya",
  resumePath: "/suryaresume.pdf",
  sameAs: [
    "https://github.com/nakarthiksurya",
    "https://linkedin.com/in/karthiksurya-na",
    "https://x.com/nakarthiksurya",
    "https://youtube.com/@nakarthiksurya-ks",
  ],
  lastUpdated: "2026-03-08",
};

export const routeSeo = {
  "/": {
    description:
      "Official portfolio of Karthik Surya, a software engineer and AI developer building AI agents, multi-agent systems, RAG workflows, and production-ready applications.",
    keywords:
      "Karthik Surya, software engineer portfolio, AI developer portfolio, RAG engineer, AI agents, multi-agent systems, Chennai India",
    ogType: "website",
    schemaType: "WebPage",
  },
  "/about": {
    title: "About",
    description:
      "Learn about Karthik Surya's background in artificial intelligence, his engineering work at C1X, and his focus on AI agents, RAG, and NLP systems.",
    keywords:
      "About Karthik Surya, AI engineer India, software engineer Chennai, C1X engineer, artificial intelligence portfolio",
    ogType: "profile",
    schemaType: "ProfilePage",
  },
  "/experience": {
    title: "Experience",
    description:
      "Review Karthik Surya's experience building intelligent agents, RAG systems, and production AI tools at C1X and in earlier internships.",
    keywords:
      "Karthik Surya experience, AI engineer experience, C1X software engineer, RAG developer, generative AI engineer",
    ogType: "website",
    schemaType: "CollectionPage",
  },
  "/projects": {
    title: "Projects",
    description:
      "Explore AI and software engineering projects by Karthik Surya, including legal AI assistants, RAG systems, and computer vision applications.",
    keywords:
      "Karthik Surya projects, AI projects portfolio, legal AI, RAG projects, computer vision portfolio, software engineering projects",
    ogType: "website",
    schemaType: "CollectionPage",
    itemList: [
      "LegalAdviser-AI (CivicAI)",
      "Legal Information Retrieval System",
      "BeastlyVisionX",
      "AI Story Generator",
    ],
  },
  "/contact": {
    title: "Contact",
    description:
      "Contact Karthik Surya for AI engineering roles, software projects, consulting, and collaboration opportunities.",
    keywords:
      "Contact Karthik Surya, hire AI developer, software engineer contact, AI consultant India, collaboration with Karthik Surya",
    ogType: "website",
    schemaType: "ContactPage",
  },
  "/resume": {
    title: "Resume",
    description:
      "View or download the resume of Karthik Surya, a software engineer and AI developer specializing in agentic AI, RAG, and product engineering.",
    keywords:
      "Karthik Surya resume, AI developer resume, software engineer CV, RAG engineer resume, AI portfolio PDF",
    ogType: "website",
    schemaType: "ProfilePage",
  },
};

export const buildPageTitle = (title) => {
  if (!title) {
    return siteConfig.defaultTitle;
  }

  const normalizedTitle = title.trim();
  if (!normalizedTitle) {
    return siteConfig.defaultTitle;
  }

  if (normalizedTitle.includes(siteConfig.siteName)) {
    return normalizedTitle;
  }

  return `${normalizedTitle} | ${siteConfig.siteName}`;
};

export const getCanonicalUrl = (pathname = "/") => {
  if (!pathname || pathname === "/") {
    return `${siteConfig.siteUrl}/`;
  }

  return `${siteConfig.siteUrl}${pathname}`;
};