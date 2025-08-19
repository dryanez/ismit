import Link from "next/link"
import { Button } from "@/components/ui/button"

export function StartupsSection() {
  return (
    <section id="startups" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-sm md:text-base font-semibold text-[#1DA9C9] mb-2">The Future is Now</h2>
          <h3 className="text-2xl md:text-4xl font-bold text-[#333333] bg-[rgba(249,198,0,1)] border-0 rounded-2xl shadow-xl">iSMIT 2026 Start-up Grand Prize</h3>
        </div>
        <div className="card max-w-4xl mx-auto p-6 md:p-8 lg:p-12 text-center">
          <h4 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4">Pitch · Win · Scale</h4>
          <p className="text-lg md:text-xl text-[#E43C7A] font-semibold mb-4 md:mb-6">
            € Cash Award + 6-month Medical Valley Accelerator Package
          </p>
          <p className="text-base md:text-lg text-[#A9A9A9] mb-6 md:mb-8 leading-relaxed">
            We're hunting for the most disruptive start-ups in AI-powered surgery, XR training, soft robotics, and
            sustainable MedTech solutions. Do you have a breakthrough that improves surgical outcomes?
          </p>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8 text-left">
            <div className="bg-[#1DA9C9]/10 p-4 md:p-6 rounded-lg">
              <h5 className="font-bold text-base md:text-lg text-[#333333] mb-3 md:mb-4">We Are Looking For:</h5>
              <ul className="space-y-2 text-[#A9A9A9] text-sm md:text-base">
                <li>• AI-powered surgery & diagnostics</li>
                <li>• XR training & intra-operative visualization</li>
                <li>• Soft robotics & smart implants</li>
                <li>• Sustainable MedTech solutions</li>
              </ul>
            </div>
            <div className="bg-[#F28C28]/10 p-4 md:p-6 rounded-lg">
              <h5 className="font-bold text-base md:text-lg text-[#333333] mb-3 md:mb-4">How It Works:</h5>
              <ol className="space-y-2 text-[#A9A9A9] text-sm md:text-base">
                <li>1. Submit 2-minute pitch video by 30 July 2026</li>
                <li>2. Top-10 finalists selected by expert jury</li>
                <li>3. Live pitch on Main Stage (20 Nov 2026)</li>
                <li>4. Winner chosen by expert panel + audience</li>
              </ol>
            </div>
          </div>

          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link href="/startups" className="flex-1 sm:flex-none">
              <Button className="bg-[#1DA9C9] hover:bg-[#1899b5] text-white w-full sm:w-auto">
                Learn More & Apply
              </Button>
            </Link>
            <Link href="/pitch" className="flex-1 sm:flex-none">
              <Button className="bg-[#E43C7A] hover:bg-[#d1356b] text-white w-full sm:w-auto">Submit Your Pitch</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
