export function VenueSection() {
  return (
    <section id="venue" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-sm md:text-base font-semibold text-[#1DA9C9] mb-2">Historic Setting</h2>
          <h3 className="text-2xl md:text-4xl font-bold text-[#333333]">Altes Rathaus, Nuremberg</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src="https://www.nuernberg.de/imperia/md/zentral/bilder/verwaltung_rat/rathaus/fittosize_1296_864_af7473727b004b19cff8a8a4e208b42a_altes_rathaus_adobestock_rh2010.jpg"
              alt="Altes Rathaus Nürnberg"
              className="rounded-lg shadow-lg w-full h-48 md:h-auto object-cover"
            />
          </div>
          <div className="text-[#A9A9A9] order-1 md:order-2">
            <p className="text-base md:text-lg mb-4 leading-relaxed">
              The congress will take place in the historic Old Town Hall (Altes Rathaus) of Nuremberg, with plenary
              sessions held inside the majestic Imperial Castle (Kaiserburg) overlooking the city.
            </p>
            <h4 className="font-bold text-lg md:text-xl mt-4 md:mt-6 mb-3 text-[#333333]">Getting There</h4>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li className="flex items-start">
                <span className="font-semibold text-[#F28C28] mr-2 min-w-0 flex-shrink-0">✈️</span>
                <span>
                  <strong>By Plane:</strong> Nuremberg Airport (NUE) is a 20-min subway ride to the city center.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-[#F28C28] mr-2 min-w-0 flex-shrink-0">🚂</span>
                <span>
                  <strong>By Train:</strong> Nuremberg Main Station is a major hub with excellent connections.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-[#F28C28] mr-2 min-w-0 flex-shrink-0">🚗</span>
                <span>
                  <strong>By Car:</strong> Easily reachable via the A3, A6, and A9 motorways.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
