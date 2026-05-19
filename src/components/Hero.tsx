// // "use client";
// // import React from "react";
// // import { ArrowRight, Timer, PenTool, ShieldCheck } from "lucide-react";

// // interface HeroProps {
// //   onStartProject: () => void;
// // }

// // export default function Hero({ onStartProject }: HeroProps) {
// //     return (
// //         <section className="relative h-auto lg:h-screen min-h-[650px] bg-[#2F2F2F] pt-28 pb-12 lg:py-0 flex items-center overflow-hidden">
// //             <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pt-16 lg:pt-24">
                
// //                 <div className="lg:col-span-7 space-y-6 lg:space-y-8 z-10">
// //                     <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-2 rounded-full">
// //                         <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
// //                         <p className="text-[12px] font-bold text-white/50 uppercase tracking-[0.2em]">Available for projects</p>
// //                     </div>
// //                     <h1 className="text-[44px] sm:text-[60px] xl:text-[84px] font-[900] text-[#F0F8FF] leading-[0.95] uppercase tracking-tighter">
// //                         Custom <span className="text-[#10B981]">websites</span> <br className="hidden sm:block" />
// //                         for local <span className="text-white/20 italic font-serif normal-case font-light">businesses.</span>
// //                     </h1>
// //                     <p className="text-base md:text-lg text-slate-400 max-w-lg leading-relaxed font-medium">
// //                         Professional websites built for businesses like yours. We help you stand out online and grow your customer base.
// //                     </p>
// //                     <div className="flex flex-wrap items-center gap-4 md:gap-8 pt-2">
// //                         <button 
// //                             onClick={onStartProject}
// //                             className="bg-[#10B981] text-[#2F2F2F] px-8 py-3 rounded-xl font-[600] uppercase text-sm tracking-tight flex items-center gap-3 hover:brightness-110 transition-all active:scale-95 shadow-xl shadow-[#10B981]/10"
// //                         >
// //                             Start a project <ArrowRight size={18} />
// //                         </button>
// //                     </div>
// //                 </div>

// //                 <div className="lg:col-span-5 grid grid-cols-2 gap-4 relative w-full">
// //                     <div className="col-span-2 bg-white/[0.03] border border-white/10 rounded-[32px] p-8 backdrop-blur-md flex flex-col items-center text-center">
// //                         <Timer className="text-[#10B981] mb-4" size={68} />
// //                         <h3 className="text-3xl font-black text-white uppercase tracking-tighter">5–21 days</h3>
// //                         <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Fast turnaround</p>
// //                     </div>
// //                     <div className="bg-white/[0.03] border border-white/10 rounded-[32px] p-6 flex flex-col items-center text-center">
// //                         <PenTool className="text-[#10B981] mb-4" size={34} />
// //                         <h3 className="text-xl font-black text-white uppercase tracking-tighter leading-tight">Up to 5 <br /> rounds</h3>
// //                     </div>
// //                     <div className="bg-[#10B981] rounded-[32px] p-6 flex flex-col items-center text-center">
// //                         <ShieldCheck className="text-[#2F2F2F] mb-4" size={34} />
// //                         <h3 className="text-xl font-black text-[#2F2F2F] uppercase tracking-tighter leading-tight">30 days <br /> free</h3>
// //                     </div>
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // }   


// "use client";
// import React, { useState, useEffect } from "react";
// import { ArrowRight, Timer, PenTool, ShieldCheck, Send, Check, Loader2 } from "lucide-react";
// import Modal from "./Modal"; // Adjust path if needed to find your Modal component

// interface HeroProps {
//   onStartProject?: () => void; // Optional now since we open the modal internally
// }

// export default function Hero({ onStartProject }: HeroProps) {
//   // Modal Workflow Local States
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);

//   // 4-Second Success Auto-Dismiss Timer
//   useEffect(() => {
//     if (showSuccess) {
//       const timer = setTimeout(() => {
//         setShowSuccess(false);
//       }, 4000);
//       return () => clearTimeout(timer);
//     }
//   }, [showSuccess]);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const formData = new FormData(e.currentTarget);
//     formData.append("Form Origin", "Hero Start a Project");

