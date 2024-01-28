import React from 'react'

const statistics = [
  {
    number: '0.9 sec',
    title: 'Time to finality'
  },
  {
    number: '0.0003 AZERO',
    title: <>Avg cost per<br /> transaction</>
  },
  {
    number: '194231',
    title: 'Accounts'
  },
  {
    number: '198',
    title: 'Mainnet validators'
  }
]

export default function Statistics() {
  return (
    <section className="py-4 lg:py-10" data-scroll-id="statistics">
      <div className="container">
        <div className="flex flex-wrap justify-between">
          {statistics.map((statistic, index) => (
            <div className="text-center py-8 w-1/2 lg:w-auto" key={index} data-aos="zoom-in">
              <h4 className="font-headline font-bold text-2xl relative text-white before:absolute before:-bottom-4 before:w-16 before:h-[3px] before:bg-primary-darker before:left-1/2 before:-translate-x-1/2">
                {statistic.number}
              </h4>
              <p className="mt-8">{statistic.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
