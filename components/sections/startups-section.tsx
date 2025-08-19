import Link from "next/link"
import { Button } from "@/components/ui/button"

export function StartupsSection() {
  return (
    <section id="startups" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-sm md:text-base font-semibold text-blue-600 mb-2">The Future is Now</h2>
          <h3 className="text-2xl md:text-4xl font-bold text-slate-800">iSMIT 2026 Start-up Grand Prize</h3>
        </div>
        <div className="card max-w-4xl mx-auto p-6 md:p-8 lg:p-12 text-center">
          <h4 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Pitch · Win · Scale</h4>
          <p className="text-lg md:text-xl text-blue-600 font-semibold mb-4 md:mb-6">
            € Cash Award + 6-month Medical Valley Accelerator Package
          </p>
          <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed">
            We're hunting for the most disruptive start-ups in AI-powered surgery, XR training, soft robotics, and
            sustainable MedTech solutions. Do you have a breakthrough that improves surgical outcomes?
          </p>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8 text-left">
            <div className="bg-slate-50 p-4 md:p-6 rounded-lg">
              <h5 className="font-bold text-base md:text-lg text-slate-800 mb-3 md:mb-4">We Are Looking For:</h5>
              <ul className="space-y-2 text-slate-600 text-sm md:text-base">
                <li>• AI-powered surgery & diagnostics</li>
                <li>• XR training & intra-operative visualization</li>
                <li>• Soft robotics & smart implants</li>
                <li>• Sustainable MedTech solutions</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
              <h5 className="font-bold text-base md:text-lg text-slate-800 mb-3 md:mb-4">How It Works:</h5>
              <ol className="space-y-2 text-slate-600 text-sm md:text-base">
                <li>1. Submit 2-minute pitch video by 30 July 2026</li>
                <li>2. Top-10 finalists selected by expert jury</li>
                <li>3. Live pitch on Main Stage (20 Nov 2026)</li>
                <li>4. Winner chosen by expert panel + audience</li>
              </ol>
            </div>
          </div>

          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link href="/startups" className="flex-1 sm:flex-none">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full sm:w-auto">Learn More & Apply</Button>
            </Link>
            <Link href="/pitch" className="flex-1 sm:flex-none">
              <Button className="bg-slate-600 hover:bg-slate-700 text-white w-full sm:w-auto">Submit Your Pitch</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
