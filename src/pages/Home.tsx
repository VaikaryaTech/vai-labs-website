import React, { useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Shield, Server, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import homeHeroBackground from "@/assets/home-hero-background.jpg";
import indiaFlag from "@/assets/india-flag.svg";
import { ParticleNetwork } from "@/components/ParticleNetwork";
import { CyberGrid } from "@/components/CyberGrid";
import { StatsCounter } from "@/components/StatsCounter";
import { HeroOrb } from "@/components/HeroOrb";
import { HeroHUD } from "@/components/HeroHUD";

// Premium Animation Engines
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const coreVisualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Initialize Smooth Scroll Engine
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // 2. Custom Lagging Luxury Cursor
    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // 3. Cinematic Scroll Reveals for Paragraphs & Features
    const elementsToReveal = document.querySelectorAll(".reveal-item");
    elementsToReveal.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 40%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // 4. Center-Stage HeroOrb & Particle Morph Timelines
    // Triggers rotation and scale warp as user leaves the top hero zone
    gsap.timeline({
      scrollTrigger: {
        trigger: "#features-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    }).to(coreVisualRef.current, {
      scale: 1.2,
      rotation: 90,
      opacity: 0.8,
    });

    // Triggers tight scaling and bright glow overlay through the stats counter
    gsap.timeline({
      scrollTrigger: {
        trigger: "#stats-section",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    }).to(coreVisualRef.current, {
      scale: 0.7,
      rotation: 180,
      opacity: 0.3,
    });

    // Clean up animation ticker loops on component change
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden antialiased selection:bg-foreground selection:text-background">
      
      {/* Cinematic Film Grain Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://w3.org id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Smooth Lagging Pointer Cursor */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-50 mix-blend-difference -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />

      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={homeHeroBackground} 
            alt="Enterprise AI Infrastructure" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />
        </div>
        
        {/* Ambient dark-mode mesh glow arrays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(260_60%_25%/0.3),transparent_50%)] animate-pulse [animation-duration:6s] z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(12_100%_50%/0.2),transparent_50%)] animate-pulse [animation-duration:8s] z-0" />
        
        <CyberGrid />
        <ParticleNetwork />
        <HeroHUD />

        {/* Dynamic Center Stage Visualization Asset */}
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-10 mix-blend-screen">
          <div ref={coreVisualRef} className="w-[500px] h-[500px] flex items-center justify-center transition-all duration-300">
            <HeroOrb />
          </div>
        </div>

        <div className="container mx-auto px-6 py-32 relative z-20">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            
            {/* Air-Gapped Status Badge */}
            <div className="flex justify-center">
              <div className="glass inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-400/40 text-sm font-semibold tracking-[0.18em] text-foreground/90 shadow-[0_0_30px_hsl(152_80%_50%/0.25)] animate-float">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_12px_rgba(52,211,153,1)]"></span>
                </span>
                AIR-GAPPED AI ACTIVE
              </div>
            </div>

            <h1 className="text-5xl lg:text-8xl font-bold leading-tight tracking-tight">
              AI Without Compromise
            </h1>
            <p className="text-2xl lg:text-4xl font-bold text-glow-cyan tracking-wide">
              Intelligence. Sovereignty. Control.
            </p>
            
            <p className="reveal-item text-xl lg:text-2xl text-foreground/70 leading-relaxed max-w-4xl mx-auto font-light">
              VAI Labs builds enterprise-grade Generative AI for organizations where data, intellectual property, security, and control are non-negotiable.
            </p>

            <p className="reveal-item text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto font-light">
              Deploy advanced AI entirely within your own infrastructure—without cloud dependency, without internet access, and without exposing your most valuable data to external AI platforms. From intelligent knowledge systems to complex workflow automation and decision intelligence, VAI Labs enables enterprises to operationalize AI at scale while maintaining complete control over their data and environment.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto pt-4 relative z-30">
              <div className="reveal-item glass p-6 rounded-xl text-left border border-white/5 backdrop-blur-md">
                <h3 className="text-lg font-bold text-primary mb-2">100% Data Sovereignty</h3>
                <p className="text-sm text-muted-foreground">Your data stays within your infrastructure. Your intellectual property remains yours.</p>
              </div>
              <div className="reveal-item glass p-6 rounded-xl text-left border border-white/5 backdrop-blur-md">
                <h3 className="text-lg font-bold text-accent mb-2">Air-Gapped by Design</h3>
                <p className="text-sm text-muted-foreground">Run enterprise AI in isolated, high-security environments with zero internet dependency.</p>
              </div>
              <div className="reveal-item glass p-6 rounded-xl text-left border border-white/5 backdrop-blur-md">
                <h3 className="text-lg font-bold text-glow-cyan mb-2">Enterprise-Grade Intelligence</h3>
                <p className="text-sm text-muted-foreground">Transform proprietary data into actionable intelligence, automate complex processes, and accelerate innovation.</p>
              </div>
              <div className="reveal-item glass p-6 rounded-xl text-left border border-white/5 backdrop-blur-md">
                <h3 className="text-lg font-bold text-navy mb-2">Built to Scale</h3>
                <p className="text-sm text-muted-foreground">From focused AI applications to enterprise-wide deployments, scale intelligence across your organization without compromising control.</p>
              </div>
            </div>

            <p className="reveal-item text-xl lg:text-2xl text-foreground/80 leading-relaxed max-w-4xl mx-auto pt-4">
              <span className="font-bold">The Future of Enterprise AI Is Private.</span>
            </p>

            <p className="reveal-item text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto font-light">
              Organizations should not have to choose between AI innovation and data sovereignty. VAI Labs brings the power of Generative AI into the environments where your most critical work happens—securely, privately, and under your complete control. Welcome to AI on your terms.
            </p>

