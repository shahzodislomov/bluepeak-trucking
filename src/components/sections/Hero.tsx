import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
// import React from "../../../public/second-logo.png";
export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex w-full items-center justify-start md:justify-center mb-8 lg:mb-0"
          >
            {/* Mobile Hero Image - Optimized */}
            <picture>
              <source srcSet="/second-logo.webp" type="image/webp" />
              <img 
                src="/second-logo.jpg" 
                alt="BluePeak Logistics" 
                width={250}
                height={250}
                loading="lazy"
                decoding="async"
                className="w-[250px] h-[250px] object-contain rounded-2xl md:hidden" 
              />
            </picture>

            {/* Desktop Hero Image - Priority for LCP */}
            <picture>
              <source srcSet="/hero-image.webp" type="image/webp" />
              <img 
                src="/hero-image.png" 
                alt="BluePeak Logistics" 
                width={400}
                height={400}
                loading="eager"
                decoding="sync"
                className="hidden md:block w-full max-w-[400px] h-[400px] object-contain rounded-2xl" 
              />
            </picture>
          </motion.div>

          {/* Right Column: Text */}
          <div className="text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-[1.1]"
            >
              <span className="text-[#00357a]">Empowering Trucking Companies to Build </span>
              <span className="text-[#ff751f]">Strong, Compliant, </span>
              <span className="text-[#00357a]">and </span>
              <span className="text-[#ff751f]">Growth-Ready </span>
              <span className="text-[#00357a]">Businesses From Day One</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[#aaaaaa] mb-8 max-w-xl leading-tight"
            >
              We guide you through every step — forming your company, securing your authority, and ensuring long-term safety and compliance across your operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("#services")}
                className="gap-2 cursor-pointer font-bold bg-[#ff751f] hover:bg-[#e06010] text-white border-none"
              >
                Start Your Company
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}