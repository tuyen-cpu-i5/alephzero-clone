import React from 'react'
import Marquee from 'react-fast-marquee'

const announcementData = [
  {
    title: <><strong>Virtual hackathon on Jan 10th</strong> with fantastic partners and over $500k in available funding!</>,
    image: '/assets/images/storage/azero-1662674417C7tlS.jpeg'
  }
]

export default function Announcement() {
  return (
    <aside className="announcement-bar flex fixed top-0 left-0 z-[90] w-full h-10 overflow-hidden bg-white text-text-day-100 transition-transform duration-400 lg:h-[55px] lg:bg-transparent before:lg:absolute before:lg:top-0 before:lg:left-0 before:lg:w-full before:lg:z-[-2] before:lg:h-[35px] before:lg:bg-white after:lg:absolute after:lg:top-0 after:lg:left-0 after:lg:w-full after:lg:z-[-2] after:lg:h-[35px] after:lg:opacity-5 after:lg:bg-contain after:lg:bg-announcement-bar after:lg:bg-50 after:lg:bg-repeat-x">
      <a
        href="https://hack.alephzero.org/"
        target="_blank"
        title="Sign up!"
        className="flex items-center justify-center relative w-full h-full bg-white z-[1] lg:px-6 lg:w-auto lg:min-w-[450px] lg:max-w-[800px] lg:mx-auto xl:min-w-0 xl:max-w-[900px] before:lg:absolute before:lg:right-full before:lg:top-0 before:lg:w-0 before:lg:h-0 before:lg:border-l-transparent before:lg:border-t-transparent before:lg:border-b-transparent before:lg:border-b-[55px] before:lg:border-r-[55px] before:lg:border-r-white after:lg:absolute after:lg:left-full after:lg:top-0 after:lg:w-0 after:lg:h-0 after:lg:border-l-transparent after:lg:border-r-transparent after:lg:border-b-transparent after:lg:border-t-[55px] after:lg:border-r-[55px] after:lg:border-t-white"
      >
        <span className="hidden lg:block lg:absolute lg:top-0 lg:right-full lg:z-[-1] lg:w-[300px] lg:h-[35px] lg:bg-announcement-gradient-before"></span>
        <span className="hidden lg:block lg:absolute lg:top-0 lg:left-full lg:z-[-1] lg:w-[300px] lg:h-[35px] lg:bg-announcement-gradient-after"></span>
        <div className="flex items-center">
          <Marquee>
            {announcementData.map((item, index) => (
              <div className="flex items-center mr-12" key={index}>
                <div className="h-8 w-8 mr-4">
                  <img src={item.image} alt="" className="" />
                </div>
                <p>
                  {item.title}
                </p>

              </div>
            ))}
          </Marquee>
        </div>

        <span className="quote-heading hidden text-sm xl:flex items-center whitespace-nowrap transition-colors hover:text-primary font-medium w-[130px] ml-4 pl-4">
          <span>Sign up!</span>
          <i className="icon icon-arrow-right ml-2"></i>
        </span>
      </a>
    </aside>
  )
}
