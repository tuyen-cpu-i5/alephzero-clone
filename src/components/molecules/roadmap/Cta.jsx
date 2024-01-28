import React from 'react'

export default function Cta() {
  return (
    <div className="py-44 relative mt-10 md:mt-20 cta-gradient z-10" data-scroll-id="link-boxes">
      <div className="container max-sm:px-0">
        <article className="h-[188px] md:mx-auto md:h-[114px] md:w-[635px] xl:w-[1000px] md:flex md:max-w-full" data-aos="zoom" data-aos-delay="200">
          <a href="#" title="Destination: Web3. Check out our economics!" className="flex flex-col items-center w-full h-full text-center bg-white px-6 py-8 md:grow md:flex-row md:p-0 md:text-primary before:md:basis-[68px] before:md:w-[68px] before:md:h-full before:md:bg-contain before:md:bg-night-box before:md:rotate-180 before:md:absolute before:md:left-[-68px] before:md:shrink-0 before:md:grow-0 before:md:bg-no-repeat after:md:basis-[68px] after:md:w-[68px] after:md:h-full after:md:bg-contain after:md:bg-night-box after:md:absolute after:md:right-[-68px] after:md:shrink-0 after:md:grow-0 after:md:bg-no-repeat">
            <div className="flex flex-col grow items-center justify-center pb-2 md:pr-6 md:pb-0 md:flex-row md:justify-start after:block after:grow after:h-auto after:w-0.5 after:mx-auto after:bg-text-day-300 after:md:w-auto after:md:h-0.5 after:bg-day-300">
              <h4 className="font-headline text-h2 text-day-high-emphasis pb-2 md:pb-0 md:max-w-[300px] xl:max-w-none mr-4 md:pr-6">
                Destination: <strong>Web3</strong>. Check out our economics!
              </h4>
            </div>
            <span className="whitespace-nowrap btn-primary rounded-[3rem] font-medium px-6 h-12 text-button-m text-center flex items-center justify-center align-middle">
              <span>Through here!</span>
            </span>
          </a>
        </article>
      </div>

      <div className="cta-lines"></div>
      <div className="cta-decorations"></div>
    </div>
  )
}