//     try {
//       const response = await fetch("https://formspree.io/f/xpqnqlbd", {
//         method: "POST",
//         body: formData,
//         headers: { 'Accept': 'application/json' }
//       });

//       if (response.ok) {
//         setIsFormOpen(false); // Close entry modal
//         setShowSuccess(true);  // Open success notification
//         (e.target as HTMLFormElement).reset();
//       } else {
//         alert("Something went wrong. Please try sending your details again.");
//       }
//     } catch (error) {
//       alert("Network error. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <section className="relative h-auto lg:h-screen min-h-[650px] bg-[#2F2F2F] pt-28 pb-12 lg:py-0 flex items-center overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pt-16 lg:pt-24">
          
//           <div className="lg:col-span-7 space-y-6 lg:space-y-8 z-10">
//             <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-2 rounded-full">
//               <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
//               <p className="text-[12px] font-bold text-white/50 uppercase tracking-[0.2em]">Available for projects</p>
//             </div>
//             <h1 className="text-[44px] sm:text-[60px] xl:text-[84px] font-[900] text-[#F0F8FF] leading-[0.95] uppercase tracking-tighter">
//               Custom <span className="text-[#10B981]">websites</span> <br className="hidden sm:block" />
//               for local <span className="text-white/20 italic font-serif normal-case font-light">businesses.</span>
//             </h1>
//             <p className="text-base md:text-lg text-slate-400 max-w-lg leading-relaxed font-medium">
//               Professional websites built for businesses like yours. We help you stand out online and grow your customer base.
//             </p>
//             <div className="flex flex-wrap items-center gap-4 md:gap-8 pt-2">
//               <button 
//                 onClick={() => setIsFormOpen(true)}
//                 className="bg-[#10B981] text-[#2F2F2F] px-8 py-3 rounded-xl font-[600] uppercase text-sm tracking-tight flex items-center gap-3 hover:brightness-110 transition-all active:scale-95 shadow-xl shadow-[#10B981]/10"
//               >
//                 Start a project <ArrowRight size={18} />
//               </button>
//             </div>
//           </div>

//           <div className="lg:col-span-5 grid grid-cols-2 gap-4 relative w-full">
//             <div className="col-span-2 bg-white/[0.03] border border-white/10 rounded-[32px] p-8 backdrop-blur-md flex flex-col items-center text-center">
//               <Timer className="text-[#10B981] mb-4" size={68} />
//               <h3 className="text-3xl font-black text-white uppercase tracking-tighter">5–21 days</h3>
//               <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Fast turnaround</p>
//             </div>
//             <div className="bg-white/[0.03] border border-white/10 rounded-[32px] p-6 flex flex-col items-center text-center">
//               <PenTool className="text-[#10B981] mb-4" size={34} />
//               <h3 className="text-xl font-black text-white uppercase tracking-tighter leading-tight">Up to 5 <br /> rounds</h3>
//             </div>
//             <div className="bg-[#10B981] rounded-[32px] p-6 flex flex-col items-center text-center">
//               <ShieldCheck className="text-[#2F2F2F] mb-4" size={34} />
//               <h3 className="text-xl font-black text-[#2F2F2F] uppercase tracking-tighter leading-tight">30 days <br /> free</h3>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* DYNAMIC FORM MODAL: Layout fixed using pb-12 md:pb-16 spacing blocks */}
//       <Modal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} title="Start Your Project" size="small">
//         <form onSubmit={handleSubmit} className="p-8 md:p-12 pb-12 md:pb-16 space-y-6">
//           <div className="space-y-2">
//             <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Full Name</label>
//             <input required name="name" type="text" placeholder="Your name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#10B981]/50 focus:bg-white/[0.08] transition-all" />
//           </div>

//           <div className="space-y-2">
//             <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Email Address</label>
//             <input required name="email" type="email" placeholder="Your email address" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#10B981]/50 focus:bg-white/[0.08] transition-all" />
//           </div>

//           <div className="space-y-2">
//             <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Message</label>
//             <textarea required name="message" rows={4} placeholder="Tell me about your project ideas..." className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#10B981]/50 focus:bg-white/[0.08] transition-all resize-none" />
//           </div>

