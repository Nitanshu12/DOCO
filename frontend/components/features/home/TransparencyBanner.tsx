import Link from "next/link"
import { ShieldCheck } from "lucide-react"

export default function TransparencyBanner() {
  return (
    <section
      className="w-full py-24"
      style={{ backgroundColor: "#1c1917" }}
    >
      <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Shield Icon */}
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
          style={{ backgroundColor: "#292524" }}
        >
          <ShieldCheck size={32} color="#f97316" strokeWidth={1.8} />
        </div>

        {/* Heading */}
        <h2
          className="text-3xl md:text-5xl font-extrabold leading-tight mb-5"
          style={{ color: "#fafaf9" }}
        >
          Total Transparency.{" "}
          <span style={{ color: "#fb923c" }}>Always.</span>
        </h2>

        {/* Description */}
        <p
          className="text-sm md:text-base leading-relaxed mb-10 max-w-xl"
          style={{ color: "#a8a29e" }}
        >
          We bridge the gap between donors and beneficiaries. Our platform uses
          blockchain-enabled tracking to ensure that 100% of your targeted donation
          reaches the specified cause.
        </p>

        {/* CTA Button */}
        <Link
          href="/signup"
          id="transparency-start-journey"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105 hover:shadow-xl"
          style={{ backgroundColor: "#fafaf9", color: "#292524" }}
        >
          Start Your Journey
        </Link>
      </div>
    </section>
  )
}
