"use client";
import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Send, Check, Loader2, ChevronDown } from "lucide-react";
import Modal from "./Modal"; 

interface NavigationProps {
  onOpenContact?: () => void;
}

const servicesList = [
  "Website Build",
  "Website Redesign",
  "Custom Dashboard",
  "SEO Optimization",
  "Monthly Maintenance"
];

export default function Navigation({ onOpenContact }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedService) {
      alert("Please select a service option.");
      return;
    }
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("Form Origin", "Navbar Let's Talk");
    formData.append("service", selectedService);

    try {
      const response = await fetch("https://formspree.io/f/xpqnqlbd", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setIsFormOpen(false);
        setShowSuccess(true);
        setSelectedService("");
        (e.target as HTMLFormElement).reset();
      } else {
        alert("Something went wrong. Please try sending your details again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const links = ["Services", "Process", "Portfolio", "Contact"];

  return (
    <>
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
              onClick={() => setIsFormOpen(true)}
              className="bg-[#10B981] text-[#2F2F2F] px-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest active:scale-95 transition-all"
            >
              Let&apos;s Talk
            </button>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <button 
              onClick={() => setIsFormOpen(true)}
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

      <Modal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} title="Let's Talk" size="small">
        <form onSubmit={handleSubmit} className="p-8 md:p-12 pb-12 md:pb-16 space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Full Name</label>
            <input required name="name" type="text" placeholder="Your name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#10B981]/50 focus:bg-white/[0.08] transition-all" />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Email Address</label>
            <input required name="email" type="email" placeholder="Your email address" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#10B981]/50 focus:bg-white/[0.08] transition-all" />
          </div>

          <div className="space-y-2 relative" ref={dropdownRef}>
            <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Select Service</label>
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-left text-white flex items-center justify-between focus:outline-none focus:border-[#10B981]/50 focus:bg-white/[0.08] transition-all"
            >
              <span className={selectedService ? "text-white" : "text-slate-600"}>
                {selectedService || "Choose a service..."}
              </span>
              <ChevronDown size={18} className={`text-slate-400 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 right-0 mt-2 bg-[#3A3A3A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-50">
                {servicesList.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => {
                      setSelectedService(service);
                      setDropdownOpen(false);
                    }}
                    className="w-full text-left px-6 py-4 text-sm text-slate-300 hover:bg-[#10B981] hover:text-[#2F2F2F] font-bold transition-all"
                  >
                    {service}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Message</label>
            <textarea required name="message" rows={4} placeholder="Tell me about your requirements..." className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#10B981]/50 focus:bg-white/[0.08] transition-all resize-none" />
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-[#10B981] disabled:opacity-50 text-[#2F2F2F] py-4 rounded-xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-xl"
          >
            {isSubmitting ? (
              <>Sending Request... <Loader2 size={16} className="animate-spin" /></>
            ) : (
              <>Send Message <Send size={14} /></>
            )}
          </button>
        </form>
      </Modal>

      <Modal isOpen={showSuccess} onClose={() => setShowSuccess(false)} title="Submission Successful" size="small">
        <div className="p-8 pb-12 text-center max-w-md mx-auto">
          <div className="w-16 h-16 mx-auto bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 rounded-full flex items-center justify-center mb-6">
            <Check size={32} className="animate-bounce" />
          </div>
          <h4 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Message Delivered!</h4>
          <p className="text-sm text-slate-400 leading-relaxed font-medium mb-6">
            Thanks for reaching out! Your submission went through successfully. I'll read through your note and get back to you shortly.
          </p>
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-[#10B981] rounded-full animate-[progress_4s_linear_forwards]" style={{ width: '100%' }} />
          </div>
        </div>
      </Modal>
    </>
  );
}