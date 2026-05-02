export default function Footer() {
  return (
    <footer className="w-full bg-[#2F2F2F] border-t border-white/5 py-5 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div style={{ fontSize: '24px' }} className="font-bold tracking-tighter text-[#F0F8FF]">
          naglind<span className="text-[#10B981]">.</span>
        </div>
        
        <p style={{ fontSize: '16px' }} className="text-slate-500 font-bold tracking-tight">
          © 2026 naglind. All rights reserved.
        </p>
      </div>
    </footer>
  );
}