"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  onOpenContact: () => void;
}

export default function Navigation({ onOpenContact }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Services", "Process", "Portfolio"];

  return (
    <nav className="fixed top-0 w-full z-[100] px-4 py-4 md:px-10 md:py-8 transition-all">
      <div className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-4 rounded-2xl border transition-all ${
        isScrolled ? "bg-[#2F2F2F] border-white/10 shadow-2xl" : "bg-transparent border-transparent"
      }`}>
        <div className="flex items-center tracking-tighter">
          <span className="text-2xl font-[900] text-[#F0F8FF] uppercase">NAGL</span>
          <span className="text-2xl font-[900] text-[#10B981] uppercase">IND</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-[11px] font-bold text-white/70 uppercase tracking-[0.2em] hover:text-[#10B981] transition-colors">{link}</a>
          ))}
          <button 
            onClick={onOpenContact} 
            className="bg-[#10B981] text-[#2F2F2F] px-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest active:scale-95 transition-all"
          >
            Let's Talk
          </button>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button onClick={onOpenContact} className="bg-[#10B981] text-[#2F2F2F] px-4 py-2 rounded-lg text-[10px] font-black uppercase">Talk</button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}