"use client";
import React from "react";
import { ArrowRight, Timer, PenTool, ShieldCheck } from "lucide-react";

interface HeroProps {
  onStartProject: () => void;
}

export default function Hero({ onStartProject }: HeroProps) {
    return (
        <section className="relative h-auto lg:h-screen min-h-[650px] bg-[#2F2F2F] pt-28 pb-12 lg:py-0 flex items-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pt-16 lg:pt-24">
                
                <div className="lg:col-span-7 space-y-6 lg:space-y-8 z-10">
                    <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-2 rounded-full">
                        <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                        <p className="text-[12px] font-bold text-white/50 uppercase tracking-[0.2em]">Available for projects</p>
                    </div>
                    <h1 className="text-[44px] sm:text-[60px] xl:text-[84px] font-[900] text-[#F0F8FF] leading-[0.95] uppercase tracking-tighter">
                        Custom <span className="text-[#10B981]">websites</span> <br className="hidden sm:block" />
                        for local <span className="text-white/20 italic font-serif normal-case font-light">businesses.</span>
                    </h1>
                    <p className="text-base md:text-lg text-slate-400 max-w-lg leading-relaxed font-medium">
                        Professional websites built for businesses like yours. We help you stand out online and grow your customer base.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-8 pt-2">
                        <button 
                            onClick={onStartProject}
                            className="bg-[#10B981] text-[#2F2F2F] px-8 py-3 rounded-xl font-[600] uppercase text-sm tracking-tight flex items-center gap-3 hover:brightness-110 transition-all active:scale-95 shadow-xl shadow-[#10B981]/10"
                        >
                            Start a project <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

                <div className="lg:col-span-5 grid grid-cols-2 gap-4 relative w-full">
                    <div className="col-span-2 bg-white/[0.03] border border-white/10 rounded-[32px] p-8 backdrop-blur-md flex flex-col items-center text-center">
                        <Timer className="text-[#10B981] mb-4" size={68} />
                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter">5–21 days</h3>
                        <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Fast turnaround</p>
                    </div>
                    <div className="bg-white/[0.03] border border-white/10 rounded-[32px] p-6 flex flex-col items-center text-center">
                        <PenTool className="text-[#10B981] mb-4" size={34} />
                        <h3 className="text-xl font-black text-white uppercase tracking-tighter leading-tight">Up to 5 <br /> rounds</h3>
                    </div>
                    <div className="bg-[#10B981] rounded-[32px] p-6 flex flex-col items-center text-center">
                        <ShieldCheck className="text-[#2F2F2F] mb-4" size={34} />
                        <h3 className="text-xl font-black text-[#2F2F2F] uppercase tracking-tighter leading-tight">30 days <br /> free</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}   