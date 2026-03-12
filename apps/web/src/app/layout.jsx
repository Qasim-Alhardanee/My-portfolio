import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sun,
  Moon,
  Github,
  Linkedin,
  Mail,
  Download,
  Menu,
  X,
} from "lucide-react";
import { twMerge } from "tailwind-merge";

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position to add navbar backdrop blur effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links configuration - Updated order to match page structure
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Skills", href: "/#skills" },
    { name: "Contact", href: "/#contact" },
  ];

  // Handle smooth scrolling to sections on the same page
  const handleNavClick = (e, href) => {
    // Check if the link is a hash link (e.g., /#about, /#skills)
    if (href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.substring(2); // Remove /# to get the id

      // If we're on a different page (not home), navigate to home first
      if (typeof window !== "undefined" && window.location.pathname !== "/") {
        window.location.href = href;
        return;
      }

      // If we're already on home page, smooth scroll to section
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Smooth scroll to the target element
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setIsOpen(false); // Close mobile menu if open
      }
    } else if (
      href === "/" &&
      typeof window !== "undefined" &&
      window.location.pathname === "/"
    ) {
      // If clicking "Home" while already on home page, scroll to top
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={twMerge(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-white/80 dark:bg-[#0A0A0F]/80 backdrop-blur-md py-3 border-[#6366F1]/20 shadow-lg"
          : "bg-transparent py-5 border-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <a
          href="/"
          onClick={(e) => handleNavClick(e, "/")}
          className="text-2xl font-bold tracking-tighter text-[#0A0A0F] dark:text-white flex items-center gap-2"
        >
          <span className="w-10 h-10 bg-[#6366F1] flex items-center justify-center rounded-xl text-white">
            QA
          </span>
          <span className="hidden sm:block">Qasim.</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#6366F1] dark:hover:text-[#6366F1] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right side controls: Theme toggle + CV download */}
        <div className="flex items-center gap-4">
          {/* Theme toggle button (Dark/Light mode) */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-[#6366F1] transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* 
            CV Download Button (Desktop)
            
            HOW TO ADD YOUR CV PDF:
            1. Place your PDF file in the /apps/web/public/ folder
            2. Name it exactly: Qasim-Alhardanee-CV.pdf
            3. The file will be automatically accessible at /Qasim-Alhardanee-CV.pdf
            
            Path: /apps/web/public/Qasim-Alhardanee-CV.pdf
          */}
          <a
            href="/Qasim-Alhardanee-CV.pdf"
            download
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-[#6366F1] text-white text-sm font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all active:scale-95"
          >
            <Download size={18} />
            CV
          </a>

          {/* Mobile menu toggle button */}
          <button
            className="md:hidden p-2 text-slate-600 dark:text-slate-400"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-[#111118] border-b border-[#6366F1]/10 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {/* Mobile navigation links */}
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-lg font-medium text-slate-600 dark:text-slate-400"
                >
                  {link.name}
                </a>
              ))}

              {/* CV Download Button (Mobile) - see desktop button above for setup instructions */}
              <a
                href="/Qasim-Alhardanee-CV.pdf"
                download
                className="flex items-center justify-center gap-2 w-full py-4 bg-[#6366F1] text-white rounded-xl font-bold"
              >
                <Download size={20} />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="border-t border-slate-200 dark:border-[#1E293B] py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500">
      {/* Copyright notice - Updated to 2026 */}
      <p>© 2026 Qasim Alhardanee. All rights reserved.</p>

      {/* Built with section */}
      <p className="flex items-center gap-1">
        Built with <span className="text-red-500">❤</span> using React &
        Tailwind
      </p>

      {/* Social media links */}
      <div className="flex items-center gap-6">
        <a
          href="https://github.com/Qasim-Alhardanee"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#6366F1] transition-colors"
          aria-label="GitHub Profile"
        >
          <Github size={20} />
        </a>
        <a
          href="https://linkedin.com/in/qasim-alhardanee"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#6366F1] transition-colors"
          aria-label="LinkedIn Profile"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:qasimalhardanee@gmail.com"
          className="hover:text-[#6366F1] transition-colors"
          aria-label="Email Contact"
        >
          <Mail size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default function RootLayout({ children }) {
  // Theme state management (dark mode is default)
  const [theme, setTheme] = useState("dark");

  // Apply theme class to document root element
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Toggle between dark and light themes
  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <div
      className={twMerge(
        "min-h-screen font-sans selection:bg-[#6366F1]/30 selection:text-[#6366F1]",
        theme === "dark"
          ? "bg-[#0A0A0F] text-slate-200"
          : "bg-white text-slate-900",
      )}
    >
      {/* SEO Tags */}
      <title>Qasim Alhardanee — Frontend Developer</title>
      <meta
        name="description"
        content="Frontend Developer based in Ankara, Turkey. Specializing in React, Next.js and modern UI development. Available for hire."
      />

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="pt-20">{children}</main>
      <Footer />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        :root {
          --bg-primary: #0A0A0F;
          --bg-secondary: #111118;
          --accent: #6366F1;
        }

        body {
          font-family: 'Inter', sans-serif;
        }

        h1, h2, h3, h4, .font-display {
          font-family: 'Space Grotesk', sans-serif;
        }

        .text-glow {
          text-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
        }

        .bg-grid {
          background-image: radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.05) 1px, transparent 0);
          background-size: 40px 40px;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-shimmer {
          position: relative;
          overflow: hidden;
        }

        .animate-shimmer::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}
