import React from "react";
import "./App.css";
import { Toaster } from "@/components/ui/sonner";
import OlyLogo from "./components/OlyLogo";
import Hero from "./components/Hero";
import MediaSection from "./components/MediaSection";
import CTAForm from "./components/CTAForm";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { mediaSections, BG_IMAGE } from "./mock";

function App() {
  return (
    <div className="oly-app">
      {/* Fixed forest / green-energy background */}
      <div
        className="oly-bg"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />
      <div className="oly-bg-overlay" />

      <div className="relative z-10">
        <header className="flex justify-center py-8">
          <OlyLogo size={44} />
        </header>

        <main className="space-y-10 pb-10">
          <Hero />
          <MediaSection section={mediaSections[0]} />
          <MediaSection section={mediaSections[1]} />
          <MediaSection section={mediaSections[2]} />
          <CTAForm />
          <Products />
        </main>

        <Footer />
      </div>

      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
