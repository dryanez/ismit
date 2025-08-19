"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHeader } from "@/components/ui/page-header"
import { PitchForm } from "@/components/forms/pitch-form"

export default function PitchPage() {
  return (
    <>
      <Header />
      <PageHeader title="Submit Your Startup Pitch" subtitle="Join the iSMIT 2026 Start-up Grand Prize Competition" />
      <main className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Competition Details</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-lg text-slate-800 mb-3">Prize Package</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• € Cash Award</li>
                    <li>• 6-month Medical Valley Accelerator Package</li>
                    <li>• Mentorship from industry experts</li>
                    <li>• Access to investor network</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-800 mb-3">Timeline</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Submission Deadline: July 30, 2026</li>
                    <li>• Top-10 Selection: August 15, 2026</li>
                    <li>• Live Pitch: November 20, 2026</li>
                    <li>• Winner Announcement: November 20, 2026</li>
                  </ul>
                </div>
              </div>
            </div>

            <PitchForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
