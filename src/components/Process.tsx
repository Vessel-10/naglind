"use client";
import { processSteps, inclusions } from "@/data/process";
import { 
  ClipboardList, 
  MessageSquare, 
  PenTool, 
  Code2, 
  CheckCircle2, 
  Rocket, 
  Check 
} from "lucide-react";

const icons = [
  <ClipboardList size={28} />,
  <MessageSquare size={28} />,
  <PenTool size={28} />,
  <Code2 size={28} />,
  <CheckCircle2 size={28} />,
  <Rocket size={28} />
];

export default function Process() {
  return (
    <section className="py-10 bg-[#2F2F2F] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* CENTERED HEADER & INTRO BLOCK */}
        <div className="max-w-4xl mx-auto text-center mb-18">
          <h2 style={{ fontSize: '52px' }} className="font-black text-[#F0F8FF] tracking-tighter uppercase mb-5">
            How it works<span className="text-[#10B981]">.</span>
          </h2>
          <p style={{ fontSize: '20px' }} className="text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Building a website shouldn't be stressful. We've streamlined our process to make it simple and transparent. 
            You'll know exactly what's happening, when it's happening, and what to expect. We collaborate with you 
            throughout your feedback matters at every stage. No surprises, no confusion, just a smooth path from 
            your initial idea to a live, working website.
          </p>
          <div className="inline-block bg-[#10B981]/10 border border-[#10B981]/20 px-6 py-2 rounded-full mt-5">
            <p style={{ fontSize: '15px' }} className="text-[#10B981] font-bold tracking-wide">
                Timeline depends on your service. Website builds typically take 5–21 days depending on size and complexity.
            </p>
          </div>
        </div>

        {/* VERTICAL OVERLAPPING FLOW */}
        <div className="relative">
          {/* Central Connecting Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-[#10B981] via-white/10 to-transparent hidden md:block" />

          <div className="space-y-32 md:space-y-12">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={step.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 items-center relative">
                  
                  {/* CARD CONTAINER */}
                  {/* This logic ensures the card is on the left for even, right for odd, with NO hidden classes */}
                  <div className={`relative group ${isEven ? 'md:col-start-1' : 'md:col-start-2'}`}>
                    
                    {/* THE OVERLAPPING NUMBER */}
                    <div 
                      className={`absolute z-30 -top-8 flex items-center justify-center w-16 h-16 rounded-2xl bg-[#10B981] text-[#2F2F2F] font-black text-2xl shadow-[0_10px_30px_rgba(16,185,129,0.4)] transition-all duration-500 group-hover:-translate-y-2
                      ${isEven ? 'md:-right-8' : 'md:-left-8'}`}
                    >
                      {step.id}
                    </div>

                    {/* GLASSMORPISM CARD */}
                    <div className="relative z-20 p-10 rounded-[32px] bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-[#10B981]/40 transition-all duration-500 shadow-2xl">
                       <div className={`flex items-center gap-5 mb-6 ${isEven ? 'flex-row' : 'md:flex-row-reverse'}`}>
                          <div className="text-[#10B981]">
                            {icons[index]}
                          </div>
                          <h3 style={{ fontSize: '26px' }} className="font-bold text-[#F0F8FF] tracking-tight">
                            {step.title}
                          </h3>
                       </div>
                       <p 
                        style={{ fontSize: '17px' }} 
                        className={`text-slate-400 leading-relaxed ${isEven ? 'text-left' : 'md:text-right'}`}
                       >
                        {step.description}
                       </p>
                    </div>
                  </div>

                  {/* Central Node Indicator (Mobile Hidden, Desktop absolute center) */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#10B981] hidden md:block shadow-[0_0_15px_#10B981] z-10" />
                </div>
              );
            })}
          </div>
        </div>

        {/* INCLUSIONS SECTION */}
        <div className="mt-26 relative">
           <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-full h-96 bg-[#10B981]/5 blur-[140px] rounded-full pointer-events-none" />
           
           <div className="relative z-10 bg-[#3A3A3A]/40 backdrop-blur-lg rounded-[18px] p-12 md:p-24 border border-white/5 shadow-2xl">
            <h3 style={{ fontSize: '38px' }} className="font-black text-[#F0F8FF] mb-6 tracking-tighter uppercase text-center md:text-left">
              What's included<span className="text-[#10B981]">.</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 mb-10">
              {inclusions.map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#10B981]/10 flex items-center justify-center border border-[#10B981]/20 group-hover:bg-[#10B981] transition-all">
                    <Check size={18} className="text-[#10B981] group-hover:text-[#2F2F2F]" />
                  </div>
                  <span style={{ fontSize: '19px' }} className="text-slate-300 font-bold group-hover:text-white transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-center md:justify-start">
              <button 
                style={{ fontSize: '19px' }}
                className="bg-[#10B981] text-[#2F2F2F] px-6 py-3 rounded-2xl font-black uppercase tracking-tight transition-all hover:scale-[1.03] active:scale-95 shadow-2xl shadow-[#10B981]/20"
              >
                Start a Project
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}