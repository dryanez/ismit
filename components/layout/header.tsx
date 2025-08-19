"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navigationItems = [
  { name: "About", href: "/about", anchor: "#about" },
  { name: "Program", href: "/program", anchor: "#program" },
  { name: "Speakers", href: "/speakers", anchor: "#speakers" },
  { name: "Start-ups", href: "/startups", anchor: "#startups" },
  { name: "Sponsors", href: "/sponsors", anchor: "#sponsors" },
  { name: "Submit Abstract", href: "/abstracts", anchor: "#abstracts" },
  { name: "Venue", href: "/venue", anchor: "#venue" },
  { name: "Contact", href: "/contact", anchor: "#contact" },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const getNavLink = (item: (typeof navigationItems)[0]) => {
    return isHomePage ? item.anchor : item.href
  }

  const isActiveLink = (item: (typeof navigationItems)[0]) => {
    if (isHomePage) return false
    return pathname === item.href
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: (typeof navigationItems)[0]) => {
    if (isHomePage && item.anchor) {
      e.preventDefault()
      const targetId = item.anchor.substring(1)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header id="navbar" className="fixed top-0 left-0 right-0 z-50 bg-slate-800 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl sm:text-2xl font-bold text-white hover:text-blue-300 transition">
          iSMIT 2026
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-4 xl:space-x-8 items-center">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={getNavLink(item)}
              onClick={(e) => handleNavClick(e, item)}
              className={`text-sm xl:text-base transition ${
                isActiveLink(item) ? "text-blue-300 font-bold" : "text-white hover:text-blue-300"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/registration">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 xl:px-4 text-sm xl:text-base rounded-lg transition shadow-md">
              Register Now
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-white focus:outline-none p-2"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-800/98 backdrop-blur-sm border-t border-slate-700">
          <div className="px-4 py-2 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={getNavLink(item)}
                onClick={(e) => handleNavClick(e, item)}
                className={`block text-left py-3 px-4 rounded-lg transition text-base ${
                  isActiveLink(item) ? "text-blue-300 bg-slate-700" : "text-white hover:bg-slate-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/registration"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-blue-500 text-white text-center py-3 px-4 mt-3 rounded-lg hover:bg-blue-600 transition font-bold"
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
