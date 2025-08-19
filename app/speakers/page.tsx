import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHeader } from "@/components/ui/page-header"
import { SpeakerGrid } from "@/components/speakers/speaker-grid"

export default function SpeakersPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Invited Keynote Speakers"
          subtitle="World-renowned pioneers and thought leaders in medical technology and innovation. (Final confirmations pending)"
        />
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Meet Our Distinguished Faculty</h2>
              <p className="max-w-3xl mx-auto text-slate-600">
                Our speakers represent the forefront of medical innovation, bringing decades of experience and
                groundbreaking research to share with the global medical community at iSMIT 2026.
              </p>
            </div>
            <SpeakerGrid />

            <div className="mt-16 text-center">
              <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Call for Presentations</h3>
                <p className="text-slate-600 mb-4">
                  Join our distinguished speakers by presenting your research! We invite submissions for 7-minute oral
                  spotlights and 120-second video posters.
                </p>
                <p className="text-slate-600 mb-6">
                  <strong>Submission Deadline: July 30, 2026</strong>
                </p>
                <a
                  href="/abstracts"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Submit Your Abstract
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
