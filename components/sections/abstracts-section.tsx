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
      color: "bg-blue-500",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Posters",
      duration: "120 seconds",
      description: "Create an engaging video poster to showcase your work",
      color: "bg-green-500",
    },
  ]

  const keyDates = [
    { date: "30 July 2026", event: "Abstract Submission Deadline", icon: <Calendar className="w-5 h-5" /> },
    { date: "15 August 2026", event: "Notification of Acceptance", icon: <Users className="w-5 h-5" /> },
    { date: "1 September 2026", event: "Final Presentation Due", icon: <Award className="w-5 h-5" /> },
  ]

  return (
    <section id="abstracts" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-subtitle">Share Your Innovation</h2>
          <h3 className="section-title">Call for Abstracts</h3>
          <p className="max-w-3xl mx-auto mt-4 text-slate-600 text-lg">
            Join the global conversation in medical technology. Submit your research for oral spotlights or video
            posters and connect with leading innovators worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {submissionTypes.map((type, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                hoveredCard === index ? "ring-4 ring-blue-200" : ""
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
                <h4 className="text-2xl font-bold text-slate-800 mb-2">{type.title}</h4>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-slate-500" />
                  <span className="text-slate-600 font-medium">{type.duration}</span>
                </div>
                <p className="text-slate-600 leading-relaxed">{type.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h4 className="text-2xl font-bold text-slate-800 mb-8 text-center">Important Dates</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyDates.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <div className="font-bold text-lg text-slate-800 mb-2">{item.date}</div>
                <div className="text-slate-600">{item.event}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link href="/abstracts">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Submit Your Abstract
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent"
            >
              View Guidelines
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
