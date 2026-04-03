const stats = [
  { value: "50+", label: "Gaushalas Listed" },
  { value: "₹12L+", label: "Donations Made" },
  { value: "1,200+", label: "Animals Helped" },
]

export default function StatsBar() {
  return (
    <section className="w-full bg-white border-y border-stone-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-around gap-8">
        {stats.map((stat, i) => (
          <div key={stat.label} className="flex flex-col items-center text-center relative">
            {/* Divider between items */}
            {i > 0 && (
              <span
                className="hidden sm:block absolute -left-0 top-1/2 -translate-y-1/2 h-10 w-px"
                style={{ backgroundColor: "#e7e5e4" }}
              />
            )}
            <span
              className="text-3xl md:text-4xl font-extrabold tracking-tight"
              style={{ color: "#f97316" }}
            >
              {stat.value}
            </span>
            <span
              className="mt-1 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#a8a29e" }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
