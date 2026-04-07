"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Bell, Search } from "lucide-react";

export default function DashboardNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNotifDot] = useState(true);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { label: "Home", href: "/dashboard", active: true },
    { label: "Discover", href: "/dashboard/discover" },
    { label: "My Donations", href: "/dashboard/donations" },
    { label: "Birthday Campaign", href: "/dashboard/campaign" },
  ];

  return (
    <nav className="w-full sticky top-0 left-0 z-50 bg-[#292524]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="bg-[#f97316] w-9 h-9 rounded-xl flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-lg leading-none">D</span>
          </div>
          <span className="text-white font-bold text-xl tracking-tight hidden sm:block">
            DOCO
          </span>
        </Link>

        {/* Center: Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-200 ${
                link.active
                  ? "bg-white/10 text-white"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Search, Notifications, Avatar */}
        <div className="flex items-center gap-3">
          {/* Search (Desktop) */}
          <button className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/15 transition-all">
            <Search className="w-[18px] h-[18px]" />
          </button>

          {/* Notification Bell */}
          <button className="relative flex items-center justify-center w-9 h-9 rounded-full bg-[#f97316] text-white hover:bg-[#ea6a0a] transition-all shadow-sm">
            <Bell className="w-[18px] h-[18px]" />
            {showNotifDot && (
              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full border-2 border-[#292524] animate-pulse" />
            )}
          </button>

          {/* User Avatar */}
          <button className="w-9 h-9 rounded-full bg-gradient-to-br from-[#f97316] to-[#ea6a0a] flex items-center justify-center text-white font-bold text-sm ring-2 ring-white/20 hover:ring-white/40 transition-all">
            P
          </button>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden p-2 text-white/70 hover:text-white focus:outline-none"
          >
            <span className="sr-only">Open menu</span>
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 pt-2 flex flex-col gap-1 border-t border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={toggleMenu}
              className={`px-4 py-3 rounded-xl text-[15px] font-medium transition-all ${
                link.active
                  ? "bg-white/10 text-white"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
