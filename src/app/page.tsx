import Navigation from "@/components/Navigation";
import Process from "@/components/Process";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Services from "@/components/Service";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#2F2F2F]">
        <Navigation />
        <Services />
        <Process />
        <Contact />
        <Footer />
    </div>
  );
}