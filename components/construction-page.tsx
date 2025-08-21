export default function ConstructionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2C5D87] via-[#1DA9C9] to-[#E43C7A] flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center text-white">
        {/* Logo/Title */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">iSMIT 2026</h1>
          <p className="text-xl md:text-2xl opacity-90">
            World Congress on Intelligent Surgery and Medical Innovation Technology
          </p>
        </div>

        <div className="mb-8">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full object-cover border-4 border-[#F9C600]"
          >
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-08-18%20at%2012.34.00_0e25cb41-emFFm8r6FE5M8ZbKkzqo4Jl8UtUsQe.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Construction Message */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="text-6xl mb-4">🚧</div>
          <h2 className="text-3xl font-bold mb-4 text-[#F9C600]">Under Construction</h2>
          <p className="text-lg mb-6 opacity-90">
            We're building something amazing! Our website is currently under development and will be launching soon with
            exciting updates about the congress.
          </p>

          {/* Event Details */}
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="bg-white/5 rounded-lg p-4">
              <h3 className="font-semibold text-[#F9C600] mb-2">📅 Date</h3>
              <p>November 9-11, 2026</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <h3 className="font-semibold text-[#F9C600] mb-2">📍 Location</h3>
              <p>Nuremberg, Germany</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center">
          <p className="mb-4 opacity-90">For inquiries, please contact us:</p>
          <a
            href="mailto:info@ismit2026.com"
            className="inline-flex items-center gap-2 bg-[#E43C7A] hover:bg-[#E43C7A]/80 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            ✉️ info@ismit2026.com
          </a>
        </div>

        {/* Developer Access */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-sm opacity-70 mb-2">Developer Access:</p>
          <a href="?dev=true" className="text-[#F9C600] hover:text-[#F9C600]/80 text-sm underline">
            Continue to development site
          </a>
        </div>
      </div>
    </div>
  )
}
