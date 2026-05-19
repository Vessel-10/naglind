"use client";
import React, { useState, useRef, useEffect } from "react";
import { Mail, Phone, MapPin, ChevronDown, Send, Check, Loader2 } from "lucide-react";
import Modal from "./Modal"; 

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (showSuccessModal) {
      const timer = setTimeout(() => {
        setShowSuccessModal(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessModal]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    formData.append("Service Required", selectedService || "Not Specified");

    try {
      const response = await fetch("https://formspree.io/f/xpqnqlbd", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus("success");
        setShowSuccessModal(true); 
        setSelectedService("");
        (e.target as HTMLFormElement).reset(); 
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#2F2F2F]">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="bg-[#3A3A3A]/40 backdrop-blur-xl border border-white/5 rounded-[32px] shadow-2xl flex flex-col md:flex-row md:gap-12 p-4 md:p-6">
          
          <div className="w-full md:w-[40%] bg-[#10B981] p-12 md:p-16 flex flex-col justify-between relative overflow-hidden rounded-[24px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
            
            <div className="relative z-10">
              <h2 style={{ fontSize: '48px' }} className="font-black text-[#2F2F2F] leading-[0.9] uppercase tracking-tighter mb-6">
                Get in touch<span className="text-white">&apos;</span>
              </h2>
              <p style={{ fontSize: '18px' }} className="text-[#2F2F2F]/80 font-medium ">
                We&apos;d love to hear from you! Let&apos;s build something great together.
              </p>
            </div>

            <div className="space-y-12 mt-12 relative z-10">
              {[
                { 
                  icon: <Mail size={20} />, 
                  text: "magomboanaclet@gmail.com",
                  href: "mailto:magomboanaclet@gmail.com"
                },
                { 
                  icon: <Phone size={20} />, 
                  text: "+265 899 567 169",
                  href: "https://wa.me/265899567169?text=Hello%20Naglind%2C%20I%27m%20interested%20in%20starting%20a%20project%21"
                },
                { 
                  icon: <MapPin size={20} />, 
                  text: "Lilongwe, Malawi",
                  href: null
                }
              ].map((item, i) => {
                const isLink = !!item.href;
                const Container = isLink ? "a" : "div";

                return (
                  <Container 
                    key={i}
                    href={item.href || undefined}
                    target={isLink && item.href.startsWith("http") ? "_blank" : undefined}
                    rel={isLink && item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`flex items-center gap-4 group ${isLink ? "cursor-pointer" : ""}`}
                  >
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 text-[#10B981]">
                      {item.icon}
                    </div>
                    <span className={`font-bold text-[#2F2F2F] text-lg ${isLink ? "group-hover:underline decoration-[#2F2F2F]/40" : ""}`}>
                      {item.text}
                    </span>
                  </Container>
                );
              })}
            </div>
          </div>

          <div className="w-full md:w-[60%] p-4 md:p-12">
            <form className="space-y-8" onSubmit={handleSubmit}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Full Name</label>
                  <input required name="name" type="text" placeholder="Your full name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#10B981]/50 focus:bg-white/[0.08] transition-all" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Email Address</label>
                  <input required name="email" type="email" placeholder="Email address" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#10B981]/50 focus:bg-white/[0.08] transition-all" />
                </div>
              </div>

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
                    <div className="flex items-center pr-1">
                      <ChevronDown className={`text-slate-400 transition-transform duration-500 ${isOpen ? "rotate-180 text-[#10B981]" : ""}`} size={20} />
                    </div>
                  </button>

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
                <textarea required name="message" rows={4} placeholder="Your messages here..." className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#10B981]/50 focus:bg-white/[0.08] transition-all resize-none" />
              </div>

              {submitStatus === "error" && (
                <p className="text-sm font-bold text-red-400 bg-red-400/10 px-4 py-2 rounded-xl">
                  ✕ Something went wrong. Please try sending your details again.
                </p>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="group bg-[#10B981] disabled:opacity-50 text-[#2F2F2F] px-12 py-5 rounded-2xl font-black uppercase tracking-tight flex items-center gap-3 hover:scale-[1.03] active:scale-95 transition-all shadow-xl shadow-[#10B981]/20"
              >
                {isSubmitting ? (
                  <>Sending... <Loader2 size={18} className="animate-spin" /></>
                ) : (
                  <>
                    Send messages
                    <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
        title="Message Sent Successfully"
      >
        <div className="p-8 text-center max-w-md mx-auto">
          <div className="w-16 h-16 mx-auto bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 rounded-full flex items-center justify-center mb-6">
            <Check size={32} className="animate-bounce" />
          </div>
          <h4 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">
            Thank You!
          </h4>
          <p className="text-sm text-slate-400 leading-relaxed font-medium mb-6">
            Your inquiry has landed perfectly in my inbox. I will review your project needs and get back to you shortly.
          </p>
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-[#10B981] rounded-full animate-[progress_4s_linear_forwards]" style={{ width: '100%' }} />
          </div>
        </div>
      </Modal>
    </section>
  );
}