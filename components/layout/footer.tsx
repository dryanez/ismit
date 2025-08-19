import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#2C5D87] text-[#A9A9A9] pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-white text-lg mb-4">iSMIT 2026</h4>
            <p>37th World Congress of the International Society for Medical Innovation and Technology</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="hover:text-[#1DA9C9] transition">
                LinkedIn
              </a>
              <a href="#" className="hover:text-[#1DA9C9] transition">
                Instagram
              </a>
              <a href="#" className="hover:text-[#1DA9C9] transition">
                MEDtube
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-[#1DA9C9] transition">
                  About the Congress
                </Link>
              </li>
              <li>
                <Link href="/program" className="hover:text-[#1DA9C9] transition">
                  Full Program
                </Link>
              </li>
              <li>
                <Link href="/registration" className="hover:text-[#1DA9C9] transition">
                  Registration
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#1DA9C9] transition">
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
                <a href="mailto:info@ismit2026.com" className="hover:text-[#1DA9C9] transition">
                  info@ismit2026.com
                </a>
              </li>
              <li>
                <strong>Scientific Programme:</strong>{" "}
                <a href="mailto:presentations@ismit2026.com" className="hover:text-[#1DA9C9] transition">
                  presentations@ismit2026.com
                </a>
              </li>
              <li>
                <strong>Sponsorship:</strong>{" "}
                <a href="mailto:sponsors@ismit2026.com" className="hover:text-[#1DA9C9] transition">
                  sponsors@ismit2026.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#2C5D87]/50 mt-8 pt-6 text-center text-sm text-[#A9A9A9]">
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
