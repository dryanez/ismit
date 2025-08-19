"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function SpeakersSection() {
  const speakers = [
    {
      name: "Prof. Michele Diana",
      country: "(CH)",
      affiliation: "Hôpitaux Universitaires de Genève",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Prof.%20Michele%20Diana%20%28-gADYWn1apEZMG5SChKhUNvZlJcVlHw.png",
    },
    {
      name: "Prof. Dr. Michael Huth",
      country: "(DE)",
      affiliation: "University of Technology Nuremberg",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Prof_Dr_Huth_.jpg-oGjDhaAj1EG5CRsUdBm1IY6sDOuLiz.jpeg",
    },
    {
      name: "Prof. Dr. Jens Jordan",
      country: "(DE)",
      affiliation: "German Aerospace Center (DLR)",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Prof.%20Dr.%20Jens%20Jordan%20-o8lUhoIn7Wk5LmtX0dLviyqreZSIJ6.jpeg",
    },
    {
      name: "Prof. Dr. Joachim Hornegger",
      country: "(DE)",
      affiliation: "FAU Erlangen-Nürnberg",
      image: "/medical-professor.png",
    },
    {
      name: "Prof. Dr. Nassir Navab",
      country: "(DE)",
      affiliation: "Technical University Munich (TUM)",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Prof.%20Dr.%20Nassir%20Navab%20-kR1BYcKdiwGJMZogcP1ETY5jV7gmpt.jpeg",
    },
    {
      name: "Prof. Axel Krieger",
      country: "(US)",
      affiliation: "Johns Hopkins University",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Prof.%20Axel%20Krieger%20%28-KnhGjOD3hjoTuUSeC3rRc2AYHJXofu.jpeg",
    },
    {
      name: "Prof. Andrew A. Gumbs",
      country: "(FR)",
      affiliation: "Hôpital Antoine Béclère",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Prof.%20Andrew%20A.%20Gumbs-EegVpOfe7Lw9HNCgzkuzlmi30zJJ9L.jpeg",
    },
    {
      name: "Prof. Krzysztof Zieniewicz",
      country: "(PL)",
      affiliation: "Medical University of Warsaw",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Prof.%20Krzysztof%20Zieniewicz-ey2XqvYZhwU7L89UPp9vqq3vCedQpB.jpeg",
    },
  ]

  return (
    <section id="speakers" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-subtitle animate-fade-in">Visionary Voices</h2>
          <h3 className="section-title animate-fade-in-delay">Invited Keynote Speakers</h3>
          <p className="max-w-2xl mx-auto mt-4 text-slate-600 animate-fade-in-delay-2">
            We are honored to host a lineup of world-renowned pioneers and thought leaders. (Final confirmations
            pending).
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8 mb-12">
          {speakers.map((speaker, index) => (
            <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-blue-200 transform hover:-translate-y-2">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={speaker.image || "/placeholder.svg"}
                    alt={speaker.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-3 md:p-6 text-center">
                  <h4 className="font-bold text-slate-800 text-xs md:text-lg mb-1 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {speaker.name}
                  </h4>
                  <p className="text-xs md:text-sm text-blue-600 font-medium mb-1 md:mb-2">{speaker.country}</p>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed hidden sm:block">
                    {speaker.affiliation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/speakers">
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full">
              View All Speakers
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
