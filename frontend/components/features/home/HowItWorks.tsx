import { Search, HeartHandshake, BarChart3 } from "lucide-react"

const steps = [
  {
    id: "step-choose-cause",
    number: "1",
    icon: Search,
    title: "Choose Cause",
    description:
      "Browse through our verified list and choose a cause or gaushala that resonates with your heart.",
  },
  {
    id: "step-donate",
    number: "2",
    icon: HeartHandshake,
    title: "Donate",
    description:
      "Contribute securely via any payment method for the cause or gaushala you want to support.",
    highlight: true,
  },
  {
    id: "step-track-impact",
    number: "3",
    icon: BarChart3,
    title: "Track Impact",
    description:
      "Receive real-time photos, receipts, and reports of how we use your contributions.",
  },
]

export default function HowItWorks() {
  return (
    <section className="w-full py-20" style={{ backgroundColor: "#FFFBEB" }}>
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "#292524" }}>
            How It Works
          </h2>
          <p className="mt-2 text-sm md:text-base" style={{ color: "#a8a29e" }}>
            Three simple steps to make a real difference
          </p>
        </div>

        {/* Steps */}
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-12 md:gap-6">
          {/* Connector line (desktop only) */}
          <div
            className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px"
            style={{
              borderTop: "2px dashed #fed7aa",
            }}
          />

          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.id}
                id={step.id}
                className="relative flex flex-col items-center text-center flex-1 group"
              >
                {/* Circle icon */}
                <div
                  className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-5 shadow-lg transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: step.highlight ? "#f97316" : "white",
                    border: step.highlight ? "none" : "2px solid #fed7aa",
                  }}
                >
                  <Icon
                    size={32}
                    color={step.highlight ? "white" : "#f97316"}
                    strokeWidth={1.8}
                  />
                  {/* Number badge */}
                  <span
                    className="absolute -top-1 -right-1 w-6 h-6 rounded-full text-xs font-black flex items-center justify-center text-white"
                    style={{ backgroundColor: step.highlight ? "#ea6a0a" : "#f97316" }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  className="text-base font-bold mb-2"
                  style={{ color: "#292524" }}
                >
                  {step.number}. {step.title}
                </h3>
                <p className="text-sm leading-relaxed max-w-[200px]" style={{ color: "#78716c" }}>
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
