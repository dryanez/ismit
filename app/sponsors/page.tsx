import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHeader } from "@/components/ui/page-header"
import { Check } from "lucide-react"

export default function SponsorsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Sponsorship Opportunities"
          subtitle="Join the premier global platform for surgical AI, robotics, and disruptive MedTech."
        />

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-xl font-medium text-blue-600 mb-2">Sponsorship Packages</h2>
              <h3 className="text-4xl font-black text-slate-800">Align Your Brand with Innovation</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Platinum Tier */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-8 border-amber-400 hover:transform hover:-translate-y-1 transition-all duration-300">
                <h4 className="text-2xl font-bold text-slate-800">Platinum</h4>
                <p className="text-4xl font-black text-amber-500 my-4">€20,000</p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Premium booth space</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Exclusive prime-time advertising</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Monthly featured sponsor video</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Full logo & profile exposure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>MedTube post-congress visibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>4 full congress tickets</span>
                  </li>
                </ul>
              </div>

              {/* Gold Tier */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-8 border-slate-400 hover:transform hover:-translate-y-1 transition-all duration-300">
                <h4 className="text-2xl font-bold text-slate-800">Gold</h4>
                <p className="text-4xl font-black text-slate-500 my-4">€12,000</p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Exhibition booth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Advertising inserts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Quarterly sponsor video</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Logo on website & programme</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>2 full congress tickets</span>
                  </li>
                </ul>
              </div>

              {/* Silver Tier */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-8 border-orange-400 hover:transform hover:-translate-y-1 transition-all duration-300">
                <h4 className="text-2xl font-bold text-slate-800">Silver</h4>
                <p className="text-4xl font-black text-orange-500 my-4">€6,000</p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Exhibition booth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>1 advertising video</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Logo on website & programme</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>1 full congress ticket</span>
                  </li>
                </ul>
              </div>

              {/* Bronze Tier */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-8 border-stone-400 hover:transform hover:-translate-y-1 transition-all duration-300">
                <h4 className="text-2xl font-bold text-slate-800">Bronze</h4>
                <p className="text-4xl font-black text-stone-500 my-4">€2,000</p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Logo on website & programme</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Flyer in delegate pack</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>1 full congress ticket</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-xl font-medium text-blue-600 mb-2">Additional Opportunities</h2>
              <h3 className="text-4xl font-black text-slate-800">Customise Your Presence</h3>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-bold text-slate-800 mb-6">À La Carte Add-Ons</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-slate-100 p-4 rounded-lg">
                    <span>Branded lanyards or bags</span>
                    <span className="font-bold text-slate-800">€3,000</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-100 p-4 rounded-lg">
                    <span>Workshop room branding</span>
                    <span className="font-bold text-slate-800">€2,500</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-100 p-4 rounded-lg">
                    <span>Sponsored awards or travel grants</span>
                    <span className="font-bold text-slate-800">€1,500–€5,000</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-100 p-4 rounded-lg">
                    <span>Banner on registration page</span>
                    <span className="font-bold text-slate-800">€2,000</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-100 p-4 rounded-lg">
                    <span>Flyer or insert in congress info</span>
                    <span className="font-bold text-slate-800">€750</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-slate-800 mb-6">Digital & Media Packages</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h5 className="font-bold">Social Media Advertising</h5>
                    <p className="text-slate-600 mt-2">
                      Reach 300,000+ verified professionals across iSMIT and partner channels. Packages start from
                      €2,000.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h5 className="font-bold">MedTube Post-Congress Visibility</h5>
                    <p className="text-slate-600 mt-2">
                      Get a branded pre-roll spot on ALL on-demand congress recordings for 12 months. A unique
                      opportunity for long-lasting exposure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-800 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold">Ready to Partner with Us?</h2>
            <p className="text-xl mt-4 max-w-3xl mx-auto text-blue-200">
              Secure your package early to maximize your brand's exposure to a global audience of medical innovators.
              Tier selection closes 31 January 2026.
            </p>
            <a
              href="mailto:sponsors@ismit2026.com"
              className="mt-8 inline-block bg-white text-blue-800 font-bold py-4 px-10 rounded-lg text-lg transition hover:bg-blue-100 shadow-xl"
            >
              Contact Sponsorship Team
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
