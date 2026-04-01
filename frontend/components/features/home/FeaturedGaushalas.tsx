import Image from "next/image"
import Link from "next/link"
import { MapPin, Star, ArrowRight } from "lucide-react"

const gaushalas = [
  {
    id: "gaushala-krishna",
    name: "Krishna Gaushala",
    location: "Vrindavan, Uttar Pradesh",
    rating: 4.9,
    transparency: 98,
    image: "/images/krishna_gaushala.png",
    badge: "Verified",
    badgeColor: "#16a34a",
    donors: 128,
  },
  {
    id: "gaushala-ananda",
    name: "Ananda Old Age Home",
    location: "Rishikesh, Uttarakhand",
    rating: 4.9,
    transparency: 96,
    image: "/images/ananda_old_age_home.png",
    badge: "Verified",
    badgeColor: "#16a34a",
    donors: 94,
  },
  {
    id: "gaushala-seva-dham",
    name: "Seva Dham",
    location: "Pune, Maharashtra",
    rating: 4.7,
    transparency: 95,
    image: "/images/seva_dham.png",
    badge: "Verified",
    badgeColor: "#16a34a",
    donors: 76,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      <Star size={13} fill="#f97316" color="#f97316" />
      <span className="text-xs font-semibold" style={{ color: "#292524" }}>
        {rating}
      </span>
    </div>
  )
}

export default function FeaturedGaushalas() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header Row */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "#292524" }}>
              Featured Gaushalas
            </h2>
            <p className="mt-1 text-sm" style={{ color: "#a8a29e" }}>
              Verified centers with high transparency scores
            </p>
          </div>
          <Link
            href="/gaushalas"
            id="view-all-gaushalas"
            className="flex items-center gap-1 text-sm font-semibold hover:underline"
            style={{ color: "#f97316" }}
          >
            View All Centers <ArrowRight size={15} />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gaushalas.map((g) => (
            <div
              key={g.id}
              id={g.id}
              className="group rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 bg-white flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={g.image}
                  alt={g.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badge */}
                <span
                  className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full text-white"
                  style={{ backgroundColor: g.badgeColor }}
                >
                  ✓ {g.badge}
                </span>
                {/* Transparency score */}
                <span
                  className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full text-white"
                  style={{ backgroundColor: "rgba(41,37,36,0.75)" }}
                >
                  {g.transparency}% Transparent
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-base font-bold" style={{ color: "#292524" }}>
                    {g.name}
                  </h3>
                  <StarRating rating={g.rating} />
                </div>

                <div className="flex items-center gap-1 mb-4">
                  <MapPin size={12} color="#a8a29e" />
                  <span className="text-xs" style={{ color: "#a8a29e" }}>
                    {g.location}
                  </span>
                </div>

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between pt-3 border-t border-stone-100">
                  {/* Donor avatars */}
                  <div className="flex items-center">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-7 h-7 rounded-full border-2 border-white -ml-2 first:ml-0 flex items-center justify-center text-xs font-bold text-white"
                        style={{
                          backgroundColor: ["#fb923c", "#34d399", "#60a5fa"][i],
                          zIndex: 3 - i,
                        }}
                      >
                        {["A", "R", "S"][i]}
                      </div>
                    ))}
                    <span className="ml-2 text-xs" style={{ color: "#a8a29e" }}>
                      +{g.donors}
                    </span>
                  </div>

                  <Link
                    href={`/donate?gaushala=${g.id}`}
                    id={`donate-${g.id}`}
                    className="text-xs font-bold px-4 py-2 rounded-full text-white transition-all duration-200 hover:scale-105"
                    style={{ backgroundColor: "#f97316" }}
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
