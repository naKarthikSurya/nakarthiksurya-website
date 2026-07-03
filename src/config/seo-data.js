export const siteConfig = {
  siteUrl: "https://www.nakarthiksurya.com",
  siteName: "Karthik Surya",
  alternateNames: ["Karthik Surya AI", "nakarthiksurya.com", "Karthik Surya Portfolio"],
  author: "Karthik Surya",
  jobTitle: "Software Engineer & AI Developer",
  employer: "Class One Exchange (C1X)",
  defaultTitle: "Karthik Surya | AI Developer, RAG Engineer, Backend Builder",
  defaultDescription:
    "Portfolio of Karthik Surya, a software engineer building RAG systems, AI agents, FastAPI backends, and applied ML projects.",
  defaultKeywords:
    "Karthik Surya, AI developer, software engineer, RAG engineer, AI agents, multi-agent systems, generative AI, Chennai India",
  defaultOgImage: "/profile.jpg",
  defaultOgImageAlt:
    "Karthik Surya - Software Engineer and AI Developer Portfolio",
  defaultProfileImage: "/profile.jpg",
  themeColor: "#c97832",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  language: "en-IN",
  locale: "en_IN",
  email: "n.a.karthiksurya@gmail.com",
  phone: "+91-93********34",
  location: "Chennai / Bangalore, India",
  addressLocality: "Chennai",
  addressRegion: "Tamil Nadu",
  addressCountry: "IN",
  twitterHandle: "@nakarthiksurya",
  resumePath: "/suryaresume.pdf",
  lastUpdated: new Date().toISOString(),
  sameAs: [
    "https://github.com/nakarthiksurya",
    "https://linkedin.com/in/karthiksurya-na",
    "https://x.com/nakarthiksurya",
    "https://youtube.com/@nakarthiksurya-ks",
  ]
};


export const routeSeo = {
  "/": {
    title: "Karthik Surya | AI Developer, RAG Engineer, Backend Builder",
    description:
      "Portfolio of Karthik Surya, a software engineer building RAG systems, AI agents, FastAPI backends, and applied ML projects. Based in Chennai, India.",
    keywords:
      "Karthik Surya, AI engineer, software engineer, RAG engineer, AI agents, multi-agent systems, Chennai India",
    ogType: "website",
    schemaType: "WebPage",
  },
  "/about": {
    title: "About Karthik Surya | AI Developer and Software Engineer",
    description:
      "Learn about Karthik Surya's journey in AI systems, backend engineering, FastAPI, RAG, and production-focused experimentation.",
    keywords:
      "About Karthik Surya, AI engineer India, software engineer Chennai, C1X engineer, artificial intelligence portfolio",
    ogType: "profile",
    schemaType: "ProfilePage",
  },
  "/experience": {
    title: "Professional Experience | AI & Software Engineering",
    description:
      "Review Karthik Surya's experience building intelligent agents, RAG pipelines, and production AI tools at C1X and in previous internships.",
    keywords:
      "Karthik Surya experience, AI engineer experience, C1X software engineer, RAG developer, generative AI engineer",
    ogType: "website",
    schemaType: "CollectionPage",
  },
  "/projects": {
    title: "AI Projects and Case Studies | Karthik Surya",
    description:
      "Explore production launches, prototypes, and case studies across RAG, AI agents, FastAPI, and computer vision by Karthik Surya.",
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
    title: "Contact Karthik Surya | AI and Backend Collaboration",
    description:
      "Get in touch with Karthik Surya about AI systems, RAG pipelines, FastAPI backends, applied ML projects, or consulting opportunities.",
    keywords:
      "Contact Karthik Surya, hire AI developer, software engineer contact, AI consultant India, collaboration with Karthik Surya",
    ogType: "website",
    schemaType: "ContactPage",
  },
  "/resume": {
    title: "Resume | Karthik Surya — AI Engineer & Software Engineer",
    description:
      "View or download the resume of Karthik Surya, a software engineer and AI developer specializing in agentic AI, RAG, and product engineering.",
    keywords:
      "Karthik Surya resume, AI developer resume, software engineer CV, RAG engineer resume, AI portfolio PDF",
    ogType: "website",
    schemaType: "ProfilePage",
  },
  "/publications": {
    title: "Research Publications | Karthik Surya — AI Engineer",
    description: "Scholarly publications by Karthik Surya focusing on Transformer-based frameworks and intelligent information retrieval.",
    keywords: "Karthik Surya publications, legal information retrieval, transformer framework, AI research",
    ogType: "article",
    schemaType: "CollectionPage",
  },
  "/certifications": {
    title: "Professional Certifications | Karthik Surya",
    description: "Industry-recognized certifications in Generative AI, Cybersecurity, and Software Engineering held by Karthik Surya.",
    keywords: "Karthik Surya certifications, Google Cloud Generative AI, Cybersecurity certification, software engineering credentials",
    ogType: "website",
    schemaType: "CollectionPage",
  },
  "/education": {
    title: "Education and Academic Background | Karthik Surya",
    description: "Academic journey and B.Tech in Artificial Intelligence and Data Science from Panimalar Institute of Technology.",
    keywords: "Karthik Surya education, Panimalar Institute of Technology, B.Tech AI and Data Science",
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

  return `${normalizedTitle}`;
};

export const getCanonicalUrl = (pathname = "/") => {
  if (!pathname || pathname === "/") {
    return `${siteConfig.siteUrl}/`;
  }

  // Ensure leading slash and remove trailing slash for consistency
  const cleanPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const finalPath = cleanPath.endsWith("/") && cleanPath.length > 1 
    ? cleanPath.slice(0, -1) 
    : cleanPath;

  return `${siteConfig.siteUrl}${finalPath}`;
};