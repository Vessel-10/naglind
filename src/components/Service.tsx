"use client";
import React, { useState } from "react";
import { ArrowUpRight, Code2, Layout, Smartphone, Search, Palette, Globe, Check } from "lucide-react";
import Modal from "./Modal";
import servicesData from "@/data/services.json"; // Path to your JSON file

export default function Services() {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mapping icons to JSON keys
  const iconMap: { [key: string]: React.ReactNode } = {
    websiteBuild: <Layout size={28} />,
    websiteRedesign: <Palette size={28} />,
    customDashboard: <Code2 size={28} />,
    seoOptimization: <Search size={28} />,
    monthlyMaintenance: <Globe size={28} />,
  };

  const handleOpenModal = (serviceKey: string) => {
    const data = (servicesData.services as any)[serviceKey];
    setSelectedService(data);
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="py-32 bg-[#2F2F2F] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* HEADER SECTION[cite: 9] */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-14">
          <div className="md:w-1/2">
            <div className="inline-block bg-[#10B981]/10 border border-[#10B981]/20 px-6 py-2 rounded-full mb-6">
              <p className="text-[15px] text-[#10B981] font-bold tracking-wide uppercase">What we offer</p>
            </div>
            <h2 className="text-[52px] font-black text-[#F0F8FF] tracking-tighter uppercase leading-[1.1]">
              Expert Services<span className="text-[#10B981]">.</span>
            </h2>
          </div>
          <div className="md:w-1/2">
            <p className="text-[20px] text-slate-400 leading-relaxed max-w-xl">
              {servicesData.services.sectionIntro} {/* */}
            </p>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.keys(servicesData.services).map((key) => {
            if (key === "sectionIntro" || key === "pricingNote") return null;
            const service = (servicesData.services as any)[key];

            return (
              <div 
                key={key}
                onClick={() => handleOpenModal(key)}
                className="group relative p-10 rounded-[40px] bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-[#10B981]/40 transition-all duration-500 shadow-2xl hover:-translate-y-2 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-[#10B981] mb-8 group-hover:bg-[#10B981] group-hover:text-[#2F2F2F] transition-all duration-300">
                  {iconMap[key] || <Smartphone size={28} />}
                </div>

                <h3 className="text-[24px] font-bold text-[#F0F8FF] mb-4 tracking-tight">{service.title}</h3>
                <p className="text-[17px] text-slate-400 leading-relaxed mb-10 line-clamp-3">{service.intro}</p>

                <div className="flex items-center gap-3 text-[#10B981] font-bold uppercase text-xs tracking-[0.2em]">
                  <span>View Tiers</span>
                  <ArrowUpRight size={18} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SERVICE TIERS MODAL[cite: 6, 11] */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={selectedService?.title || "Service Details"}
      >
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <p className="text-slate-300 text-lg leading-relaxed">{selectedService?.intro}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {selectedService?.tiers.map((tier: any, idx: number) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col hover:border-[#10B981]/30 transition-colors">
                <span className="text-[#10B981] text-[12px] font-black uppercase tracking-[0.2em] mb-2">{tier.name}</span>
                <h4 className="text-2xl font-black text-white mb-1">{tier.price}</h4>
                <p className="text-xs text-slate-500 mb-6 uppercase font-bold tracking-tighter">Turnaround: {tier.turnaround}</p>
                
                <div className="space-y-3 mb-8 flex-grow">
                  {tier.whatsIncluded.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check size={14} className="text-[#10B981] mt-1 flex-shrink-0" />
                      <span className="text-sm text-slate-300 leading-tight">{item}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-white/5 hover:bg-[#10B981] text-white hover:text-[#2F2F2F] py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
                  Select Plan
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-500 font-bold italic">
            {selectedService?.pricingNote}
          </p>
        </div>
      </Modal>
    </section>
  );
}