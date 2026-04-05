"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "full";
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-[#BF360C] text-white hover:bg-[#A6300A] shadow-md hover:shadow-lg focus:ring-[#BF360C]/50",
    secondary: "bg-[#FFF2EF] text-[#BF360C] hover:bg-[#FFE5DF] focus:ring-[#BF360C]/30",
    outline: "bg-transparent border border-gray-200 text-[#292524] hover:bg-gray-50 focus:ring-gray-200",
    ghost: "bg-transparent text-[#292524] hover:bg-gray-100 focus:ring-gray-100",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    full: "w-full py-3.5 text-base",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center space-x-2">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <span>Loading...</span>
        </span>
      ) : (
        children
      )}
    </button>
  );
};
