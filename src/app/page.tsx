"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import ArchiveGallery from "@/components/ArchiveGallery";
import BlogFeed from "@/components/BlogFeed";
import Testimonials from "@/components/Testimonials";
import LocationMap from "@/components/LocationMap";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] selection:bg-orange-500 selection:text-white transition-colors duration-300">
      {/* Top sticky Navigation with Language Switcher and Theme Toggle */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* Animated Hero Section */}
        <Hero />

        {/* Studio Session Packages & Pricing */}
        <Pricing />

        {/* Studio Visual Archive & Transformations */}
        <ArchiveGallery />

        {/* Dynamic Filterable Blog Feed */}
        <BlogFeed />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Studio Location & Interactive Map */}
        <LocationMap />

        {/* Newsletter Call to Action */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
