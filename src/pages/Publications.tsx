import { motion } from "framer-motion";
import { BookOpen, ExternalLink, ChevronLeft } from "lucide-react";
import Link from "next/link";
import Seo from "@/components/Seo";

const Publications = () => {
  return (
    <>
      <Seo
        title="Research Publications"
        description="Scholarly publications by Karthik Surya focusing on Transformer-based frameworks and intelligent information retrieval."
        keywords="Karthik Surya publications, legal information retrieval, transformer framework, AI research"
        type="article"
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link 
              href="/about"
              className="inline-flex items-center gap-2 font-mono-custom text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ChevronLeft size={16} /> Back to About
            </Link>
            
            <div className="relative">
              <span className="font-display text-[6rem] md:text-[10rem] text-foreground/5 absolute -top-8 md:-top-16 left-0 select-none leading-none uppercase">
                RESEARCH
              </span>
              <h1 className="font-display text-5xl md:text-7xl relative z-10">
                Publications<span className="text-primary">.</span>
              </h1>
            </div>
          </motion.div>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="brutalist-border-thick p-6 md:p-10 bg-background/80 backdrop-blur-md hover:shadow-[12px_12px_0_hsl(var(--primary))] transition-all group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 brutalist-border bg-primary/10 text-primary">
                  <BookOpen size={32} />
                </div>
                <div>
                  <h2 className="font-display text-2xl md:text-4xl mb-2 group-hover:text-primary transition-colors">
                    Towards Intelligent Legal Information Retrieval
                  </h2>
                  <p className="font-mono-custom text-sm text-primary font-bold uppercase tracking-wider">
                    A Transformer-Based Framework
                  </p>
                </div>
              </div>

              <div className="space-y-6 font-body text-base md:text-lg text-foreground/80">
                <p>
                  Published in the <strong>International Journal of Scientific Research in Engineering Management (IJSREM)</strong>, Volume 09, Issue 05, May 2025.
                </p>
                
                <div className="brutalist-border p-5 bg-muted/30 italic">
                  "This research proposes a specialized transformer-based framework designed to handle the nuances of legal language, improving both the precision and recall of information retrieval in complex legal datasets."
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono-custom text-[10px] uppercase text-muted-foreground tracking-tighter">Digital Object Identifier</span>
                    <span className="brutalist-border px-3 py-1 font-mono-custom text-xs bg-background">DOI: 10.55041/IJSREM48260</span>
                  </div>
                  
                  <div className="flex items-end">
                    <a
                      href="https://doi.org/10.55041/IJSREM48260"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brutalist-border px-6 py-2 font-mono-custom text-sm uppercase bg-primary text-primary-foreground hover:bg-foreground hover:text-background transition-colors flex items-center gap-2 font-bold"
                    >
                      <ExternalLink size={16} /> Read Full Paper
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-16 p-8 brutalist-border bg-muted/20 border-dashed"
            >
              <h3 className="font-display text-xl mb-4">Research Interests</h3>
              <div className="flex flex-wrap gap-2">
                {["Legal Tech", "NLP", "Information Retrieval", "Transformers", "Knowledge Graphs"].map(tag => (
                  <span key={tag} className="brutalist-border px-3 py-1 font-mono-custom text-xs bg-background">
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Publications;
