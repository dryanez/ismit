import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-white text-lg mb-4">iSMIT 2026</h4>
            <p>37th World Congress of the International Society for Medical Innovation and Technology</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="hover:text-white transition">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white transition">
                Instagram
              </a>
              <a href="#" className="hover:text-white transition">
                MEDtube
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About the Congress
                </Link>
              </li>
              <li>
                <Link href="/program" className="hover:text-white transition">
                  Full Program
                </Link>
              </li>
              <li>
                <Link href="/registration" className="hover:text-white transition">
                  Registration
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white text-lg mb-4">Quick Contacts</h4>
            <ul className="space-y-2">
              <li>
                <strong>General Inquiries:</strong>{" "}
                <a href="mailto:info@ismit2026.com" className="hover:text-white transition">
                  info@ismit2026.com
                </a>
              </li>
              <li>
                <strong>Scientific Programme:</strong>{" "}
                <a href="mailto:presentations@ismit2026.com" className="hover:text-white transition">
                  presentations@ismit2026.com
                </a>
              </li>
              <li>
                <strong>Sponsorship:</strong>{" "}
                <a href="mailto:sponsors@ismit2026.com" className="hover:text-white transition">
                  sponsors@ismit2026.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-sm text-slate-400">
          <p>
            &copy; 2024 iSMIT 2026. All rights reserved. Organized by AKD Congress & Events GmbH. Design by Wilson
            Ortiz.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
