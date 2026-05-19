// // "use client";
// // import React, { useState } from "react";
// // import { ArrowUpRight, Code2, Layout, Smartphone, Search, Palette, Globe, Check } from "lucide-react";
// // import Modal from "./Modal";
// // import servicesData from "@/data/services.json"; // Path to your JSON file
// // interface Tier {
// //   name: string;
// //   price: string;
// //   turnaround: string;
// //   whatsIncluded: string[];
// // }

// // interface ServiceData {
// //   title: string;
// //   intro: string;
// //   pricingNote: string;
// //   tiers: Tier[];
// // }

// // export default function Services() {
// //   // const [selectedService, setSelectedService] = useState<any>(null);
// //   // const [selectedService, setSelectedService] = useState<ServiceData | null>(null);
// //   const [selectedService, setSelectedService] = useState<ServiceData | null>(null);
// //   const [isModalOpen, setIsModalOpen] = useState(false);

// //   // Mapping icons to JSON keys
// //   const iconMap: { [key: string]: React.ReactNode } = {
// //     websiteBuild: <Layout size={28} />,
// //     websiteRedesign: <Palette size={28} />,
// //     customDashboard: <Code2 size={28} />,
// //     seoOptimization: <Search size={28} />,
// //     monthlyMaintenance: <Globe size={28} />,
// //   };

// //   // const handleOpenModal = (serviceKey: string) => {
// //   //   const data = (servicesData.services as any)[serviceKey];
// //   //   setSelectedService(data);
// //   //   setIsModalOpen(true);
// //   // };
// //   const handleOpenModal = (serviceKey: string) => {
// //     const data = (servicesData.services as Record<string, any>)[serviceKey] as ServiceData;
// //     setSelectedService(data);
// //     setIsModalOpen(true);
// //   };

// //   return (
// //     <section id="services" className="py-32 bg-[#2F2F2F] overflow-hidden">
// //       <div className="max-w-6xl mx-auto px-6">
        
// //         {/* HEADER SECTION[cite: 9] */}
// //         <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-14">
// //           <div className="md:w-1/2">
// //             <div className="inline-block bg-[#10B981]/10 border border-[#10B981]/20 px-6 py-2 rounded-full mb-6">
// //               <p className="text-[15px] text-[#10B981] font-bold tracking-wide uppercase">What we offer</p>
// //             </div>
// //             <h2 className="text-[52px] font-black text-[#F0F8FF] tracking-tighter uppercase leading-[1.1]">
// //               Expert Services<span className="text-[#10B981]">.</span>
// //             </h2>
// //           </div>
// //           <div className="md:w-1/2">
// //             <p className="text-[20px] text-slate-400 leading-relaxed max-w-xl">
// //               {servicesData.services.sectionIntro} {/* */}
// //             </p>
// //           </div>
// //         </div>

// //         {/* SERVICES GRID */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {Object.keys(servicesData.services).map((key) => {
// //             if (key === "sectionIntro" || key === "pricingNote") return null;
// //             // const service = (servicesData.services as any)[key];
// //             // const service = (servicesData.services as Record<string, ServiceData>)[key];
// //             const service = (servicesData.services as Record<string, any>)[key];

// //             return (
// //               <div 
// //                 key={key}
// //                 onClick={() => handleOpenModal(key)}
// //                 className="group relative p-10 rounded-[40px] bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-[#10B981]/40 transition-all duration-500 shadow-2xl hover:-translate-y-2 cursor-pointer"
// //               >
// //                 <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-[#10B981] mb-8 group-hover:bg-[#10B981] group-hover:text-[#2F2F2F] transition-all duration-300">
// //                   {iconMap[key] || <Smartphone size={28} />}
// //                 </div>

// //                 <h3 className="text-[24px] font-bold text-[#F0F8FF] mb-4 tracking-tight">{service.title}</h3>
// //                 <p className="text-[17px] text-slate-400 leading-relaxed mb-10 line-clamp-3">{service.intro}</p>

// //                 <div className="flex items-center gap-3 text-[#10B981] font-bold uppercase text-xs tracking-[0.2em]">
// //                   <span>View Tiers</span>
// //                   <ArrowUpRight size={18} />
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>

