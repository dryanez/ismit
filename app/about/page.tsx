import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHeader } from "@/components/ui/page-header"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader title="About the Congress" subtitle="Shaping the Future of Healthcare Since 1988" />

        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl space-y-8 text-lg text-slate-600 text-justify">
            <p>
              The International Society for Medical Innovation and Technology (iSMIT) is dedicated to advancing surgical
              innovation, technology integration, and interdisciplinary collaboration in medicine. Established in 1988,
              iSMIT has grown into a globally recognized platform for surgeons, biomedical engineers, researchers, and
              industry leaders to share knowledge, foster collaboration, and shape the future of healthcare. Its annual
              congress represents the culmination of decades of commitment to excellence in surgical innovation.
            </p>
            <p>
              The mission of iSMIT 2026 is to serve as the premier forum for the exchange of cutting-edge scientific
              knowledge and clinical expertise at the intersection of surgery, biomedical engineering, artificial
              intelligence, robotics, and digital health. The congress aims to bridge the gap between emerging
              technologies and their practical application in clinical settings, fostering transformative solutions that
              enhance patient outcomes and advance surgical care worldwide.
            </p>
            <p>
              One of the primary goals of the iSMIT 2026 Congress is to promote interdisciplinary dialogue among experts
              from diverse fields, including surgeons, computer scientists, engineers, and entrepreneurs. By
              facilitating collaboration between academia, industry, and clinical practice, iSMIT seeks to accelerate
              the translation of innovation into tangible benefits for patients and healthcare systems. The congress
              also aims to highlight the latest developments in medical technology, provide training opportunities for
              young professionals, and foster networking among stakeholders from different sectors.
            </p>
            <p>
              The history of iSMIT reflects a legacy of pioneering innovation in minimally invasive and robotic surgery.
              Since its inception, iSMIT has hosted annual conferences that have become the cornerstone of the society's
              activities, attracting renowned speakers and participants from around the world. Each congress builds upon
              the successes of its predecessors, offering a dynamic scientific programme tailored to the evolving needs
              of the medical community. From the first conferences that focused on the early days of endoscopic surgery
              to the present emphasis on artificial intelligence and digital health, iSMIT has remained at the forefront
              of medical technology.
            </p>
            <p>
              The motto of the iSMIT 2026 Congress, "Disruptive AGE in Medical Technology," encapsulates the
              transformative impact of Artificial Intelligence, Generation of new materials, and Emerging robotic
              technologies that are revolutionizing surgical practice and healthcare delivery. The congress will explore
              the integration of artificial intelligence in diagnostics and decision-making, the rise of surgical
              robotics and humanoid robots, and the application of immersive technologies such as augmented and virtual
              reality in medical education and preoperative planning. It will also address the development of new
              materials that enhance surgical performance and patient safety.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-xl font-medium text-blue-600 mb-2">Congress Leadership</h2>
              <h3 className="text-4xl font-black text-slate-800">Guiding the Vision</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
              <div>
                <h4 className="text-xl font-bold text-slate-800">Prof. Dr. Konrad Karcz</h4>
                <p className="text-slate-500">President of iSMIT</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800">Prof. Dr. Denis Ehrl</h4>
                <p className="text-slate-500">Congress President</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800">Prof. Dr. Andrew Gumbs</h4>
                <p className="text-slate-500">Congress Co-President</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800">Prof. Dr. Zbigniew Nawrat</h4>
                <p className="text-slate-500">Congress Co-President</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
