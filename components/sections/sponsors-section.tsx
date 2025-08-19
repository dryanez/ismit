import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SponsorsSection() {
  return (
    <section id="sponsors" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-sm md:text-base font-semibold text-[#1DA9C9] mb-2">Partners in Innovation</h2>
          <h3 className="text-2xl md:text-4xl font-bold text-[#333333] bg-[rgba(249,198,0,1)] rounded-2xl">Sponsorship Opportunities</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-12">
          <div className="card p-4 md:p-6 text-center border-t-4 md:border-t-8 border-[#F9C600] hover:shadow-lg transition-shadow">
            <h4 className="text-lg md:text-2xl font-bold text-[#333333]">Platinum</h4>
            <p className="text-2xl md:text-4xl font-black text-[#F9C600] my-2 md:my-4">€20,000</p>
            <ul className="text-[#A9A9A9] space-y-1 md:space-y-2 text-xs md:text-sm">
              <li>Premium Booth Space</li>
              <li>Exclusive Prime-Time Advertising</li>
              <li>4 Full Congress Tickets</li>
            </ul>
          </div>
          <div className="card p-4 md:p-6 text-center border-t-4 md:border-t-8 border-[#1DA9C9] hover:shadow-lg transition-shadow">
            <h4 className="text-lg md:text-2xl font-bold text-[#333333]">Gold</h4>
            <p className="text-2xl md:text-4xl font-black text-[#1DA9C9] my-2 md:my-4">€12,000</p>
            <ul className="text-[#A9A9A9] space-y-1 md:space-y-2 text-xs md:text-sm">
              <li>Exhibition Booth</li>
              <li>Advertising Inserts</li>
              <li>2 Full Congress Tickets</li>
            </ul>
          </div>
          <div className="card p-4 md:p-6 text-center border-t-4 md:border-t-8 border-[#F28C28] hover:shadow-lg transition-shadow">
            <h4 className="text-lg md:text-2xl font-bold text-[#333333]">Silver</h4>
            <p className="text-2xl md:text-4xl font-black text-[#F28C28] my-2 md:my-4">€6,000</p>
            <ul className="text-[#A9A9A9] space-y-1 md:space-y-2 text-xs md:text-sm">
              <li>Exhibition Booth</li>
              <li>Logo on Website</li>
              <li>1 Full Congress Ticket</li>
            </ul>
          </div>
          <div className="card p-4 md:p-6 text-center border-t-4 md:border-t-8 border-[#A9A9A9] hover:shadow-lg transition-shadow">
            <h4 className="text-lg md:text-2xl font-bold text-[#333333]">Bronze</h4>
            <p className="text-2xl md:text-4xl font-black text-[#A9A9A9] my-2 md:my-4">€2,000</p>
            <ul className="text-[#A9A9A9] space-y-1 md:space-y-2 text-xs md:text-sm">
              <li>Logo on Website</li>
              <li>Flyer in Delegate Pack</li>
              <li>1 Full Congress Ticket</li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <Link href="/sponsors">
            <Button className="bg-[#E43C7A] hover:bg-[#d1356b] text-white w-full sm:w-auto">Become a Sponsor</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
