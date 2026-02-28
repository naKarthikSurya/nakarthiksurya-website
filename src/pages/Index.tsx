import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <>
      <Seo
        title="Software Engineer & AI Developer"
        description="Karthik Surya is a Software Engineer & AI Developer specializing in intelligent agents, multi-agent systems, and RAG. Explore my portfolio and projects."
        keywords="Karthik Surya, nakarthiksurya, Software Engineer, AI Developer, Chennai, Multi-agent systems, RAG applications, Generative AI"
        faqs={[
          {
            question: "What does Karthik Surya specialize in?",
            answer: "I specialize in building production-ready AI systems, specifically focusing on multi-agent workflows, Retrieval-Augmented Generation (RAG), and intelligent automation using LLMs like Gemini and LLaMA."
          },
          {
            question: "What is Karthik Surya's educational background?",
            answer: "I hold a B.Tech in Artificial Intelligence and Data Science from Panimalar Institute of Technology, with a focus on machine learning and natural language processing."
          },
          {
            question: "Where is Karthik Surya currently working?",
            answer: "I am currently working as a Software Engineer at Class One Exchange (C1X) in Chennai, India, where I develop real-time intelligent agents and RAG-based systems."
          },
          {
            question: "What technical stack does Karthik Surya use?",
            answer: "My core stack includes Python (FastAPI, PyTorch), TypeScript (React, NestJS), and various AI frameworks like CrewAI, LlamaIndex, and the Gemini API."
          }
        ]}
      />
      <section className="min-h-[calc(100vh-5rem)] flex flex-col justify-center relative overflow-hidden">
        {/* Copper accent block */}
        <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-primary opacity-20" />
        <div className="absolute bottom-0 left-0 w-24 h-24 md:w-48 md:h-48 bg-primary opacity-10" />

        <div className="container mx-auto px-4 md:px-8 py-12 md:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Main Content */}
            <div className="lg:col-span-2">
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
                  Currently building intelligent agents & multi-agent systems at C1X, Chennai.
                  B.Tech in Artificial Intelligence & Data Science.
                </p>
              </motion.div>

              {/* CTAs */}
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
                  View Work <ArrowRight size={14} />
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

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden lg:flex justify-center"
            >
              <div className="brutalist-border-thick w-64 h-80 bg-muted flex items-center justify-center overflow-hidden" style={{ transform: "rotate(2deg)" }}>
                <img
                  src="/profile-photo.jpg"
                  alt="Karthik Surya - Software Engineer & AI Developer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                    (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="font-display text-6xl text-primary/30">KS</span>';
                  }}
                />
              </div>
            </motion.div>

          </div>
        </div>

        {/* Bottom border accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
      </section>
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl mb-12 text-center">
              FREQUENTLY ASKED<br />QUESTIONS<span className="text-primary">.</span>
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  q: "What does Karthik Surya specialize in?",
                  a: "I specialize in building production-ready AI systems, specifically focusing on multi-agent workflows, Retrieval-Augmented Generation (RAG), and intelligent automation using LLMs like Gemini and LLaMA."
                },
                {
                  q: "What is Karthik Surya's educational background?",
                  a: "I hold a B.Tech in Artificial Intelligence and Data Science from Panimalar Institute of Technology, with a focus on machine learning and natural language processing."
                },
                {
                  q: "Where is Karthik Surya currently working?",
                  a: "I am currently working as a Software Engineer at Class One Exchange (C1X) in Chennai, India, where I develop real-time intelligent agents and RAG-based systems."
                },
                {
                  q: "What technical stack does Karthik Surya use?",
                  a: "My core stack includes Python (FastAPI, PyTorch), TypeScript (React, NestJS), and various AI frameworks like CrewAI, LlamaIndex, and the Gemini API."
                }
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="brutalist-border-thick p-6 bg-background shadow-[4px_4px_0_hsl(var(--primary))]"
                >
                  <h3 className="font-display text-xl mb-3">{faq.q}</h3>
                  <p className="font-body text-sm text-foreground/70 leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
