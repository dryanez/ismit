"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, Award, FileText, Video } from "lucide-react"
import { useState } from "react"

export function AbstractsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const submissionTypes = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Oral Spotlights",
      duration: "7 minutes",
      description: "Present your research findings in a focused oral presentation",
      color: "bg-[#1DA9C9]",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Posters",
      duration: "120 seconds",
      description: "Create an engaging video poster to showcase your work",
      color: "bg-[#F28C28]",
    },
  ]

  const keyDates = [
    { date: "30 July 2026", event: "Abstract Submission Deadline", icon: <Calendar className="w-5 h-5" /> },
    { date: "15 August 2026", event: "Notification of Acceptance", icon: <Users className="w-5 h-5" /> },
    { date: "1 September 2026", event: "Final Presentation Due", icon: <Award className="w-5 h-5" /> },
  ]

  return (
    <section id="abstracts" className="py-20 bg-gradient-to-br from-gray-50 to-[#1DA9C9]/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-subtitle text-[#1DA9C9]">Share Your Innovation</h2>
          <h3 className="section-title text-[#333333] bg-[rgba(249,198,0,1)] rounded-2xl">Call for Abstracts</h3>
          <p className="max-w-3xl mx-auto mt-4 text-[#A9A9A9] text-lg">
            Join the global conversation in medical technology. Submit your research for oral spotlights or video
            posters and connect with leading innovators worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {submissionTypes.map((type, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                hoveredCard === index ? "ring-4 ring-[#1DA9C9]/30" : ""
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`absolute top-0 left-0 w-full h-2 ${type.color}`}></div>
              <div className="p-8">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${type.color} text-white mb-6`}
                >
                  {type.icon}
                </div>
                <h4 className="text-2xl font-bold text-[#333333] mb-2">{type.title}</h4>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-[#A9A9A9]" />
                  <span className="text-[#A9A9A9] font-medium">{type.duration}</span>
                </div>
                <p className="text-[#A9A9A9] leading-relaxed">{type.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h4 className="text-2xl font-bold text-[#333333] mb-8 text-center">Important Dates</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyDates.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1DA9C9]/10 text-[#1DA9C9] mb-4 group-hover:bg-[#1DA9C9] group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <div className="font-bold text-lg text-[#333333] mb-2">{item.date}</div>
                <div className="text-[#A9A9A9]">{item.event}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link href="/abstracts">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#E43C7A] to-[#d1356b] hover:from-[#d1356b] hover:to-[#c02e5f] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Submit Your Abstract
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-[#1DA9C9] text-[#1DA9C9] hover:bg-[#1DA9C9]/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent"
            >
              View Guidelines
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
