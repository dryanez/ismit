"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface ProgramItem {
  time: string
  title: string
  description: string
}

interface ProgramTabsProps {
  className?: string
}

export function ProgramTabs({ className }: ProgramTabsProps) {
  const [activeTab, setActiveTab] = useState("day1")

  const tabContent: Record<string, ProgramItem[]> = {
    day1: [
      {
        time: "15:00",
        title: "Registration Opens",
        description: "Online registration via digital congress platform. On-site digital help desks available.",
      },
      {
        time: "16:00",
        title: "Welcome Reception",
        description: "Drinks and light snacks served in the networking lounge.",
      },
      { time: "17:00", title: "Opening Ceremony", description: "Welcome addresses from congress leadership." },
      {
        time: "17:30 - 19:30",
        title: "Artistic & Scientific Welcome",
        description: "A unique blend of musical performances and institutional welcomes from our esteemed partners.",
      },
      { time: "20:00", title: "Closing Remarks", description: "" },
    ],
    day2: [
      { time: "08:30 – 09:30", title: "Official Welcome Ceremony & John Abele Lecture", description: "" },
      { time: "09:30 – 10:15", title: 'Session: "Deep Space of Data"', description: "New Dimensions: Added Reality" },
      {
        time: "10:30 – 11:15",
        title: 'Session: "Beyond the Cutting Edge"',
        description: "Monitoring, Planning, Decisions",
      },
      { time: "11:20 – 12:30", title: 'Session: "Next-Generation"', description: "Sensoring & AI" },
      { time: "13:30 – 14:00", title: "Keynote: Gerhard Buess Lecture", description: "" },
      { time: "14:00 – 14:55", title: 'Session: "Bold Frontiers"', description: "Predictive Analytics" },
      {
        time: "19:00",
        title: 'Evening Event: "Feast of the Middle Ages"',
        description: "Ritter Chamber, Imperial Fortress of Nuremberg",
      },
    ],
    day3: [
      { time: "08:30 – 09:00", title: "Keynote: Earl Owen Lecture", description: "" },
      { time: "09:00 – 09:30", title: 'Session: "Redefining Care"', description: "New Robots" },
      {
        time: "09:30 – 10:15",
        title: 'Session: "Rocket Breakthroughs"',
        description: "Next Level of Computer Vision & 3D Printing",
      },
      { time: "11:20 – 12:30", title: 'Session: "Strange New Worlds"', description: "Humanoid Robots" },
      { time: "13:30 – 14:00", title: "Keynote: John Wickham Lecture", description: "" },
      { time: "15:50 – 16:30", title: "🏆 Award Ceremony & Closing Session", description: "" },
      { time: "17:30", title: "Official Closing of the Conference", description: "" },
    ],
  }

  return (
    <div className={className}>
      <div className="flex justify-center mb-8 flex-wrap gap-4">
        <Button
          variant={activeTab === "day1" ? "default" : "outline"}
          onClick={() => setActiveTab("day1")}
          className="px-6 py-3"
        >
          Day 1: Nov 19
        </Button>
        <Button
          variant={activeTab === "day2" ? "default" : "outline"}
          onClick={() => setActiveTab("day2")}
          className="px-6 py-3"
        >
          Day 2: Nov 20
        </Button>
        <Button
          variant={activeTab === "day3" ? "default" : "outline"}
          onClick={() => setActiveTab("day3")}
          className="px-6 py-3"
        >
          Day 3: Nov 21
        </Button>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="card p-8">
          <h4 className="text-2xl font-bold mb-6 text-slate-800">
            {activeTab === "day1" && "Day 1: Thursday, 19th November 2026"}
            {activeTab === "day2" && "Day 2: Friday, 20th November 2026"}
            {activeTab === "day3" && "Day 3: Saturday, 21st November 2026"}
          </h4>
          <div className="space-y-6">
            {tabContent[activeTab].map((item, index) => (
              <div key={index} className="border-l-4 border-slate-200 pl-6">
                <p className="text-lg font-bold text-slate-800">
                  {item.time} | {item.title}
                </p>
                {item.description && <p className="text-slate-600 mt-1">{item.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
