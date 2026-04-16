import { motion } from "framer-motion";
import { Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import Seo from "@/components/Seo";
import { projects } from "@/config/projects";

const Projects = () => {
  return (
    <>
      <Seo
        title="Projects"
        description="Explore AI and software engineering projects by Karthik Surya, featuring legal AI assistants, RAG systems, and computer vision applications."
        keywords="Karthik Surya projects, legal AI India, RAG systems portfolio, Gemini AI applications, vision transformer projects"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: projects.map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "SoftwareApplication",
              name: project.title,
              description: project.description,
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Any",
              author: {
                "@type": "Person",
                name: "Karthik Surya",
              },
            },
          })),
        }}
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="relative mb-16">
            <span className="font-display text-[5rem] md:text-[10rem] text-foreground/5 absolute -top-6 md:-top-12 left-0 select-none leading-none pointer-events-none uppercase">
              WORK
            </span>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl">
                Case Studies & Portfolio Projects<span className="text-primary">.</span>
              </h1>
              <div className="inline-block brutalist-border px-3 py-1 mt-4">
                <span className="font-mono-custom text-xs uppercase tracking-widest text-primary">Focused on applied AI & Scalable Systems</span>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="brutalist-border-thick p-6 md:p-8 flex flex-col hover:shadow-[12px_12px_0_hsl(var(--primary))] transition-all group bg-background/80 backdrop-blur-md"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-display text-5xl md:text-6xl text-primary/30 group-hover:text-primary/50 transition-colors uppercase">{project.num}</span>
                  <span className="brutalist-border px-2 py-0.5 font-mono-custom text-[10px] uppercase font-bold tracking-widest">{project.date}</span>
                </div>

                <h2 className="font-display text-2xl md:text-3xl mb-1 group-hover:text-primary transition-colors">{project.title}</h2>
                <p className="font-mono-custom text-xs text-primary uppercase tracking-widest font-bold mb-4">{project.subtitle}</p>
                <p className="font-body text-sm text-foreground/70 leading-relaxed flex-1 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span key={tag} className="brutalist-border px-2 py-0.5 font-mono-custom text-[10px] uppercase tracking-wider bg-primary/5">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-auto">
                  <Link
                    href={`/projects/${project.id}`}
                    className="brutalist-border-thick px-5 py-2 font-mono-custom text-xs uppercase tracking-widest bg-primary text-primary-foreground hover:bg-foreground hover:text-background transition-colors flex items-center gap-2 font-bold"
                  >
                    View Case Study <ArrowRight size={14} />
                  </Link>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutalist-border px-4 py-2 font-mono-custom text-xs uppercase tracking-wider hover:bg-muted transition-colors flex items-center gap-2"
                  >
                    <Github size={14} /> Code
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;