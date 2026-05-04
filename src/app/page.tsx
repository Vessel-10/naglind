"use client";
import React, { useState, useRef, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Service";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import { Send, ChevronDown, Check } from "lucide-react";

const projectTypes = ["Website Build", "Website Redesign", "Custom Dashboard", "SEO Optimization", "Monthly Maintenance"];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Let's Talk");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const openModal = (title: string) => {
    setModalTitle(title);
    setIsModalOpen(true);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#2F2F2F]">
      <Navigation onOpenContact={() => openModal("Let's Talk")} />
      <Hero onStartProject={() => openModal("Start a Project")} />
      
      <Services />
      <Process />
      <Contact />
      <Footer />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={modalTitle}>
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Full Name</label>
              <input type="text" placeholder="Your full name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#10B981]/50 transition-all" />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Email Address</label>
              <input type="email" placeholder="Email address" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#10B981]/50 transition-all" />
            </div>
          </div>

          {/* DROPDOWN REPLICATED FROM CONTACT FILE */}
          <div className="space-y-3" ref={dropdownRef}>
            <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Project Type</label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex w-full items-center justify-between bg-white/5 border rounded-2xl px-6 py-4 text-left transition-all duration-300 ${isDropdownOpen ? "border-[#10B981]/50 bg-white/[0.08]" : "border-white/10"}`}
              >
                <span className={selectedType ? "text-white" : "text-slate-600"}>{selectedType || "Select a service"}</span>
                <ChevronDown className={`text-slate-400 transition-transform duration-500 ${isDropdownOpen ? "rotate-180 text-[#10B981]" : ""}`} size={20} />
              </button>

              {isDropdownOpen && (
                <div className="absolute z-50 w-full mt-3 bg-[#2F2F2F] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="p-2">
                    {projectTypes.map((type) => (
                      <div
                        key={type}
                        onClick={() => { setSelectedType(type); setIsDropdownOpen(false); }}
                        className="flex items-center justify-between px-5 py-4 rounded-xl cursor-pointer hover:bg-[#10B981] hover:text-[#2F2F2F] text-slate-300 transition-all duration-200"
                      >
                        <span className="font-bold text-sm uppercase tracking-wider">{type}</span>
                        {selectedType === type && <Check size={16} className="text-[#2F2F2F]" />}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Message</label>
            <textarea rows={4} placeholder="Your message here..." className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#10B981]/50 transition-all resize-none" />
          </div>

          <button type="submit" className="group bg-[#10B981] text-[#2F2F2F] px-12 py-5 rounded-2xl font-black uppercase tracking-tight flex items-center gap-3 hover:scale-[1.03] active:scale-95 transition-all">
            Send Message
            <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </form>
      </Modal>
    </div>
  );
}