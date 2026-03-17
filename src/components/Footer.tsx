import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="overflow-hidden brutalist-border-thick border-l-0 border-r-0 border-b-0 py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="font-display text-4xl md:text-6xl mx-8 text-background/80">
              GET IN TOUCH - SAY HELLO -
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-3xl md:text-4xl text-background">KARTHIK SURYA N A</h3>
            <p className="font-mono-custom text-xs text-background/60 mt-1">
              Copyright {currentYear} - All Rights Reserved
            </p>
          </div>
            <div className="flex gap-4">
              <a href="https://github.com/nakarthiksurya" target="_blank" rel="noreferrer" className="text-background/60 hover:text-primary transition-colors" aria-label="GitHub Profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href="https://linkedin.com/in/karthiksurya-na" target="_blank" rel="noreferrer" className="text-background/60 hover:text-primary transition-colors" aria-label="LinkedIn Profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://x.com/nakarthiksurya" target="_blank" rel="noreferrer" className="text-background/60 hover:text-primary transition-colors" aria-label="X Profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;