//           <button 
//             type="submit" 
//             disabled={isSubmitting}
//             className="w-full bg-[#10B981] disabled:opacity-50 text-[#2F2F2F] py-4 rounded-xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-xl"
//           >
//             {isSubmitting ? (
//               <>Sending Request... <Loader2 size={16} className="animate-spin" /></>
//             ) : (
//               <>Send Request <Send size={14} /></>
//             )}
//           </button>
//         </form>
//       </Modal>

//       {/* SUCCESS OVERLAY NOTIFICATION */}
//       <Modal isOpen={showSuccess} onClose={() => setShowSuccess(false)} title="Project Request Sent" size="small">
//         <div className="p-8 pb-12 text-center max-w-md mx-auto">
//           <div className="w-16 h-16 mx-auto bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 rounded-full flex items-center justify-center mb-6">
//             <Check size={32} className="animate-bounce" />
//           </div>
//           <h4 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Project Initiated!</h4>
//           <p className="text-sm text-slate-400 leading-relaxed font-medium mb-6">
//             Thank you! Your project details have been captured successfully. I will get in touch soon to discuss the next steps.
//           </p>
//           <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
//             <div className="h-full bg-[#10B981] rounded-full animate-[progress_4s_linear_forwards]" style={{ width: '100%' }} />
//           </div>
//         </div>
//       </Modal>
//     </>
//   );
// }

"use client";
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Timer, PenTool, ShieldCheck, Send, Check, Loader2, ChevronDown } from "lucide-react";
import Modal from "./Modal";

interface HeroProps {
  onStartProject?: () => void;
}

const servicesList = [
  "Website Build",
  "Website Redesign",
  "Custom Dashboard",
  "SEO Optimization",
  "Monthly Maintenance"
];

export default function Hero({ onStartProject }: HeroProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Custom Dropdown States
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close custom dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 4-Second Success Auto-Dismiss Timer
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
    formData.append("Form Origin", "Hero Start a Project");
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

  return (
    <>
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
                onClick={() => setIsFormOpen(true)}
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

      {/* FORM MODAL LAYOUT */}
      <Modal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} title="Start Your Project" size="small">
        <form onSubmit={handleSubmit} className="p-8 md:p-12 pb-12 md:pb-16 space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Full Name</label>
            <input required name="name" type="text" placeholder="Your name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#10B981]/50 focus:bg-white/[0.08] transition-all" />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Email Address</label>
            <input required name="email" type="email" placeholder="Your email address" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#10B981]/50 focus:bg-white/[0.08] transition-all" />
          </div>

          {/* SERVICE SELECTION DROPDOWN ELEMENT RESTORED */}
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
            <textarea required name="message" rows={4} placeholder="Tell me about your project ideas..." className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#10B981]/50 focus:bg-white/[0.08] transition-all resize-none" />
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-[#10B981] disabled:opacity-50 text-[#2F2F2F] py-4 rounded-xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-xl"
          >
            {isSubmitting ? (
              <>Sending Request... <Loader2 size={16} className="animate-spin" /></>
            ) : (
              <>Send Request <Send size={14} /></>
            )}
          </button>
        </form>
      </Modal>

      {/* SUCCESS OVERLAY NOTIFICATION */}
      <Modal isOpen={showSuccess} onClose={() => setShowSuccess(false)} title="Project Request Sent" size="small">
        <div className="p-8 pb-12 text-center max-w-md mx-auto">
          <div className="w-16 h-16 mx-auto bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 rounded-full flex items-center justify-center mb-6">
            <Check size={32} className="animate-bounce" />
          </div>
          <h4 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Project Initiated!</h4>
          <p className="text-sm text-slate-400 leading-relaxed font-medium mb-6">
            Thank you! Your project details have been captured successfully. I will get in touch soon to discuss the next steps.
          </p>
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-[#10B981] rounded-full animate-[progress_4s_linear_forwards]" style={{ width: '100%' }} />
          </div>
        </div>
      </Modal>
    </>
  );
}