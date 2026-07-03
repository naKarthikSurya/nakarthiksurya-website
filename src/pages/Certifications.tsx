import { motion } from "framer-motion";
import { Award, ExternalLink, ChevronLeft } from "lucide-react";
import Link from "next/link";
import Seo from "@/components/Seo";

const certifications = [
  { 
    title: "Introduction to Generative AI", 
    issuer: "Google Cloud (Coursera)", 
    date: "Mar 2025",
    description: "Fundamental concepts of generative AI, large language models, and Google Cloud's AI tools.",
    link: "https://www.coursera.org/account/accomplishments/verify/..."
  },
  { 
    title: "Transformer Models and BERT Model", 
    issuer: "Google Cloud (Coursera)", 
    date: "Mar 2025",
    description: "In-depth study of the Transformer architecture and the Bidirectional Encoder Representations from Transformers (BERT) model.",
    link: "https://www.coursera.org/account/accomplishments/verify/..."
  },
  { 
    title: "Cybersecurity Analysis Design", 
    issuer: "FutureSkills Prime (Gold Certified)", 
    date: "Jun 2024",
    description: "Comprehensive certification on cybersecurity principles, threat analysis, and secure system design.",
    link: "https://futureskillsprime.in/..."
  },
  { 
    title: "Microsoft Office Beginner & Advanced", 
    issuer: "Microsoft (Naan Mudhalvan)", 
    date: "Nov 2022",
    description: "Advanced proficiency in Microsoft Office suite for professional productivity.",
    link: "#"
  },
];

const Certifications = () => {
  return (
    <>
      <Seo
        title="Professional Certifications"
        description="Industry-recognized certifications in Generative AI, Cybersecurity, and Software Engineering held by Karthik Surya."
        keywords="Karthik Surya certifications, Google Cloud Generative AI, Cybersecurity certification, software engineering credentials"
        type="website"
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
                AWARDS
              </span>
              <h1 className="font-display text-5xl md:text-7xl relative z-10">
                Certifications<span className="text-primary">.</span>
              </h1>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="brutalist-border-thick p-6 bg-background/80 backdrop-blur-md hover:shadow-[8px_8px_0_hsl(var(--primary))] transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 brutalist-border bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Award size={24} />
                  </div>
                  <span className="font-mono-custom text-xs font-bold uppercase text-muted-foreground bg-muted px-2 py-1">
                    {cert.date}
                  </span>
                </div>
                
                <h2 className="font-display text-2xl mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h2>
                <p className="font-mono-custom text-sm text-primary font-bold mb-4">
                  {cert.issuer}
                </p>
                <p className="font-body text-sm text-foreground/70 mb-6 leading-relaxed">
                  {cert.description}
                </p>
                
                {cert.link !== "#" && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono-custom text-xs uppercase tracking-tighter text-primary hover:text-foreground transition-colors"
                  >
                    Verify Credential <ExternalLink size={12} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 p-8 brutalist-border bg-primary/5 border-dashed text-center"
          >
            <p className="font-display text-lg">
              Continuously learning and expanding my expertise in AI, Cloud, and Security<span className="text-primary">.</span>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Certifications;
