"use client";
import React, { useState, useRef, useEffect } from "react";
import { Mail, Phone, MapPin, ChevronDown, Send, Check } from "lucide-react";

const services = [
  "Website Build",
  "Website Redesign",
  "Custom Dashboard",
  "SEO Optimization",
  "Monthly Maintenance"
];

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section id="contact" className="py-20 bg-[#2F2F2F]">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="bg-[#3A3A3A]/40 backdrop-blur-xl border border-white/5 rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* LEFT SIDE: INFO */}
          <div className="w-full md:w-[40%] bg-[#10B981] p-12 md:p-16 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
            
            <div className="relative z-10">
              <h2 style={{ fontSize: '48px' }} className="font-black text-[#2F2F2F] leading-[0.9] uppercase tracking-tighter mb-6">
                Get in touch<span className="text-white">&apos;</span>
              </h2>
              <p style={{ fontSize: '18px' }} className="text-[#2F2F2F]/80 font-medium ">
                We'd love to hear from you! Let's build something great together.
              </p>
            </div>

            <div className="space-y-8 mt-12 relative z-10">
              {[
                { icon: <Mail size={20} />, text: "hello@naglind.com" },
                { icon: <Phone size={20} />, text: "+265 888 000 000" },
                { icon: <MapPin size={20} />, text: "Lilongwe, Malawi" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 text-[#10B981]">
                    {item.icon}
                  </div>
                  <span className="font-bold text-[#2F2F2F] text-lg">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: FORM */}
          <div className="w-full md:w-[60%] p-12 md:p-20 bg-white/[0.02]">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Full Name</label>
                  <input type="text" placeholder="Your full name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#10B981]/50 focus:bg-white/[0.08] transition-all" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Email Address</label>
                  <input type="email" placeholder="Email address" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#10B981]/50 focus:bg-white/[0.08] transition-all" />
                </div>
              </div>

              {/* CUSTOM PREMIUM DROPDOWN */}
              <div className="space-y-3" ref={dropdownRef}>
                <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Service Required</label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className={`flex w-full items-center justify-between bg-white/5 border rounded-2xl px-6 py-4 text-left transition-all duration-300 ${
                      isOpen ? "border-[#10B981]/50 bg-white/[0.08]" : "border-white/10"
                    }`}
                  >
                    <span className={selectedService ? "text-white" : "text-slate-600"}>
                      {selectedService || "Select a service"}
                    </span>
                    {/* Fixed to the right with absolute positioning for a clean look */}
                    <div className="flex items-center pr-1">
                      <ChevronDown className={`text-slate-400 transition-transform duration-500 ${isOpen ? "rotate-180 text-[#10B981]" : ""}`} size={20} />
                    </div>
                  </button>

                  {/* Dropdown Menu */}
                  {isOpen && (
                    <div className="absolute z-50 w-full mt-3 bg-[#2F2F2F] border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="p-2">
                        {services.map((service) => (
                          <div
                            key={service}
                            onClick={() => {
                              setSelectedService(service);
                              setIsOpen(false);
                            }}
                            className="flex items-center justify-between px-5 py-4 rounded-xl cursor-pointer hover:bg-[#10B981] hover:text-[#2F2F2F] text-slate-300 transition-all duration-200 group"
                          >
                            <span className="font-bold text-sm uppercase tracking-wider">{service}</span>
                            {selectedService === service && <Check size={16} className="text-[#2F2F2F]" />}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Message</label>
                <textarea rows={4} placeholder="Your messages here..." className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#10B981]/50 focus:bg-white/[0.08] transition-all resize-none" />
              </div>

              <button type="submit" className="group bg-[#10B981] text-[#2F2F2F] px-12 py-5 rounded-2xl font-black uppercase tracking-tight flex items-center gap-3 hover:scale-[1.03] active:scale-95 transition-all shadow-xl shadow-[#10B981]/20">
                Send messages
                <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}