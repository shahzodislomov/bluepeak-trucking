import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", path: "#about" },
    { name: "Features", path: "#features" },
    { name: "Services", path: "#services" },
  ];

  const scrollToSection = (path: string) => {
    if (!path.startsWith("#")) return;
    const element = document.querySelector(path) as HTMLElement | null;
    if (!element) return;

    // Close the mobile menu first so the layout/overflow changes don't
    // interfere with scrolling. Wait a couple of frames for the DOM to
    // update (and for exit animation to start) before performing the
    // smooth scroll. Also compensate for the fixed navbar height so the
    // section isn't hidden under the header.
    const navEl = document.querySelector("nav") as HTMLElement | null;
    const navHeight = navEl ? navEl.offsetHeight : 0;

    setIsOpen(false);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const top = element.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: "smooth" });
      });
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
            className="flex items-center gap-2 cursor-pointer"
          >
            {/* Mobile Logo */}
            <img 
              src="/bluepeak-logo.png" 
              alt="BluePeak" 
              className="h-10 w-auto md:hidden" 
            />
            {/* Desktop Logo */}
            <img 
              src="/bluepeak-logo.png" 
              alt="BluePeak" 
              className="hidden md:block h-10 w-auto" 
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.path)}
                className="text-sm font-bold text-[#00357a] hover:text-[#ff751f] transition-colors uppercase tracking-wide"
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-[#ff751f] hover:bg-[#e06010] text-white font-bold uppercase tracking-wide"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#00357a] cursor-pointer"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden shadow-lg absolute w-full"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-end max-h-[calc(100vh-5rem)] overflow-y-auto">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.path)}
                  className="w-full text-right text-base font-bold text-[#00357a] hover:text-[#ff751f] transition-colors uppercase tracking-wide py-3 border-b border-gray-50 last:border-none cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 w-full flex justify-end">
                <Button
                  onClick={() => scrollToSection("#contact")}
                  size="lg"
                  className="bg-[#ff751f] hover:bg-[#e06010] text-white font-bold uppercase tracking-wide w-full sm:w-auto"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}