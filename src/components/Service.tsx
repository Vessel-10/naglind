"use client";
import React from "react";
import { ArrowUpRight, Code2, Layout, Smartphone, Search, Palette, Globe } from "lucide-react";

const services = [
  {
    title: "Web Designing",
    desc: "Crafting visually stunning, editorial-grade designs that capture your brand's essence perfectly.",
    icon: <Palette size={28} />,
  },
  {
    title: "Web Development",
    desc: "Building fast, responsive, and scalable web applications using modern technologies like Next.js.",
    icon: <Code2 size={28} />,
  },
  {
    title: "Web Application",
    desc: "Developing complex, high-performance web systems tailored to your specific business needs.",
    icon: <Layout size={28} />,
  },
  {
    title: "Mobile Solutions",
    desc: "Creating seamless mobile experiences that keep your users engaged on every device.",
    icon: <Smartphone size={28} />,
  },
  {
    title: "SEO Optimization",
    desc: "Boosting your online visibility and ensuring your target audience finds you effortlessly.",
    icon: <Search size={28} />,
  },
  {
    title: "Digital Branding",
    desc: "Defining your digital identity with consistent and professional design languages.",
    icon: <Globe size={28} />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-[#2F2F2F] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* RESTRUCTURED HEADER: SPLIT LEFT & RIGHT */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-14">
          
          {/* LEFT SIDE: BADGE & TITLE */}
          <div className="md:w-1/2">
            <div className="inline-block bg-[#10B981]/10 border border-[#10B981]/20 px-6 py-2 rounded-full mb-6">
              <p style={{ fontSize: '15px' }} className="text-[#10B981] font-bold tracking-wide uppercase">
                What we offer
              </p>
            </div>
            <h2 style={{ fontSize: '52px' }} className="font-black text-[#F0F8FF] tracking-tighter uppercase leading-[1.1]">
              Expert Services<span className="text-[#10B981]">.</span>
            </h2>
          </div>

          {/* RIGHT SIDE: DESCRIPTION PARAGRAPH */}
          <div className="md:w-1/2">
            <p style={{ fontSize: '20px' }} className="text-slate-400 leading-relaxed max-w-xl">
              We combine technical excellence with premium design to help your business stand out in a crowded digital landscape.
            </p>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative p-10 rounded-[40px] bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-[#10B981]/40 transition-all duration-500 shadow-2xl hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-[#10B981] mb-8 group-hover:bg-[#10B981] group-hover:text-[#2F2F2F] transition-all duration-300">
                {service.icon}
              </div>

              <h3 style={{ fontSize: '24px' }} className="font-bold text-[#F0F8FF] mb-4 tracking-tight">
                {service.title}
              </h3>
              <p style={{ fontSize: '17px' }} className="text-slate-400 leading-relaxed mb-10">
                {service.desc}
              </p>

              <div className="flex items-center gap-3 text-[#10B981] font-bold uppercase text-xs tracking-[0.2em] group/link cursor-pointer">
                <span className="group-hover:mr-2 transition-all duration-300">Read More</span>
                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              
              <div className="absolute inset-0 rounded-[40px] bg-[#10B981]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}