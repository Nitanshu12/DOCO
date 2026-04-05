"use client";

import React from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export const LoginForm: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 w-full max-w-[420px]">
      <div>
        <h2 className="text-[44px] md:text-[52px] font-extrabold text-[#292524] mb-4 tracking-[-0.04em] leading-[1.05]">
          Welcome Back
        </h2>
        <p className="text-[17px] leading-[1.6] text-[#292524]/60 font-medium">
          Log in to continue your impact journey with the Transparency Portal.
        </p>
      </div>

      <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
        <Input
          id="email"
          label="EMAIL ADDRESS"
          type="email"
          placeholder="name@example.com"
          required
        />
        <Input
          id="password"
          label="PASSWORD"
          type="password"
          placeholder="••••••••"
          required
          rightElement={
            <Link
              href="/forgot-password"
              className="text-[#BF360C] hover:underline normal-case tracking-normal font-bold"
            >
              Forgot?
            </Link>
          }
        />

        <Button size="full" className="rounded-full shadow-lg shadow-[#BF360C]/20 hover:shadow-xl hover:shadow-[#BF360C]/30 transition-all font-bold text-[18px]">
          Log In
        </Button>

        <div className="relative">
          {/* Or separator if needed, but the design just has the button */}
        </div>

        <Button
          variant="outline"
          size="full"
          className="rounded-full bg-white border-none shadow-sm hover:shadow-md transition-all font-bold text-[16px] text-[#292524] flex items-center justify-center gap-3 py-[18px]"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
          </svg>
          Or sign in with Google
        </Button>
      </form>

      <div className="text-center mt-4">
        <p className="text-[17px] font-medium text-[#292524]/60">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-[#BF360C] font-black hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};
