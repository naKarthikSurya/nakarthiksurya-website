import Link from "next/link";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Award,
  BookOpen,
  Brain,
  Bot,
  Search,
  Server,
  BarChart3,
  MessageSquare,
  Users,
  Lightbulb,
  Code2,
  Bug,
  GitBranch,
  Workflow,
  Accessibility,
  type LucideIcon,
} from "lucide-react";
import Seo from "@/components/Seo";

const skills = [
  "Transformers", "Generative AI", "LLMs", "CrewAI", "Gemini API",
  "RAG Systems", "FastAPI", "NestJS", "Docker", "Python", "TypeScript"
];

type MarqueeSkill = {
  name: string;
  logo?: string;
  icon?: LucideIcon;
};

const marqueeSkillRows: MarqueeSkill[][] = [
  [
    { name: "Transformers", icon: Workflow },
    { name: "Generative AI", icon: Brain },
    { name: "LLMs", icon: Bot },
    { name: "RAG Systems", icon: Search },
    { name: "CrewAI", icon: GitBranch },
    { name: "Gemini API", icon: Server },
    { name: "BERT Models", icon: BookOpen },
  ],
  [
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "NestJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  ],
  [
    { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "Matplotlib", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
    { name: "Power BI", icon: BarChart3 },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  ],
  [
    { name: "API Design", icon: Code2 },
    { name: "Test Automation", icon: Bug },
    { name: "Version Control", icon: GitBranch },
    { name: "Problem-solving", icon: Lightbulb },
    { name: "Communication", icon: MessageSquare },
    { name: "Teamwork", icon: Users },
    { name: "Accessibility", icon: Accessibility },
  ],
];

const certifications = [
  { title: "Microsoft Office Beginner & Advanced", issuer: "Microsoft (Naan Mudhalvan)", date: "Nov 2022" },
  { title: "Cybersecurity Analysis Design", issuer: "FutureSkills Prime (Gold Certified)", date: "Jun 2024" },
  { title: "Introduction to Generative AI", issuer: "Google Cloud (Coursera)", date: "Mar 2025" },
  { title: "Transformer Models and BERT Model", issuer: "Google Cloud (Coursera)", date: "Mar 2025" },
];

const About = () => {
  return (
    <>
      <Seo
        title="About"
        description="Discover Karthik Surya's journey in AI and data science, his engineering role at C1X, and his specialization in intelligent agents, RAG, and NLP systems."
        keywords="Karthik Surya background, AI engineer Chennai, C1X software engineer, NLP specialist India, B.Tech AI and data science"
        type="profile"
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="relative mb-16">
            <span className="font-display text-[6rem] md:text-[12rem] text-foreground/5 absolute -top-8 md:-top-16 left-0 select-none leading-none">
              ABOUT
            </span>
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="font-display text-6xl md:text-8xl relative z-10"
            >
              About Karthik Surya | Software Engineer<span className="text-primary">.</span>
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="brutalist-border-thick w-full max-w-xs h-96 bg-muted overflow-hidden" style={{ transform: "rotate(-2deg)" }}>
                <img
                  src="/profile.jpg"
                  alt="Karthik Surya - Software Engineer at Class One Exchange"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="brutalist-border-thick p-6 md:p-8 bg-background/80 backdrop-blur-md">
                <div className="inline-block brutalist-border px-3 py-1 mb-6">
                  <span className="font-mono-custom text-xs uppercase tracking-widest text-primary">Software Engineer @ C1X</span>
                </div>
                <p className="font-body text-base md:text-lg leading-relaxed text-foreground/80 mb-6">
                  B.Tech in Artificial Intelligence and Data Science from Panimalar Institute of Technology with practical experience in building AI-driven systems.
                </p>
                <p className="font-body text-base md:text-lg leading-relaxed text-foreground/80 mb-6">
                  Currently working as a Software Engineer at C1Exchange (C1X), contributing to real-time intelligent agents, multi-agent frameworks, and retrieval-augmented generation (RAG) systems.
                </p>
                <p className="font-body text-base md:text-lg leading-relaxed text-foreground/80">
                  Experienced in machine learning, natural language processing, and cloud-based model deployment. Passionate about solving real-world problems with scalable AI solutions.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="brutalist-border px-3 py-1 font-mono-custom text-xs uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-24"
          >
            <div className="relative overflow-hidden brutalist-border-thick px-5 py-10 md:px-10 md:py-14 bg-background/80 backdrop-blur-md">
              <div className="relative">
                <h2 className="font-display text-center text-5xl md:text-6xl text-foreground mb-10">
                  MY SKILLS<span className="text-primary">.</span>
                </h2>

                <div className="space-y-4 md:space-y-5">
                  {marqueeSkillRows.map((row, rowIndex) => (
                    <div key={`skills-row-${rowIndex}`} className="relative overflow-hidden">
                      <motion.div
                        className="flex w-max items-center gap-3 md:gap-4"
                        animate={{ x: rowIndex % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
                        transition={{ duration: 22 + rowIndex * 3, repeat: Infinity, ease: "linear" }}
                      >
                        {[...row, ...row].map((skill, skillIndex) => {
                          const Icon = skill.icon;
                          return (
                            <span
                              key={`skill-${rowIndex}-${skill.name}-${skillIndex}`}
                              className="group flex shrink-0 items-center gap-2.5 brutalist-border bg-background/80 backdrop-blur-md px-3 py-2 md:px-4 transition-colors hover:bg-primary hover:text-primary-foreground"
                            >
                              {skill.logo ? (
                                <img
                                  src={skill.logo}
                                  alt={`${skill.name} icon`}
                                  className="h-5 w-5 object-contain opacity-90 group-hover:grayscale group-hover:invert transition-all rounded-sm p-[1px] transform translate-z-0"
                                />
                              ) : Icon ? (
                                <Icon className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors" aria-hidden />
                              ) : (
                                <span className="h-2 w-2 rounded-full bg-primary group-hover:bg-primary-foreground transition-colors" aria-hidden />
                              )}
                              <span className="font-mono-custom text-sm md:text-base normal-case">
                                {skill.name}
                              </span>
                            </span>
                          );
                        })}
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-24"
          >
            <div className="flex items-end justify-between mb-10">
              <h2 className="font-display text-4xl md:text-6xl">
                EDUCATION<span className="text-primary">.</span>
              </h2>
              <Link 
                href="/education" 
                className="font-mono-custom text-xs uppercase tracking-widest text-primary hover:text-foreground transition-colors mb-2 border-b border-primary"
              >
                View full academic background
              </Link>
            </div>

            <div className="brutalist-border-thick p-8 md:p-12 bg-background/80 backdrop-blur-md">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="inline-block brutalist-border px-3 py-1 mb-4">
                    <span className="font-mono-custom text-xs uppercase tracking-widest text-primary">2021 - 2025</span>
                  </div>
                  <h3 className="font-display text-3xl md:text-5xl">B.TECH IN AI & DATA SCIENCE</h3>
                  <p className="font-mono-custom text-sm text-muted-foreground mt-2">Panimalar Institute of Technology - Chennai, Tamil Nadu</p>
                </div>
                <div className="brutalist-border-thick p-4 md:p-6 bg-primary/5" style={{ transform: "rotate(-2deg)" }}>
                  <span className="font-display text-4xl md:text-6xl text-primary">8.30</span>
                  <p className="font-mono-custom text-xs uppercase tracking-widest text-muted-foreground">CGPA</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mt-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-end justify-between mb-8">
                <h2 className="font-display text-3xl md:text-4xl">
                  PUBLICATIONS<span className="text-primary">.</span>
                </h2>
                <Link 
                  href="/publications" 
                  className="font-mono-custom text-[10px] uppercase tracking-widest text-primary mb-1 border-b border-primary"
                >
                  Read papers
                </Link>
              </div>
              <div className="brutalist-border-thick p-6 hover:shadow-[8px_8px_0_hsl(var(--primary))] transition-shadow bg-background/80 backdrop-blur-md">
                <h3 className="font-display text-xl mb-2">Towards Intelligent Legal Information Retrieval</h3>
                <p className="font-mono-custom text-[10px] text-muted-foreground">International Journal of Scientific Research in Engineering Management (IJSREM)</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="flex items-end justify-between mb-8">
                <h2 className="font-display text-3xl md:text-4xl">
                  CERTIFICATIONS<span className="text-primary">.</span>
                </h2>
                <Link 
                  href="/certifications" 
                  className="font-mono-custom text-[10px] uppercase tracking-widest text-primary mb-1 border-b border-primary"
                >
                  View all
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="brutalist-border-thick p-5 bg-background/80 backdrop-blur-md group">
                  <h4 className="font-display text-lg group-hover:text-primary transition-colors">Generative AI & Transformer Models</h4>
                  <p className="font-mono-custom text-[10px] text-primary mt-1">Google Cloud (Coursera)</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;