"use client";

import React from "react";
import Image from "next/image";
// import { Link } from "lucide-react";

interface AuthLayoutProps {
  children: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  subtitle?: string;
  quote?: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  imageSrc = "/images/auth-bg.png", // Using the generated premium image
  imageAlt = "Kindred Earth",
  title = "Nurturing the Soul of the Planet.",
  subtitle = "KINDRED EARTH",
  quote = "“The Transparency Portal ensures every contribution fuels the regeneration of our shared home.”",
}) => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden bg-white selection:bg-[#BF360C]/20">
      {/* Left Column: Image and Branding */}
      <div className="relative h-screen hidden md:flex flex-col justify-between p-16 lg:p-24 overflow-hidden group">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover scale-105 group-hover:scale-100 transition-transform duration-[20s] ease-linear"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/20" />
        
        {/* Top Text */}
        <div className="relative z-10 text-white animate-fade-in-slow">
          <p className="text-[12px] font-black uppercase tracking-[0.3em] mb-6 text-white/90 drop-shadow-sm flex items-center gap-4">
            <span className="w-12 h-[2px] bg-white/40"></span>
            {subtitle}
          </p>
          <h1 className="text-[56px] lg:text-[72px] leading-[1] font-bold max-w-[500px] drop-shadow-2xl">
            Nurturing the <span className="opacity-90">Soul</span><br />
            of the Planet.
          </h1>
        </div>

        {/* Bottom Floating Card */}
        <div className="relative z-10 w-full max-w-[380px] animate-slide-up-slow">
          <div className="bg-[#E6DEC9]/95 backdrop-blur-xl px-12 py-12 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative overflow-hidden group/card border border-white/20">
            <p className="text-[#2D2D2D] text-[18px] leading-[1.6] font-semibold mb-10 italic opacity-90">
              {quote}
            </p>
            <p className="text-[#BF360C] text-[13px] font-black uppercase tracking-[0.2em] relative z-10">
              SUSTAINABILITY REPORT 2024
            </p>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#BF360C]/5 rounded-full blur-2xl group-hover/card:scale-150 transition-transform duration-700" />
          </div>
        </div>
      </div>

      {/* Right Column: Auth Form */}
      <div className="relative flex flex-col h-full bg-white animate-fade-in">
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24">
          <div className="max-w-[440px] w-full mx-auto">
            {children}
          </div>
        </div>

        {/* Auth Footer */}
        <div className="px-8 py-10 md:px-12 bg-[#FFF2EF] w-full mt-auto rounded-t-[40px]">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-1 items-start">
              <span className="text-[18px] font-black text-[#292524] tracking-tight">Transparency Portal</span>
              <span className="text-[10px] font-bold text-[#292524]/60 uppercase tracking-widest leading-none">
                © 2024 TRANSPARENCY PORTAL. KINDRED EARTH INITIATIVE.
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {["PRIVACY POLICY", "TERMS OF SERVICE", "IMPACT REPORT", "CONTACT"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[11px] font-black text-[#292524]/60 hover:text-[#BF360C] transition-all tracking-[0.1em]"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-slow {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up-slow {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-slow {
          animation: fade-in-slow 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .animate-slide-up-slow {
          animation: slide-up-slow 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
};
