import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Desktop Video Background - Hidden on mobile */}
      <div className="absolute inset-0 w-full h-full hidden md:block">
        <iframe
          src="https://player.vimeo.com/video/1109133756?background=1&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0"
          className="absolute top-1/2 left-1/2 w-screen h-screen min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>

      {/* Mobile Background - Gradient with medical pattern */}
      <div className="absolute inset-0 w-full h-full md:hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute top-32 right-16 w-24 h-24 border border-blue-300/20 rounded-full"></div>
          <div className="absolute bottom-32 left-16 w-40 h-40 border border-white/10 rounded-full"></div>
          <div className="absolute bottom-16 right-12 w-28 h-28 border border-blue-200/15 rounded-full"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
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
            <span className="text-blue-300">Artificial Intelligence</span> ·
            <span className="text-green-300 ml-2">New-Generation Materials</span> ·
            <span className="text-purple-300 ml-2">Emerging Robotics</span>
          </span>
        </p>

        {/* Date and location with mobile-optimized layout */}
        <div className="mt-6 md:mt-8 mb-8 md:mb-10">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 md:px-8 md:py-6 border border-white/20">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-300 mb-2">19 – 21 November 2026</p>
            <p className="text-base md:text-lg lg:text-xl text-gray-300">Nürnberg, Germany</p>
          </div>
        </div>

        {/* CTA Button with mobile optimization */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/registration">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-8 md:py-5 md:px-10 text-lg md:text-xl shadow-2xl uppercase w-full sm:w-auto min-w-[200px] transform hover:scale-105 transition-all duration-300"
            >
              Register Now
            </Button>
          </Link>

          {/* Secondary CTA for mobile */}
          <Link href="#about" className="md:hidden">
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 py-4 px-8 text-lg w-full sm:w-auto min-w-[200px] backdrop-blur-sm bg-transparent"
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
