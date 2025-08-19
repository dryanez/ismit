export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-subtitle">Get In Touch</h2>
          <h3 className="section-title">Contact Information</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h4 className="font-bold text-xl text-slate-800 mb-2">General Inquiries</h4>
            <a href="mailto:info@ismit2026.com" className="text-blue-600 hover:text-blue-800 transition">
              info@ismit2026.com
            </a>
          </div>
          <div className="text-center">
            <h4 className="font-bold text-xl text-slate-800 mb-2">Scientific Programme</h4>
            <a href="mailto:presentations@ismit2026.com" className="text-blue-600 hover:text-blue-800 transition">
              presentations@ismit2026.com
            </a>
          </div>
          <div className="text-center">
            <h4 className="font-bold text-xl text-slate-800 mb-2">Sponsorship</h4>
            <a href="mailto:sponsors@ismit2026.com" className="text-blue-600 hover:text-blue-800 transition">
              sponsors@ismit2026.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
