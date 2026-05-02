"use client";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2F2F2F] border-b border-white/10">
      <div className="w-full max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        
        {/* LEFT: Branding */}
        <div className="flex-1">
          <div style={{ fontSize: '24px' }} className="font-bold tracking-tighter text-[#F0F8FF]">
            naglind<span className="text-[#10B981]">.</span>
          </div>
        </div>

        {/* MIDDLE: Links */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-12">
          {['Services', 'Work', 'About','Process'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              style={{ fontSize: '16px' }}
              className="font-bold uppercase tracking-widest text-slate-400 hover:text-[#10B981] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* RIGHT: CTA */}
        <div className="hidden md:flex flex-1 justify-end">
          <button 
            style={{ fontSize: '14px' }}
            className="bg-[#10B981] text-[#2F2F2F] px-8 py-3 rounded-lg font-black uppercase tracking-tighter hover:brightness-110 transition active:scale-95 shadow-lg"
          >
            Start a Project
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button className="md:hidden text-[#F0F8FF] p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#2F2F2F] border-b border-white/10 p-10 flex flex-col gap-10 md:hidden animate-in fade-in slide-in-from-top-4">
          <a href="#services" style={{ fontSize: '24px' }} className="font-black uppercase text-[#F0F8FF]" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#work" style={{ fontSize: '24px' }} className="font-black uppercase text-[#F0F8FF]" onClick={() => setIsOpen(false)}>Work</a>
          <a href="#about" style={{ fontSize: '24px' }} className="font-black uppercase text-[#F0F8FF]" onClick={() => setIsOpen(false)}>About</a>
          <button 
            style={{ fontSize: '22px' }}
            className="w-full bg-[#10B981] text-[#2F2F2F] py-6 rounded-2xl font-black uppercase shadow-xl"
          >
            Start a Project
          </button>
        </div>
      )}
    </nav>
  );
}