"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";

const HIDDEN_NAVBAR_PREFIXES = ["/dashboard", "/login", "/signup"];

export default function ConditionalNavbar() {
  const pathname = usePathname();
  const shouldHide = HIDDEN_NAVBAR_PREFIXES.some((prefix) =>
    pathname.startsWith(prefix)
  );

  if (shouldHide) return null;
  return <Navbar />;
}
