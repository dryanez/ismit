import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/684fc342951a437d2dccd725_home2.jpg-0cefoIL8tDRF5EsWxwM2ElPLJZ56Gp.jpeg"
          alt="Medical professionals in artistic style"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-slate-900/50" />
      </div>

      {/* Hero Content - Optimized for both mobile and desktop */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
        {/* Mobile-first heading with better scaling */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-wide mb-6 md:mb-8 leading-tight">
          <span className="block md:inline">iSMIT 2026</span>
          <span className="block md:inline md:ml-4">World Congress</span>
        </h1>

        {/* Subtitle with better mobile formatting */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mt-4 md:mt-6 max-w-5xl mx-auto mb-8 md:mb-10 px-2 leading-relaxed">
          <span className="block sm:inline">Disruptive AGE in Surgical Innovation:</span>
          <span className="block sm:inline mt-2 sm:mt-0 sm:ml-2">
            <span className="text-[#F9C600]">Artificial Intelligence</span> ·
            <span className="text-[#F28C28] ml-2">New-Generation Materials</span> ·
            <span className="text-[#F9C600] ml-2">Emerging Robotics</span>
          </span>
        </p>

        {/* Date and location with mobile-optimized layout */}
        <div className="mt-6 md:mt-8 mb-8 md:mb-10">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 md:px-8 md:py-6 border border-[#1DA9C9]/30">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#F9C600] mb-2">19 – 21 November 2026</p>
            <p className="text-base md:text-lg lg:text-xl text-gray-200">Nürnberg, Germany</p>
          </div>
        </div>

        {/* CTA Button with mobile optimization */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/registration">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#E43C7A] to-[#E43C7A]/80 hover:from-[#E43C7A]/90 hover:to-[#E43C7A] text-white font-bold py-4 px-8 md:py-5 md:px-10 text-lg md:text-xl shadow-2xl uppercase w-full sm:w-auto min-w-[200px] transform hover:scale-105 transition-all duration-300"
            >
              Register Now
            </Button>
          </Link>

          {/* Secondary CTA for mobile */}
          <Link href="#about" className="md:hidden">
            <Button
              variant="outline"
              size="lg"
              className="border-[#F9C600]/50 text-[#F9C600] hover:bg-[#F9C600]/10 py-4 px-8 text-lg w-full sm:w-auto min-w-[200px] backdrop-blur-sm bg-transparent"
            >
              Learn More
            </Button>
          </Link>
        </div>

        {/* Mobile scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 md:hidden">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
