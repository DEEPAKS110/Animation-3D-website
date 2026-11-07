"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 24);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
        scrolled
          ? "border-white/10 bg-[#12070a]/80 shadow-[0_8px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="page-gutter flex h-[76px] items-center justify-between" aria-label="Main navigation">
        <a href="#top" className="flex items-center gap-3" aria-label="Primo home">
          <svg
            viewBox="0 0 40 40"
            className="h-9 w-9"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M20 35.5C14.3 30.9 7.3 24.7 7.3 16.8c0-5.3 3.3-8.8 7.9-8.8 2 0 3.7.9 4.8 2.6 1.2-1.7 2.9-2.6 4.9-2.6 4.6 0 7.8 3.5 7.8 8.8 0 7.9-7 14.1-12.7 18.7Z"
              fill="url(#berry-fill)"
            />
            <path
              d="M20 10.4c-.5-2.4-2.1-4-4.1-4.9 2.8-.4 4.7.7 5.5 2.6 1.6-2 3.9-2.8 6.4-2.2-2.2 1.2-3.6 2.6-4.2 4.5"
              stroke="#bce092"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="berry-fill" x1="8" y1="8" x2="31" y2="36" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ff5368" />
                <stop offset="1" stopColor="#e56835" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-gradient text-[1.35rem] font-semibold tracking-[-0.06em]">
            primo<span className="font-light">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-9 text-[0.7rem] font-medium uppercase tracking-[0.17em] text-white/65 md:flex">
          <a className="transition-colors hover:text-white" href="#story">The story</a>
          <a className="transition-colors hover:text-white" href="#details">The flavour</a>
        </div>

        <a
          href="#order"
          className="rounded-full border border-white/25 bg-white/[0.06] px-5 py-2.5 text-xs font-medium tracking-wide transition-all duration-300 hover:border-rose-300/70 hover:bg-rose-500/15 hover:shadow-glow"
        >
          Order now <span aria-hidden="true" className="ml-1 text-rose-200">↗</span>
        </a>
      </nav>
    </motion.header>
  );
}
