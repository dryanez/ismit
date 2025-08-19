"use client"

import { useState, useEffect } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("about")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: "1988", label: "Founded" },
    { number: "35+", label: "Years of Excellence" },
    { number: "50+", label: "Countries" },
    { number: "1000+", label: "Participants Expected" },
  ]

  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2
            className={`text-sm sm:text-base text-blue-600 font-semibold mb-2 sm:mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Welcome to iSMIT 2026
          </h2>
          <h3
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 sm:mb-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            From Human Skill to Autonomous Systems
          </h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-3 sm:p-4 lg:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 hover:border-blue-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">{stat.number}</div>
              <div className="text-xs sm:text-sm lg:text-base text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-sm sm:text-base lg:text-lg text-slate-600 space-y-4 sm:space-y-6">
          <div
            className={`p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-blue-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "700ms" }}
          >
            <p className="leading-relaxed text-justify">
              The International Society for Medical Innovation and Technology (iSMIT) is dedicated to advancing surgical
              innovation, technology integration, and interdisciplinary collaboration in medicine. Established in 1988,
              iSMIT has grown into a globally recognized platform for surgeons, biomedical engineers, researchers, and
              industry leaders to share knowledge, foster collaboration, and shape the future of healthcare.
            </p>
          </div>

          <div
            className={`p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-blue-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "900ms" }}
          >
            <p className="leading-relaxed text-justify">
              The mission of iSMIT 2026 is to serve as the premier forum for the exchange of cutting-edge scientific
              knowledge and clinical expertise at the intersection of surgery, biomedical engineering, artificial
              intelligence, robotics, and digital health. The congress aims to bridge the gap between emerging
              technologies and their practical application in clinical settings, fostering transformative solutions that
              enhance patient outcomes and advance surgical care worldwide.
            </p>
          </div>

          <div
            className={`p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-blue-200 relative overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "1100ms" }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <p className="leading-relaxed text-justify">
              The motto of the iSMIT 2026 Congress,{" "}
              <strong className="text-blue-600">"Disruptive AGE in Medical Technology,"</strong> encapsulates the
              transformative impact of Artificial Intelligence, Generation of new materials, and Emerging robotic
              technologies that are revolutionizing surgical practice and healthcare delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
