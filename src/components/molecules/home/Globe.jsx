import React from 'react'
import GlobeCanvas from '../../atoms/GlobeCanvas'

const dataLeft = [
  {
    title: 'World ID sign-ups',
    value: '3,089,349'
  },
  {
    title: 'Countries with World ID users',
    value: '120'
  },
  {
    title: 'New accounts in last 7 days',
    value: '203,968'
  },
  {
    title: 'Days since launch',
    value: '181'
  }
]

const dataRight = [
  {
    title: 'Amount of WLD claimed by users*',
    value: '63,113,533'
  },
  {
    title: 'Wallet transactions by World App users',
    value: '20,783,685'
  },
  {
    title: 'Daily wallet transactions avg. last 7 days',
    value: '322,613'
  },
  {
    title: 'Countries where Orb verifications happened',
    value: '35'
  },
  {
    title: 'Orbs manufactured',
    value: '2,000'
  }
]


export default function Globe() {
  return (
    <section className="px-4 mt-10 md:px-6 lg:col-span-2 lg:px-8 xl:px-6 2xl:px-12">
      <div className="z-[999] mb-8 grid gap-y-6 text-center tracking-tight xl:gap-y-24">
        <div className="grid gap-y-4">
          <h1 className="font-headline font-bold text-3xl xl:text-4xl text-white">For every human</h1>
          <h2 type="heading2" className="lg:text-xl">Privacy-first. Owned by everyone.</h2>
        </div>
        <p className="border-[#bdbdbd] text-999999 xl:text-20 before:bg-[#bdbdbd] relative z-[2] min-w-[calc(34*1ch)] justify-self-center rounded-full border-2 p-3 before:absolute before:left-1/2 before:top-full before:h-12 before:w-0.5 before:-translate-x-1/2 xl:px-9 xl:py-4"><span>3,089,349</span> <span>unique humans on Worldcoin</span></p>
      </div>
      <div className="grid gap-y-10 max-xl:pb-20 xl:grid-cols-[1fr_3fr_1fr] xl:grid-rows-[1fr_auto_auto_1fr] xl:gap-y-12" >
        <div className="z-0 aspect-square max-lg:pointer-events-none xl:row-span-4 lg:px-20">
          <GlobeCanvas />
        </div>
        <div data-aos="fade-right" className="border-t-[#ff7c2e] xl:after:bg-[#ff7c2e] xl:before:bg-[#ff7c2e] relative flex flex-col border-t-2 pt-7 xl:col-start-1 xl:row-start-2 xl:-translate-y-2/3 xl:before:absolute xl:before:right-[-5rem] xl:before:top-[-2px] xl:before:h-[2px] xl:before:w-8 xl:before:origin-top-left xl:before:translate-x-full xl:before:rotate-45 xl:after:absolute xl:after:right-[-5rem] xl:after:top-[-2px] xl:after:h-[2px] xl:after:w-[5rem]">
          <ul className="grid content-start gap-y-5 xl:-mr-6">
            {dataLeft.map((item, index) => (
              <li className="text-lg" key={index}>
                <span className="xl:hidden"></span>
                <span>{item.title}</span>
                <div className="ml-1 inline-block font-bold max-xl:ml-1 xl:min-w-[80px]">
                  <span>{item.value}</span>
                </div>
                <span className="max-xl:hidden"></span>
              </li>
            ))}
          </ul>
        </div>
        <div data-aos="fade-left" className="border-t-[#00b979] xl:after:bg-[#00b979] xl:before:bg-[#00b979] relative flex flex-col border-t-2 pt-7 xl:col-start-3 xl:row-start-2 xl:-translate-y-2/3 xl:text-right xl:before:absolute xl:before:left-[-5rem] xl:before:top-[-2px] xl:before:h-[2px] xl:before:w-8 xl:before:origin-right xl:before:-translate-x-full xl:before:-rotate-45 xl:after:absolute xl:after:left-[-5rem] xl:after:top-[-2px] xl:after:h-[2px] xl:after:w-[5rem]">
          <ul className="grid content-start gap-y-5 xl:-ml-24">
            {dataRight.map((item, index) => (
              <li className="text-lg" key={index}>
                <span className="xl:hidden">{item.title}</span>
                <span></span>
                <div className="mr-1 inline-block font-bold max-xl:ml-1 xl:min-w-[80px]"><span>{item.value}</span></div>
                <span className="max-xl:hidden">{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

  )
}
