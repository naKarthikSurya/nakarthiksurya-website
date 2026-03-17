import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import Seo from "@/components/Seo";

const expertiseAreas = [
  {
    title: "AI agents and automations",
    description:
      "Tool-using agents, orchestration workflows, and business process automations built around practical product goals.",
    href: "/experience",
    cta: "View experience",
  },
  {
    title: "RAG and knowledge systems",
    description:
      "Retrieval pipelines that combine search, embeddings, reranking, and grounded responses for high-signal answers.",
    href: "/projects",
    cta: "Explore projects",
  },
  {
    title: "Full-stack product engineering",
    description:
      "User-facing web apps and APIs with React, TypeScript, Python, FastAPI, and production-oriented architecture.",
    href: "/about",
    cta: "Learn more about me",
  },
];

const Index = () => {
  return (
    <>
      <Seo
        description="Official portfolio of Karthik Surya, a software engineer and AI developer specializing in AI agents, multi-agent systems, RAG workflows, and production-ready applications."
        keywords="Karthik Surya, software engineer portfolio, AI developer portfolio, RAG engineer, AI agents, multi-agent systems, Chennai India"
      />
      <section className="min-h-[calc(100vh-5rem)] flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-primary opacity-20" />
        <div className="absolute bottom-0 left-0 w-24 h-24 md:w-48 md:h-48 bg-primary opacity-10" />

        <div className="container mx-auto px-4 md:px-8 py-12 md:py-0">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-mono-custom text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Software Engineer & AI Developer
              </p>
              <h1 className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.85] tracking-tighter">
                KARTHIK
                <br />
                SURYA
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 md:mt-12"
            >
              <p className="font-mono-custom text-xs md:text-sm text-muted-foreground max-w-lg">
                I build AI agents, multi-agent systems, RAG pipelines, and full-stack product experiences.
                Currently working at C1X in Chennai after completing a B.Tech in Artificial Intelligence and Data Science.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                to="/projects"
                className="brutalist-border-thick px-6 py-3 font-mono-custom text-xs uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors flex items-center gap-2"
              >
                View Projects <ArrowRight size={14} />
              </Link>
              <Link
                to="/resume"
                className="brutalist-border-thick px-6 py-3 font-mono-custom text-xs uppercase tracking-wider bg-primary text-primary-foreground hover:bg-foreground hover:text-background transition-colors flex items-center gap-2"
              >
                Resume.pdf <Download size={14} />
              </Link>
              <Link
                to="/contact"
                className="brutalist-border-thick px-6 py-3 font-mono-custom text-xs uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-2"
              >
                Contact <Mail size={14} />
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              EXPERT AI DEVELOPER & FULL-STACK ENGINEER EXPERTISE<span className="text-primary">.</span>
            </h2>
            <div className="font-body text-base text-foreground/80 leading-relaxed font-normal space-y-6">
              <p>
                As a dedicated <strong className="text-foreground">Software Engineer</strong> and <strong className="text-foreground">AI Developer</strong> based in Chennai, India, I specialize in architecting and deploying scalable, intelligent systems. 
                My focus is on transforming conceptual AI research into robust, production-ready web applications that drive real business value.
              </p>
              <p>
                A core pillar of my technical repertoire is building dynamic <strong className="text-foreground">Retrieval-Augmented Generation (RAG)</strong> workflows. 
                By leveraging advanced foundational models like Gemini and Llama, alongside semantic search engines such as Qdrant and ColBERT, 
                I design RAG pipelines that ground language model responses in proprietary data. This ensures high-signal, hallucination-free outputs critical for enterprise AI solutions.
              </p>
              <p>
                Beyond standard implementations, I engineer complex <strong className="text-foreground">Multi-Agent Systems</strong>. Using frameworks like CrewAI and the Model Context Protocol (MCP), 
                I orchestrate autonomous agents that can collaborate, utilize external tools, and automate intricate business processes across platforms like Jira, GitHub, and Slack. 
                From real-time qualitative sentiment analysis to automated document processing, these agentic architectures significantly enhance operational efficiency.
              </p>
              <p>
                On the <strong className="text-foreground">Full-Stack Development</strong> front, I bring these AI capabilities to life through intuitive, fast, and responsive user interfaces. 
                My stack primarily revolves around React and TypeScript for the frontend, coupled with robust Python (FastAPI) and Node.js (NestJS) backends. 
                Every application I build prioritizes clean code, thorough testing, secure data handling, and optimized deployment via Docker, ensuring that the end product is as reliable as it is innovative.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="font-mono-custom text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
                Focus areas
              </p>
              <h2 className="font-display text-4xl md:text-6xl">
                WHAT I BUILD<span className="text-primary">.</span>
              </h2>
            </div>
            <p className="font-body text-sm md:text-base text-foreground/70 max-w-2xl">
              My work sits at the intersection of AI engineering, product thinking, and software delivery.
              I focus on systems that are useful in production, not just impressive in demos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => (
              <motion.article
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="brutalist-border-thick p-6 bg-background hover:shadow-[8px_8px_0_hsl(var(--primary))] transition-shadow"
              >
                <h3 className="font-display text-2xl mb-3">{area.title}</h3>
                <p className="font-body text-sm text-foreground/75 leading-relaxed mb-6">
                  {area.description}
                </p>
                <Link
                  to={area.href}
                  className="font-mono-custom text-xs uppercase tracking-wider inline-flex items-center gap-2 text-primary hover:text-foreground transition-colors"
                >
                  {area.cta} <ArrowRight size={14} />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;