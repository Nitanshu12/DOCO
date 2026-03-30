import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: "#FFFBEB" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 max-w-xl">
          {/* Badge */}
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
            style={{ backgroundColor: "#fed7aa", color: "#c2560a" }}
          >
            🙏 Radhe Radhe
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5"
            style={{ color: "#292524" }}>
            Every Rupee{" "}
            <span style={{ color: "#f97316" }}>Has a</span>
            <br />
            <span style={{ color: "#f97316" }}>Story</span>
          </h1>

          {/* Subtext */}
          <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: "#78716c" }}>
            Support our Gaushalas and Old Age Homes with radical
            transparency. Your kindness provides dignity to elders and
            sanctuary to the sacred cow.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <Link
              href="/donate"
              id="hero-start-donating"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white text-sm shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: "#f97316" }}
            >
              Start Donating
            </Link>
            <Link
              href="/impact"
              id="hero-view-impact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm border-2 transition-all duration-200 hover:bg-stone-100"
              style={{ borderColor: "#d6d3d1", color: "#292524" }}
            >
              View Impact Reports
            </Link>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="flex-1 relative flex justify-center items-end">
          <div
            className="relative rounded-3xl overflow-hidden shadow-xl"
            style={{ backgroundColor: "#f5f0e8", maxWidth: 440 }}
          >
            <Image
              src="/images/hero_cow_elder.png"
              alt="Sacred cow and elder at gaushala"
              width={440}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
            {/* Bottom highlight overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 flex items-center gap-2 px-4 py-3"
              style={{ backgroundColor: "rgba(255,251,235,0.9)", backdropFilter: "blur(4px)" }}
            >
              <span className="text-lg">🐄</span>
              <span className="text-xs font-semibold" style={{ color: "#292524" }}>
                Today&apos;s Highlight:{" "}
                <span style={{ color: "#f97316" }}>
                  Feeding 200 cows at Vrindavan
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
