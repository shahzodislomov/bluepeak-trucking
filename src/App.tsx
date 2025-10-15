import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Features } from "./components/sections/Features";
import { Services } from "./components/sections/Services";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/Footer";
export function App() {
  useEffect(() => {
    // set document title and description meta without react-helmet
    document.title = "BluePeak Logistics";
    const metaName = "description";
    const content = "Build Strong, Compliant, and Successful Businesses";
    let meta = document.querySelector(`meta[name="${metaName}"]`);
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", metaName);
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", content);
  }, []);

  return (
    <>
      {/* document title and meta are handled in useEffect above to avoid legacy lifecycles */}
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Services />
      <Contact />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
