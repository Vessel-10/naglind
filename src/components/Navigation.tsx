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

  const links = ["Services", "Process", "Portfolio","Contact"];

  return (
    <nav className="fixed top-0 w-full z-[100] px-4 py-4 md:px-10 md:py-8 transition-all">
      <div className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-4 rounded-2xl border transition-all ${
        isScrolled ? "bg-[#2F2F2F]/90 backdrop-blur-md border-white/10 shadow-2xl" : "bg-transparent border-transparent"
      }`}>
        
        <a href="#" className="flex items-center tracking-tighter hover:opacity-90 transition-opacity">
          <span className="text-2xl font-[900] text-[#F0F8FF] uppercase">NAGL</span>
          <span className="text-2xl font-[900] text-[#10B981] uppercase">IND</span>
        </a>

        <div className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-[11px] font-bold text-white/70 uppercase tracking-[0.2em] hover:text-[#10B981] transition-colors">
              {link}
            </a>
          ))}
          <button 
            onClick={onOpenContact}
            className="bg-[#10B981] text-[#2F2F2F] px-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest active:scale-95 transition-all"
          >
            Let&apos;s Talk
          </button>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <button 
            onClick={onOpenContact}
            className="bg-[#10B981] text-[#2F2F2F] px-4 py-2 rounded-lg text-[10px] font-black uppercase"
          >
            Talk
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-28 left-4 right-4 bg-[#3A3A3A] border border-white/10 p-8 rounded-3xl flex flex-col gap-6 lg:hidden shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 z-[150]">
          {links.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-xl font-black text-white uppercase tracking-tighter hover:text-[#10B981] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}