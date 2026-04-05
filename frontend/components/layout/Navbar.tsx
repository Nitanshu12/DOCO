"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="w-full sticky top-0 left-0 z-50 px-4 md:px-8 py-4 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto py-2.5 px-4 md:px-6 bg-white rounded-full flex items-center justify-between border border-gray-100 shadow-sm relative">
        
        {/* Left: Logo & Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-[#f97316] w-10 h-10 rounded-xl flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-xl leading-none">S</span>
          </div>
          <span className="text-[#292524] font-bold text-xl tracking-tight hidden sm:block">
            SevaSetu
          </span>
        </Link>

        {/* Center: Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-[#f97316] font-bold text-[15px]">
            Home
          </Link>
          <Link href="/#causes" className="text-gray-500 hover:text-gray-900 font-medium text-[15px] transition-colors">
            Causes
          </Link>
          <Link href="/#how-it-works" className="text-gray-500 hover:text-gray-900 font-medium text-[15px] transition-colors">
            How it Works
          </Link>
          {/* <Link href="/about" className="text-gray-500 hover:text-gray-900 font-medium text-[15px] transition-colors">
            About
          </Link> */}
        </div>

        {/* Right: Actions & Mobile Menu (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          {/* <Link 
            href="/signup" 
            className="px-6 py-2.5 rounded-full border border-gray-200 text-gray-500 font-medium text-[15px] hover:border-gray-300 hover:text-gray-700 transition-all"
          >
            Sign Up
          </Link> */}
          <Link 
            href="/login" 
            className="px-6 py-2.5 rounded-full bg-[#f97316] text-white font-medium text-[15px] hover:bg-[#ea6a0a] transition-all shadow-sm"
          >
            Login
          </Link>
        </div>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className="md:hidden flex items-center">
          <button 
            type="button" 
            onClick={toggleMenu} 
            className="p-2 text-gray-500 hover:text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#f97316]"
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-[80px] left-4 right-4 z-40 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden md:hidden duration-200 ease-in flex flex-col p-4 gap-4">
          <Link 
            href="/" 
            onClick={toggleMenu}
            className="text-[#f97316] font-bold text-base px-2 py-1"
          >
            Home
          </Link>
          <Link 
            href="/#causes" 
            onClick={toggleMenu}
            className="text-gray-500 hover:text-gray-900 font-medium text-base px-2 py-1"
          >
            Causes
          </Link>
          <Link 
            href="/#how-it-works" 
            onClick={toggleMenu}
            className="text-gray-500 hover:text-gray-900 font-medium text-base px-2 py-1"
          >
            How it Works
          </Link>
          {/* <Link 
            href="/about" 
            onClick={toggleMenu}
            className="text-gray-500 hover:text-gray-900 font-medium text-base px-2 py-1"
          >
            About
          </Link> */}
          <div className="border-t border-gray-100 my-2 pt-4 flex flex-col gap-3">
             <Link 
              href="/signup" 
              onClick={toggleMenu}
              className="text-center px-4 py-2.5 rounded-full border border-gray-200 text-gray-600 font-medium text-base w-full"
            >
              Sign Up
            </Link>
            <Link 
              href="/login"
              onClick={toggleMenu} 
              className="text-center px-4 py-2.5 rounded-full bg-[#f97316] text-white font-medium text-base w-full shadow-sm"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
