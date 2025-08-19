import type { Metadata } from "next"
import PageHeader from "@/components/ui/page-header"
import AbstractForm from "@/components/forms/abstract-form"
import Footer from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Submit Abstract - iSMIT 2026",
  description:
    "Submit your research abstract for the International Society for Minimally Invasive Technology World Congress 2026",
}

export default function AbstractsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Abstract Submission"
        subtitle="Share your research with the global medical technology community"
      />

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Call for Abstracts</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We invite researchers, clinicians, and industry professionals to submit abstracts for oral
                presentations, poster sessions, and workshops at iSMIT 2026. Join us in advancing the field of minimally
                invasive medical technology.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Important Dates</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Abstract Submission Opens: January 15, 2026</li>
                  <li>• Submission Deadline: March 15, 2026</li>
                  <li>• Notification of Acceptance: April 30, 2026</li>
                  <li>• Final Program Published: May 15, 2026</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Presentation Types</h3>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Oral Presentations (15 min + 5 min Q&A)</li>
                  <li>• Poster Sessions (90 min sessions)</li>
                  <li>• Workshop Proposals (60-90 min)</li>
                  <li>• Keynote Proposals (45 min)</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">Review Process</h3>
                <ul className="text-sm text-purple-800 space-y-1">
                  <li>• Peer review by scientific committee</li>
                  <li>• Evaluation based on novelty and impact</li>
                  <li>• Feedback provided for all submissions</li>
                  <li>• Publication in conference proceedings</li>
                </ul>
              </div>
            </div>

            <AbstractForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