// //       {/* SERVICE TIERS MODAL[cite: 6, 11] */}
// //       <Modal 
// //         isOpen={isModalOpen} 
// //         onClose={() => setIsModalOpen(false)} 
// //         title={selectedService?.title || "Service Details"}
// //       >
// //         <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
// //           <p className="text-slate-300 text-lg leading-relaxed">{selectedService?.intro}</p>
          
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //             {selectedService?.tiers.map((tier: any, idx: number) => (
// //               <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col hover:border-[#10B981]/30 transition-colors">
// //                 <span className="text-[#10B981] text-[12px] font-black uppercase tracking-[0.2em] mb-2">{tier.name}</span>
// //                 <h4 className="text-2xl font-black text-white mb-1">{tier.price}</h4>
// //                 <p className="text-xs text-slate-500 mb-6 uppercase font-bold tracking-tighter">Turnaround: {tier.turnaround}</p>
                
// //                 <div className="space-y-3 mb-8 flex-grow">
// //                   {tier.whatsIncluded.map((item: string, i: number) => (
// //                     <div key={i} className="flex items-start gap-3">
// //                       <Check size={14} className="text-[#10B981] mt-1 flex-shrink-0" />
// //                       <span className="text-sm text-slate-300 leading-tight">{item}</span>
// //                     </div>
// //                   ))}
// //                 </div>

// //                 <button className="w-full bg-white/5 hover:bg-[#10B981] text-white hover:text-[#2F2F2F] py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
// //                   Select Plan
// //                 </button>
// //               </div>
// //             ))}
// //           </div>

// //           <p className="text-center text-xs text-slate-500 font-bold italic">
// //             {selectedService?.pricingNote}
// //           </p>
// //         </div>
// //       </Modal>
// //     </section>
// //   );
// // }


// "use client";
// import React, { useState, useEffect } from "react";
// import { ArrowUpRight, Code2, Layout, Search, Palette, Globe, Check, Loader2 } from "lucide-react";
// import Modal from "./Modal";
// import servicesData from "@/data/services.json"; 

// interface Tier {
//   name: string;
//   price: string;
//   turnaround: string;
//   whatsIncluded: string[];
// }

// interface ServiceData {
//   title: string;
//   intro: string;
//   pricingNote: string;
//   tiers: Tier[];
// }

// export default function Services() {
//   const [selectedService, setSelectedService] = useState<ServiceData | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // NEW FLUID WORKFLOW STATES
//   const [selectedTier, setSelectedTier] = useState<Tier | null>(null);
//   const [isConfirmOpen, setIsConfirmOpen] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccessOpen, setIsSuccessOpen] = useState(false);

//   // Auto-dismiss the success card wrapper after 4 seconds
//   useEffect(() => {
//     if (isSuccessOpen) {
//       const timer = setTimeout(() => {
//         setIsSuccessOpen(false);
//       }, 4000);
//       return () => clearTimeout(timer);
//     }
//   }, [isSuccessOpen]);

//   const iconMap: { [key: string]: React.ReactNode } = {
//     websiteBuild: <Layout size={28} />,
//     websiteRedesign: <Palette size={28} />,
//     customDashboard: <Code2 size={28} />,
//     seoOptimization: <Search size={28} />,
//     monthlyMaintenance: <Globe size={28} />,
//   };

//   const handleOpenModal = (serviceKey: string) => {
//     const data = (servicesData.services as any)[serviceKey];
//     if (data) {
//       setSelectedService(data);
//       setIsModalOpen(true);
//     }
//   };

//   // Triggers when a client selects a tier price button
//   const handleSelectTier = (tier: Tier) => {
//     setSelectedTier(tier);
//     setIsModalOpen(false); // Close original wide info modal smoothly
//     setIsConfirmOpen(true); // Pop open email verification overlay layout card
//   };

//   // Handles the specific tier subscription form submit sequence
//   const handleConfirmSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const formData = new FormData(e.currentTarget);
//     // Automatically bundle tracking keys so you know exactly which tier package they bought!
//     formData.append("Selected Service Category", selectedService?.title || "Unknown");
//     formData.append("Chosen Tier Plan", selectedTier?.name || "Unknown");
//     formData.append("Tier Price", selectedTier?.price || "Unknown");

//     try {
//       // NOTE: Replace with your actual unique Formspree form ID token
//       const response = await fetch("https://formspree.io/f/xpqnqlbd", {
//         method: "POST",
//         body: formData,
//         headers: {
//           'Accept': 'application/json'
//         }
//       });

