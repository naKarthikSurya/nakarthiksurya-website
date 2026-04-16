import { motion } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, Calendar, Tag, Layers } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "@/components/Seo";
import { projects } from "@/config/projects";

const ProjectDetail = ({ id: propId }: { id?: string }) => {
  const router = useRouter();
  const idFromRouter = router.query.id;
  const id = propId || (typeof idFromRouter === 'string' ? idFromRouter : undefined);

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-primary hover:underline">Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Seo
        title={`${project.title} | Case Study`}
        description={project.description}
        keywords={`${project.title}, ${project.tags.join(", ")}, Karthik Surya projects`}
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
              href="/projects"
              className="inline-flex items-center gap-2 font-mono-custom text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ChevronLeft size={16} /> Back to Projects
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="font-mono-custom text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2 block">
                  {project.category}
                </span>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl">
                  {project.title}<span className="text-primary">.</span>
                </h1>
              </div>
              <div className="flex gap-4 mb-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutalist-border-thick px-6 py-2 font-mono-custom text-sm uppercase bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-2 font-bold"
                >
                  <Github size={18} /> View Code
                </a>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="brutalist-border-thick p-8 md:p-12 bg-background/80 backdrop-blur-md">
                <h2 className="font-display text-3xl mb-6 border-b-2 border-primary/20 pb-4">Executive Summary</h2>
                <p className="font-body text-lg md:text-xl leading-relaxed text-foreground/80 mb-8 font-medium">
                  {project.description}
                </p>
                
                <h2 className="font-display text-3xl mb-6">Background & Implementation</h2>
                <div className="font-body text-base md:text-lg leading-relaxed text-foreground/80 space-y-6">
                  <p>{project.fullDescription}</p>
                </div>

                <div className="mt-12 p-8 brutalist-border-thick border-primary/20 bg-primary/5">
                  <h3 className="font-display text-2xl mb-4">Key Technical Specs</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 brutalist-border bg-background text-primary">
                        <Layers size={18} />
                      </div>
                      <div>
                        <p className="font-mono-custom text-[10px] uppercase text-muted-foreground uppercase tracking-wider">Architecture</p>
                        <p className="font-mono-custom text-sm font-bold">{project.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 brutalist-border bg-background text-primary">
                        <Calendar size={18} />
                      </div>
                      <div>
                        <p className="font-mono-custom text-[10px] uppercase text-muted-foreground uppercase tracking-wider">Date</p>
                        <p className="font-mono-custom text-sm font-bold">{project.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="brutalist-border-thick p-8 bg-background/80 backdrop-blur-md">
                <h3 className="font-display text-2xl mb-6 flex items-center gap-2">
                  <Tag size={20} className="text-primary" /> Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="brutalist-border px-3 py-1 font-mono-custom text-xs uppercase tracking-widest font-bold bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="brutalist-border-thick p-8 bg-primary text-primary-foreground shadow-[8px_8px_0_hsl(var(--foreground))]">
                <h3 className="font-display text-2xl mb-4 uppercase">Next Project</h3>
                <p className="font-body text-sm mb-6 opacity-90">Discover more of Karthik's work in AI and System Design.</p>
                <Link 
                  href="/projects"
                  className="inline-flex items-center gap-2 font-mono-custom text-sm uppercase tracking-widest border-2 border-primary-foreground px-4 py-2 hover:bg-primary-foreground hover:text-primary transition-all font-bold"
                >
                  Browse All <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

const ArrowRight = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14m-7-7 7 7-7 7" />
  </svg>
);

const ProjectRoute = (props: Record<string, unknown>) => {
  return <ProjectDetail {...props} />;
};

export default ProjectRoute;
