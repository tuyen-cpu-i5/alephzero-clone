import React from 'react'

export default function RoadmapHero() {
  return (
    <section className="roadmap-hero pt-[130px] lg:pt-[149px] xl:pt-[175px] relative">
      <div className="container mt-[-26px] text-center min-h-[230px] flex items-center justify-center md:pt-5 md:min-h-[177px] md:items-start">
        <div className="max-w-[620px]">
          <h1 data-aos="fade" className="text-text-night-100 font-headline text-h1">Project <strong>roadmap</strong></h1>

          <div className="mt-2" data-aos="fade">
            <ul className="flex items-center flex-wrap justify-center -mx-4">
              <li className="flex items-center justify-center text-night-medium-emphasis text-body-s px-4 py-2">
                <i className="icon-mainnet mr-2"></i><span>Core chain</span>
              </li>
              <li className="flex items-center justify-center text-night-medium-emphasis text-body-s px-4 py-2">
                <i className="icon-governance mr-2"></i><span>Governance</span>
              </li>
              <li className="flex items-center justify-center text-night-medium-emphasis text-body-s px-4 py-2">
                <i className="icon-smart-contract mr-2"></i><span>Smart contracts</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