//       if (response.ok) {
//         setIsConfirmOpen(false);
//         setIsSuccessOpen(true); // Open the auto-dismiss success modal layout
//         setSelectedTier(null);
//       } else {
//         alert("Something went wrong. Please try submitting again.");
//       }
//     } catch (error) {
//       alert("Network error. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="services" className="py-20 bg-[#2F2F2F]">
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <span className="text-[#10B981] text-sm font-black uppercase tracking-[0.25em]">What We Offer</span>
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-[900] text-[#F0F8FF] uppercase tracking-tighter mt-3 leading-none">
//             Tailored digital solutions
//           </h2>
//           <p className="text-slate-400 font-medium text-lg mt-4">
//             Pick a core capability or explore customized engagement tiers optimized for high-performing business goals.
//           </p>
//         </div>

//         {/* SERVICES CATEGORIES BENTO GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {Object.keys(servicesData.services).map((key) => {
//             const item = (servicesData.services as any)[key];
//             return (
//               <div 
//                 key={key}
//                 onClick={() => handleOpenModal(key)}
//                 className="group relative bg-[#3A3A3A]/40 backdrop-blur-sm border border-white/5 rounded-[32px] p-8 hover:bg-[#3A3A3A]/60 hover:border-[#10B981]/30 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden shadow-xl"
//               >
//                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#10B981]/5 rounded-full blur-2xl group-hover:bg-[#10B981]/10 transition-all" />
                
//                 <div>
//                   <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#10B981] group-hover:scale-110 transition-transform duration-300">
//                     {iconMap[key] || <Code2 size={28} />}
//                   </div>
//                   <h3 className="text-2xl font-black text-white uppercase tracking-tighter mt-6 mb-3 leading-tight">
//                     {item.title}
//                   </h3>
//                   <p className="text-slate-400 font-medium text-sm leading-relaxed line-clamp-3">
//                     {item.intro}
//                   </p>
//                 </div>

//                 <div className="flex items-center gap-2 mt-8 text-[#10B981] text-xs font-black uppercase tracking-wider">
//                   View Tiers & Pricing 
//                   <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* MODAL 1: SERVICE DETAILS & PRICING TIERS */}
//       <Modal 
//         isOpen={isModalOpen} 
//         onClose={() => setIsModalOpen(false)} 
//         title={selectedService?.title || ""}
//         size="large"
//       >
//         {selectedService && (
//           <div className="p-8 md:p-12 space-y-8">
//             <div className="max-w-2xl">
//               <p className="text-slate-300 font-medium text-base leading-relaxed">
//                 {selectedService.intro}
//               </p>
//               <p className="text-xs text-[#10B981] font-black uppercase tracking-widest mt-3">
//                 {selectedService.pricingNote}
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
//               {selectedService.tiers.map((tier, idx) => (
//                 <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col hover:border-[#10B981]/30 transition-colors">
//                   <span className="text-[#10B981] text-[12px] font-black uppercase tracking-[0.2em] mb-2">{tier.name}</span>
//                   <h4 className="text-2xl font-black text-white mb-1">{tier.price}</h4>
//                   <p className="text-xs text-slate-500 mb-6 uppercase font-bold tracking-tighter">Turnaround: {tier.turnaround}</p>
                  
//                   <div className="space-y-3 mb-8 flex-growcd ">
//                     {tier.whatsIncluded.map((item, i) => (
//                       <div key={i} className="flex items-start gap-3">
//                         <Check size={14} className="text-[#10B981] mt-1 flex-shrink-0" />
//                         <span className="text-sm text-slate-300 leading-tight">{item}</span>
//                       </div>
//                     ))}
//                   </div>

//                   {/* FIXED: Hooked up event handler execution pipeline right here */}
//                   <button 
//                     onClick={() => handleSelectTier(tier)}
//                     className="w-full bg-white/5 hover:bg-[#10B981] text-white hover:text-[#2F2F2F] py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all"
//                   >
//                     Select Plan
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </Modal>

//       {/* MODAL 2: CONFIRMATION EMAIL INPUT FORUM */}
//       <Modal
//         isOpen={isConfirmOpen}
//         onClose={() => setIsConfirmOpen(false)}
//         title="Confirm Plan Choice"
//         size="small"
//       >
//         <form onSubmit={handleConfirmSubmit} className="p-8 space-y-6">
//           <div className="bg-[#2F2F2F] border border-white/5 p-4 rounded-2xl text-center">
//             <span className="text-xs font-black text-slate-500 uppercase tracking-widest block mb-1">Package Choice</span>
//             <p className="text-lg font-black text-[#10B981] uppercase tracking-tighter">
//               {selectedService?.title} — {selectedTier?.name}
//             </p>
//             <p className="text-2xl font-black text-white mt-1">{selectedTier?.price}</p>
//           </div>

//           <div className="space-y-3">
//             <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Your Email Address</label>
//             <input 
//               required 
//               name="client_email" 
//               type="email" 
//               placeholder="Enter email to get started" 
//               className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#10B981]/50 focus:bg-white/[0.08] transition-all" 
//             />
//           </div>

//           <button 
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full bg-[#10B981] disabled:opacity-50 text-[#2F2F2F] py-4 rounded-xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-xl"
//           >
//             {isSubmitting ? (
//               <>Processing... <Loader2 size={16} className="animate-spin" /></>
//             ) : (
//               "Confirm & Lock Order"
//             )}
//           </button>
//         </form>
//       </Modal>

//       {/* MODAL 3: AUTO-DISMISS SUCCESS OVERLAY FLASH */}
//       <Modal
//         isOpen={isSuccessOpen}
//         onClose={() => setIsSuccessOpen(false)}
//         title="Order Request Sent"
//         size="small"
//       >
//         <div className="p-8 text-center max-w-md mx-auto">
//           <div className="w-16 h-16 mx-auto bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 rounded-full flex items-center justify-center mb-6">
//             <Check size={32} className="animate-bounce" />
//           </div>
//           <h4 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">
//             Order Initiated!
//           </h4>
//           <p className="text-sm text-slate-400 leading-relaxed font-medium mb-6">
//             I have captured your selection. Check your inbox shortly—I will reach out to schedule our discovery call!
//           </p>
//           <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
//             <div className="h-full bg-[#10B981] rounded-full animate-[progress_4s_linear_forwards]" style={{ width: '100%' }} />
//           </div>
//         </div>
//       </Modal>
//     </section>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import { ArrowUpRight, Code2, Layout, Search, Palette, Globe, Check, Loader2 } from "lucide-react";
import Modal from "./Modal";
import servicesData from "@/data/services.json"; 

interface Tier {
  name: string;
  price: string;
  turnaround: string;
  whatsIncluded: string[];
}

interface ServiceData {
  title: string;
  intro: string;
  pricingNote: string;
  tiers: Tier[];
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Workflow Modal States
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  // Auto-dismiss the success modal after 4 seconds
  useEffect(() => {
    if (isSuccessOpen) {
      const timer = setTimeout(() => {
        setIsSuccessOpen(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isSuccessOpen]);

  // Clean 5 core items matching your exact layout mapping
  const iconMap: { [key: string]: React.ReactNode } = {
    websiteBuild: <Layout size={28} />,
    websiteRedesign: <Palette size={28} />,
    customDashboard: <Code2 size={28} />,
    seoOptimization: <Search size={28} />,
    monthlyMaintenance: <Globe size={28} />,
  };

  const handleOpenModal = (serviceKey: string) => {
    const data = (servicesData.services as any)[serviceKey];
    if (data) {
      setSelectedService(data);
      setIsModalOpen(true);
    }
  };

  const handleSelectTier = (tier: Tier) => {
    setSelectedTier(tier);
    setIsModalOpen(false); 
    setIsConfirmOpen(true); 
  };

  const handleConfirmSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("Selected Service Category", selectedService?.title || "Unknown");
    formData.append("Chosen Tier Plan", selectedTier?.name || "Unknown");
    formData.append("Tier Price", selectedTier?.price || "Unknown");

    try {
      const response = await fetch("https://formspree.io/f/xpqnqlbd", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsConfirmOpen(false);
        setIsSuccessOpen(true); 
        setSelectedTier(null);
      } else {
        alert("Something went wrong. Please try submitting again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="services" className="py-20 bg-[#2F2F2F]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#10B981] text-sm font-black uppercase tracking-[0.25em]">What We Offer</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[900] text-[#F0F8FF] uppercase tracking-tighter mt-3 leading-none">
            Tailored digital solutions
          </h2>
          <p className="text-slate-400 font-medium text-lg mt-4">
            Pick a core capability or explore customized engagement tiers optimized for high-performing business goals.
          </p>
        </div>

        {/* BENTO GRID: Only rendering the exact keys present inside your iconMap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.keys(iconMap).map((key) => {
            const item = (servicesData.services as any)[key];
            if (!item) return null; // Safe guard step
            
            return (
              <div 
                key={key}
                onClick={() => handleOpenModal(key)}
                className="group relative bg-[#3A3A3A]/40 backdrop-blur-sm border border-white/5 rounded-[32px] p-8 hover:bg-[#3A3A3A]/60 hover:border-[#10B981]/30 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden shadow-xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#10B981]/5 rounded-full blur-2xl group-hover:bg-[#10B981]/10 transition-all" />
                
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#10B981] group-hover:scale-110 transition-transform duration-300">
                    {iconMap[key]}
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter mt-6 mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 font-medium text-sm leading-relaxed line-clamp-3">
                    {item.intro}
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-8 text-[#10B981] text-xs font-black uppercase tracking-wider">
                  View Tiers & Pricing 
                  <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL 1: WIDE SERVICE PRICING TIERS */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={selectedService?.title || ""}
        size="large"
      >
        {selectedService && (
          <div className="p-8 md:p-12 space-y-8">
            <div className="max-w-2xl">
              <p className="text-slate-300 font-medium text-base leading-relaxed">
                {selectedService.intro}
              </p>
              <p className="text-xs text-[#10B981] font-black uppercase tracking-widest mt-3">
                {selectedService.pricingNote}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
              {selectedService.tiers.map((tier, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col hover:border-[#10B981]/30 transition-colors">
                  <span className="text-[#10B981] text-[12px] font-black uppercase tracking-[0.2em] mb-2">{tier.name}</span>
                  <h4 className="text-2xl font-black text-white mb-1">{tier.price}</h4>
                  <p className="text-xs text-slate-500 mb-6 uppercase font-bold tracking-tighter">Turnaround: {tier.turnaround}</p>
                  
                  <div className="space-y-3 mb-8 flex-grow">
                    {tier.whatsIncluded.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check size={14} className="text-[#10B981] mt-1 flex-shrink-0" />
                        <span className="text-sm text-slate-300 leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => handleSelectTier(tier)}
                    className="w-full bg-white/5 hover:bg-[#10B981] text-white hover:text-[#2F2F2F] py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all"
                  >
                    Select Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </Modal>

      {/* MODAL 2: TIGHT CONFIRMATION EMAIL INPUT FORUM (With no trailing commas) */}
      <Modal
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        title="Confirm Plan Choice"
        size="small"
      >
        <form onSubmit={handleConfirmSubmit} className="p-8 space-y-6">
          <div className="bg-[#2F2F2F] border border-white/5 p-4 rounded-2xl text-center">
            <span className="text-xs font-black text-slate-500 uppercase tracking-widest block mb-1">Package Choice</span>
            <p className="text-lg font-black text-[#10B981] uppercase tracking-tighter">
              {selectedService?.title} — {selectedTier?.name}
            </p>
            <p className="text-2xl font-black text-white mt-1">{selectedTier?.price}</p>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Your Email Address</label>
            <input 
              required 
              name="client_email" 
              type="email" 
              placeholder="Enter email to get started" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#10B981]/50 focus:bg-white/[0.08] transition-all" 
            />
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#10B981] disabled:opacity-50 text-[#2F2F2F] py-4 rounded-xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-xl"
          >
            {isSubmitting ? (
              <>Processing... <Loader2 size={16} className="animate-spin" /></>
            ) : (
              "Confirm & Lock Order"
            )}
          </button>
        </form>
      </Modal>

      {/* MODAL 3: TIGHT AUTO-DISMISS SUCCESS OVERLAY FLASH (Clean compilation prop matching code syntax) */}
      <Modal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        title="Order Request Sent"
        size="small"
      >
        <div className="p-8 text-center max-w-md mx-auto">
          <div className="w-16 h-16 mx-auto bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 rounded-full flex items-center justify-center mb-6">
            <Check size={32} className="animate-bounce" />
          </div>
          <h4 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">
            Order Initiated!
          </h4>
          <p className="text-sm text-slate-400 leading-relaxed font-medium mb-6">
            I have captured your selection. Check your inbox shortly—I will reach out to schedule our discovery call!
          </p>
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-[#10B981] rounded-full animate-[progress_4s_linear_forwards]" style={{ width: '100%' }} />
          </div>
        </div>
      </Modal>
    </section>
  );
}