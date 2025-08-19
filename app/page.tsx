import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ProgramSection } from "@/components/sections/program-section"
import { SpeakersSection } from "@/components/sections/speakers-section"
import { AbstractsSection } from "@/components/sections/abstracts-section" // Added abstracts section import
import { StartupsSection } from "@/components/sections/startups-section"
import { SponsorsSection } from "@/components/sections/sponsors-section"
import { RegistrationSection } from "@/components/sections/registration-section"
import { VenueSection } from "@/components/sections/venue-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramSection />
        <SpeakersSection />
        <AbstractsSection /> {/* Added abstracts section to homepage */}
        <StartupsSection />
        <SponsorsSection />
        <RegistrationSection />
        <VenueSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
