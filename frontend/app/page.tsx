import HeroSection from "@/components/features/home/HeroSection"
import StatsBar from "@/components/features/home/StatsBar"
import CauseSection from "@/components/features/home/CauseSection"
import FeaturedGaushalas from "@/components/features/home/FeaturedGaushalas"
import HowItWorks from "@/components/features/home/HowItWorks"
import TransparencyBanner from "@/components/features/home/TransparencyBanner"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <CauseSection />
      <FeaturedGaushalas />
      <HowItWorks />
      <TransparencyBanner />
    </>
  )
}