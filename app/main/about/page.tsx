import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHeader } from "@/components/ui/page-header"

export default function AboutPage() {
  return (
    <>
      <Header />
      <PageHeader title="About iSMIT 2026" subtitle="Advancing Medical Technology Through Innovation" />
      <main className="pt-24">
        <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  The International Society for Medical Innovation and Technology (iSMIT) World Congress 2026 represents
                  the pinnacle of medical technology advancement, bringing together the brightest minds in healthcare
                  innovation.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Our congress serves as the premier platform for showcasing cutting-edge research, fostering
                  international collaboration, and driving the future of medical technology. From artificial
                  intelligence in diagnostics to revolutionary surgical techniques, iSMIT 2026 covers the full spectrum
                  of medical innovation.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Join us in Nuremberg, Germany, for three days of intensive learning, networking, and discovery. Our
                  carefully curated program features world-renowned speakers, hands-on workshops, and exclusive
                  demonstrations of the latest medical technologies.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  Whether you're a researcher, clinician, engineer, or industry professional, iSMIT 2026 offers
                  unparalleled opportunities to advance your knowledge, expand your network, and contribute to the
                  future of healthcare.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Together, we're not just witnessing the future of medicine – we're creating it.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Congress Leadership</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">JD</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Dr. Jane Doe</h3>
                <p className="text-gray-600 mb-2">Congress President</p>
                <p className="text-sm text-gray-500">Harvard Medical School</p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600">MS</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Prof. Michael Smith</h3>
                <p className="text-gray-600 mb-2">Scientific Director</p>
                <p className="text-sm text-gray-500">MIT Technology Institute</p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-600">EJ</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Dr. Emily Johnson</h3>
                <p className="text-gray-600 mb-2">Program Chair</p>
                <p className="text-sm text-gray-500">Stanford University</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
