// "use client";
// import { X } from 'lucide-react';
// import { useEffect } from 'react';

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   title: string;
//   children: React.ReactNode;
// }

// export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => { document.body.style.overflow = 'unset'; };
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
//       {/* Backdrop */}
//       <div 
//         className="absolute inset-0 bg-[#2F2F2F]/90 backdrop-blur-sm animate-in fade-in duration-300"
//         onClick={onClose}
//       />

//       {/* Modal Container with standard Tailwind pop[cite: 8] */}
//       <div className="relative w-full max-w-5xl bg-[#3A3A3A] border border-white/10 rounded-[32px] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 slide-in-from-bottom-4 duration-300">
//         <div className="flex items-center justify-between p-8 border-b border-white/5">
//           <h3 className="text-2xl font-black uppercase tracking-tighter text-[#F0F8FF]">
//             {title}
//           </h3>
//           <button onClick={onClose} className="text-slate-400 hover:text-[#10B981] p-2 bg-white/5 rounded-full transition-colors">
//             <X size={20} />
//           </button>
//         </div>

//         <div className="p-8 overflow-y-auto custom-scrollbar">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  // FIXED: Tells TypeScript that size is a valid optional property
  size?: "small" | "large"; 
}

export default function Modal({ isOpen, onClose, title, children, size = "large" }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#2F2F2F]/90 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* FIXED: Uses a template literal to switch layout width definitions cleanly.
          If size is "small", it wraps text at max-w-md (~448px).
          If size is "large", it stretches out to your default max-w-5xl (~1024px).
      */}
      <div className={`relative w-full ${size === "small" ? "max-w-md" : "max-w-5xl"} bg-[#3A3A3A] border border-white/10 rounded-[32px] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 slide-in-from-bottom-4 duration-300`}>
        <div className="flex items-center justify-between p-8 border-b border-white/5">
          <h3 className="text-2xl font-black uppercase tracking-tighter text-[#F0F8FF]">
            {title}
          </h3>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors bg-white/5 p-2 rounded-xl"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}