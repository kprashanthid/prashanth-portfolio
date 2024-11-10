"use client"
import { HeroSection } from "@/components/hero-section";
import Navbar from "@/components/nav-bar";

import AboutSection from "@/components/about";
import ProjectsSection from "@/components/project-section";
import EmailSectionUI from "@/components/EmailSection";

export default function Home() {
  return (
<>
<main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection /> 
        <ProjectsSection />
        <EmailSectionUI emailSubmitted={""}/>
      </div>

    </main>
</>
  );
}
