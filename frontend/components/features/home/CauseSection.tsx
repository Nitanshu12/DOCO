import { Wheat, Pill, Home, Flower } from "lucide-react"
import Link from "next/link"

const causes = [
  {
    id: "cause-cow-fodder",
    icon: Wheat,
    iconBg: "#fff7ed",
    iconColor: "#f97316",
    title: "Cow Fodder",
    description:
      "Provide fresh, nutritious dry feed and fodder to abandoned and injured desi cows.",
  },
  {
    id: "cause-medicine",
    icon: Pill,
    iconBg: "#f0fdf4",
    iconColor: "#16a34a",
    title: "Medicine",
    description:
      "Fund medical costs, veterinary attention, and emergency logistics for injured animals.",
  },
  {
    id: "cause-shelter",
    icon: Home,
    iconBg: "#eff6ff",
    iconColor: "#2563eb",
    title: "Shelter",
    description:
      "Support the maintenance of safe, clean living for the elders and wounded animals.",
  },
  {
    id: "cause-temple-care",
    icon: Flower,
    iconBg: "#fdf4ff",
    iconColor: "#a21caf",
    title: "Temple Care",
    description:
      "Preserve our sacred heritage by funding upkeep of local community temples.",
  },
]

export default function CauseSection() {
  return (
    <section className="w-full py-20" style={{ backgroundColor: "#FFFBEB" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "#292524" }}>
            Choose a Cause
          </h2>
          <p className="mt-2 text-sm md:text-base" style={{ color: "#a8a29e" }}>
            Directly fund what matters most to you
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {causes.map((cause) => {
            const Icon = cause.icon
            return (
              <Link
                href={`/donate?cause=${cause.id}`}
                key={cause.id}
                id={cause.id}
                className="group flex flex-col bg-white rounded-2xl border border-stone-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: cause.iconBg }}
                >
                  <Icon size={24} color={cause.iconColor} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3
                  className="text-base font-bold mb-2 group-hover:text-orange-500 transition-colors"
                  style={{ color: "#292524" }}
                >
                  {cause.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed" style={{ color: "#78716c" }}>
                  {cause.description}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
