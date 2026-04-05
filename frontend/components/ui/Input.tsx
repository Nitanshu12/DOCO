"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  rightElement?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  rightElement,
  className = "",
  id,
  type = "text",
  ...props
}) => {
  return (
    <div className={`w-full flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="text-[12px] font-bold uppercase tracking-wider text-[#A6300A]/80 flex justify-between"
        >
          {label}
          {rightElement}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          type={type}
          className={`w-full px-5 py-4 rounded-[20px] bg-[#FFF2EF] border-none text-[#292524] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#BF360C]/30 transition-all duration-200 outline-none text-base placeholder:opacity-50`}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-500 font-medium">{error}</p>
        )}
      </div>
    </div>
  );
};
