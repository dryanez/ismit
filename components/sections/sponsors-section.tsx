import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SponsorsSection() {
  return (
    <section id="sponsors" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-sm md:text-base font-semibold text-blue-600 mb-2">Partners in Innovation</h2>
          <h3 className="text-2xl md:text-4xl font-bold text-slate-800">Sponsorship Opportunities</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-12">
          <div className="card p-4 md:p-6 text-center border-t-4 md:border-t-8 border-amber-400 hover:shadow-lg transition-shadow">
            <h4 className="text-lg md:text-2xl font-bold text-slate-800">Platinum</h4>
            <p className="text-2xl md:text-4xl font-black text-amber-500 my-2 md:my-4">€20,000</p>
            <ul className="text-slate-600 space-y-1 md:space-y-2 text-xs md:text-sm">
              <li>Premium Booth Space</li>
              <li>Exclusive Prime-Time Advertising</li>
              <li>4 Full Congress Tickets</li>
            </ul>
          </div>
          <div className="card p-4 md:p-6 text-center border-t-4 md:border-t-8 border-slate-400 hover:shadow-lg transition-shadow">
            <h4 className="text-lg md:text-2xl font-bold text-slate-800">Gold</h4>
            <p className="text-2xl md:text-4xl font-black text-slate-500 my-2 md:my-4">€12,000</p>
            <ul className="text-slate-600 space-y-1 md:space-y-2 text-xs md:text-sm">
              <li>Exhibition Booth</li>
              <li>Advertising Inserts</li>
              <li>2 Full Congress Tickets</li>
            </ul>
          </div>
          <div className="card p-4 md:p-6 text-center border-t-4 md:border-t-8 border-orange-400 hover:shadow-lg transition-shadow">
            <h4 className="text-lg md:text-2xl font-bold text-slate-800">Silver</h4>
            <p className="text-2xl md:text-4xl font-black text-orange-500 my-2 md:my-4">€6,000</p>
            <ul className="text-slate-600 space-y-1 md:space-y-2 text-xs md:text-sm">
              <li>Exhibition Booth</li>
              <li>Logo on Website</li>
              <li>1 Full Congress Ticket</li>
            </ul>
          </div>
          <div className="card p-4 md:p-6 text-center border-t-4 md:border-t-8 border-stone-400 hover:shadow-lg transition-shadow">
            <h4 className="text-lg md:text-2xl font-bold text-slate-800">Bronze</h4>
            <p className="text-2xl md:text-4xl font-black text-stone-500 my-2 md:my-4">€2,000</p>
            <ul className="text-slate-600 space-y-1 md:space-y-2 text-xs md:text-sm">
              <li>Logo on Website</li>
              <li>Flyer in Delegate Pack</li>
              <li>1 Full Congress Ticket</li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <Link href="/sponsors">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full sm:w-auto">Become a Sponsor</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
