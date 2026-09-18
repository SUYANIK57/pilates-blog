"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BlogFeed from "@/components/BlogFeed";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d0f12] text-neutral-100 selection:bg-orange-500 selection:text-white">
      {/* Top sticky Navigation with Language Switcher */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* Animated Hero Section */}
        <Hero />

        {/* Dynamic Filterable Blog Feed */}
        <BlogFeed />

        {/* Newsletter Call to Action */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
