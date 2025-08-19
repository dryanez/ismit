"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ProgramSection() {
  const [activeTab, setActiveTab] = useState("day1")

  const tabContent = {
    day1: [
      {
        time: "15:00",
        title: "Registration Opens",
        description: "Online registration via digital congress platform. On-site digital help desks available.",
        icon: "🎯",
      },
      {
        time: "16:00",
        title: "Welcome Reception",
        description: "Drinks and light snacks served in the networking lounge.",
        icon: "🥂",
      },
      {
        time: "17:00",
        title: "Opening Ceremony",
        description: "Welcome addresses from congress leadership.",
        icon: "🎪",
      },
      {
        time: "17:30 - 19:30",
        title: "Artistic & Scientific Welcome",
        description: "A unique blend of musical performances and institutional welcomes from our esteemed partners.",
        icon: "🎭",
      },
      {
        time: "20:00",
        title: "Closing Remarks",
        description: "",
        icon: "✨",
      },
    ],
    day2: [
      {
        time: "08:30 – 09:30",
        title: "Official Welcome Ceremony & John Abele Lecture",
        description: "",
        icon: "🎓",
      },
      {
        time: "09:30 – 10:15",
        title: 'Session: "Deep Space of Data"',
        description: "New Dimensions: Added Reality",
        icon: "🚀",
      },
      {
        time: "10:30 – 11:15",
        title: 'Session: "Beyond the Cutting Edge"',
        description: "Monitoring, Planning, Decisions",
        icon: "⚡",
      },
      {
        time: "11:20 – 12:30",
        title: 'Session: "Next-Generation"',
        description: "Sensoring & AI",
        icon: "🤖",
      },
      {
        time: "13:30 – 14:00",
        title: "Keynote: Gerhard Buess Lecture",
        description: "",
        icon: "🎯",
      },
      {
        time: "14:00 – 14:55",
        title: 'Session: "Bold Frontiers"',
        description: "Predictive Analytics",
        icon: "📊",
      },
      {
        time: "19:00",
        title: 'Evening Event: "Feast of the Middle Ages"',
        description: "Ritter Chamber, Imperial Fortress of Nuremberg",
        icon: "🏰",
      },
    ],
    day3: [
      {
        time: "08:30 – 09:00",
        title: "Keynote: Earl Owen Lecture",
        description: "",
        icon: "🎓",
      },
      {
        time: "09:00 – 09:30",
        title: 'Session: "Redefining Care"',
        description: "New Robots",
        icon: "🤖",
      },
      {
        time: "09:30 – 10:15",
        title: 'Session: "Rocket Breakthroughs"',
        description: "Next Level of Computer Vision & 3D Printing",
        icon: "🚀",
      },
      {
        time: "11:20 – 12:30",
        title: 'Session: "Strange New Worlds"',
        description: "Humanoid Robots",
        icon: "👨‍🚀",
      },
      {
        time: "13:30 – 14:00",
        title: "Keynote: John Wickham Lecture",
        description: "",
        icon: "🎯",
      },
      {
        time: "15:50 – 16:30",
        title: "🏆 Award Ceremony & Closing Session",
        description: "",
        icon: "🏆",
      },
      {
        time: "17:30",
        title: "Official Closing of the Conference",
        description: "",
        icon: "✨",
      },
    ],
  }

  return (
    <section id="program" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="absolute top-10 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-subtitle animate-fade-in">Scientific Program</h2>
          <h3 className="section-title animate-fade-in-delay">A Glimpse into the Future</h3>
        </div>

        <div className="flex justify-center mb-6 md:mb-8 flex-wrap gap-2 md:gap-4">
          <button
            className={`px-4 md:px-8 py-2 md:py-4 text-sm md:text-base font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
              activeTab === "day1"
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-blue-200"
                : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 hover:border-blue-200"
            }`}
            onClick={() => setActiveTab("day1")}
          >
            <span className="hidden sm:inline">Day 1: Nov 19</span>
            <span className="sm:hidden">Nov 19</span>
          </button>
          <button
            className={`px-4 md:px-8 py-2 md:py-4 text-sm md:text-base font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
              activeTab === "day2"
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-blue-200"
                : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 hover:border-blue-200"
            }`}
            onClick={() => setActiveTab("day2")}
          >
            <span className="hidden sm:inline">Day 2: Nov 20</span>
            <span className="sm:hidden">Nov 20</span>
          </button>
          <button
            className={`px-4 md:px-8 py-2 md:py-4 text-sm md:text-base font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
              activeTab === "day3"
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-blue-200"
                : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 hover:border-blue-200"
            }`}
            onClick={() => setActiveTab("day3")}
          >
            <span className="hidden sm:inline">Day 3: Nov 21</span>
            <span className="sm:hidden">Nov 21</span>
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 border border-slate-100 hover:shadow-2xl transition-all duration-500">
            <h4 className="text-lg md:text-2xl font-bold mb-4 md:mb-8 text-slate-800 text-center">
              {activeTab === "day1" && (
                <>
                  <span className="hidden sm:inline">Day 1: Thursday, 19th November 2026</span>
                  <span className="sm:hidden">Thursday, Nov 19</span>
                </>
              )}
              {activeTab === "day2" && (
                <>
                  <span className="hidden sm:inline">Day 2: Friday, 20th November 2026</span>
                  <span className="sm:hidden">Friday, Nov 20</span>
                </>
              )}
              {activeTab === "day3" && (
                <>
                  <span className="hidden sm:inline">Day 3: Saturday, 21st November 2026</span>
                  <span className="sm:hidden">Saturday, Nov 21</span>
                </>
              )}
            </h4>
            <div className="space-y-3 md:space-y-6">
              {tabContent[activeTab as keyof typeof tabContent].map((item, index) => (
                <div
                  key={index}
                  className="group p-3 md:p-6 rounded-xl bg-gradient-to-r from-slate-50 to-blue-50 hover:from-blue-50 hover:to-purple-50 transition-all duration-300 border border-slate-100 hover:border-blue-200 hover:shadow-lg transform hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-2 md:gap-4">
                    <div className="text-lg md:text-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                        <span className="px-2 md:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs md:text-sm font-medium">
                          {item.time}
                        </span>
                      </div>
                      <h5 className="text-sm md:text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                        {item.title}
                      </h5>
                      {item.description && (
                        <p className="text-xs md:text-base text-slate-600 mt-1 md:mt-2 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/program">
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full">
              View Full Program
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
