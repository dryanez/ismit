import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHeader } from "@/components/ui/page-header"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function StartupsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader title="iSMIT 2026 Start-up Grand Prize" subtitle="Pitch · Win · Scale" />

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-xl font-medium text-blue-600 text-center mb-4">We Are Hunting for Disruptors</h2>
                <p className="text-center text-lg mt-4 text-slate-600">
                  Do you have a breakthrough that improves surgical outcomes? We're looking for the most promising
                  start-ups in:
                </p>
                <ul className="mt-6 space-y-2 list-disc list-inside text-slate-600 text-lg">
                  <li>AI-powered surgery & diagnostics</li>
                  <li>XR training & intra-operative visualization</li>
                  <li>Soft robotics & smart implants</li>
                  <li>Sustainable MedTech solutions</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-800">The Grand Prize</h3>
                <p className="text-4xl font-black text-blue-600 my-4">€ Cash Award</p>
                <p className="text-2xl font-bold text-slate-800">+</p>
                <p className="text-2xl font-semibold text-slate-700 mt-4">6-month Medical Valley Accelerator Package</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-xl font-medium text-blue-600 mb-2">How It Works</h2>
              <h3 className="text-4xl font-black text-slate-800">Your Path to Victory</h3>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="text-4xl font-black text-blue-200">1</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800">Submit</h4>
                  <p className="text-slate-600 mt-1">
                    Prepare a 2-minute pitch video (MP4, ≤ 100 MB) and submit it by <strong>30 July 2026</strong>.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="text-4xl font-black text-blue-200">2</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800">Select</h4>
                  <p className="text-slate-600 mt-1">
                    Our expert jury reviews all submissions and selects the Top-10 finalists to advance.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="text-4xl font-black text-blue-200">3</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800">Pitch</h4>
                  <p className="text-slate-600 mt-1">
                    Finalists pitch live on the Main Stage during a high-visibility session on{" "}
                    <strong>20 November 2026</strong>.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="text-4xl font-black text-blue-200">4</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800">Decide</h4>
                  <p className="text-slate-600 mt-1">
                    The winner is chosen by a combination of real-time voting from our panel of experts and the live
                    congress audience.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-16 text-center">
              <Link href="/pitch">
                <Button className="bg-blue-500 text-white font-bold py-4 px-10 rounded-lg text-lg transition hover:bg-blue-600 shadow-lg">
                  Apply Now & Submit Your Pitch
                </Button>
              </Link>
              <p className="mt-4 text-slate-500">Hashtag your journey: #iSMITStartupChallenge</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
