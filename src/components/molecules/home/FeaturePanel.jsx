import clsx from 'clsx'
import React from 'react'

export default function FeaturePanel({
  title,
  url,
  image,
  background,
  linkText,
  alignLeft = false
}) {
  return (
    <section className="pt-6 relative lg:flex lg:items-center lg:h-[500px] lg:pt-48">
      <div className={clsx("none md:block bottom-0 z-[1] right-0 w-panel-mobile bg-no-repeat bg-auto-100 h-[300px] absolute lg:bg-p-100 lg:w-panel", alignLeft ? "lg:right-0" : "lg:left-0")}>
        <img src={background} alt="" />
      </div>
      <div className={clsx("container relative lg:flex z-10", alignLeft ? "lg:justify-start" : "lg:justify-end")}
        data-aos={alignLeft ? "fade-right" : "fade-left"}>
        <a href={url} className='group lg:flex block border border-night-300 bg-night-150 md:bg-night-200'>
          <div className="md:w-[300px] overflow-hidden">
            <img src={image} className='transition duration-400 group-hover:scale-105 h-full object-cover' alt="" />
          </div>

          <div className='pt-8 pb-4 px-4 md:px-8 md:w-[360px]'>
            <h4 className="group-hover:-ml-2 transition-all duration-400 quote-heading font-headline text-2xl text-white">
              {title}
            </h4>

            <div className="flex justify-end text-primary-darker hover:text-primary items-center mt-6 md:mt-8 font-headline font-medium">
              <span>{linkText}</span>
              <i className="icon-arrow-right ml-2 text-2xl"></i>
            </div>
          </div>
        </a>
      </div>

      <div className="featured-panel-gradient"></div>
      <div className={clsx("featured-panel-bg", alignLeft && "right")}></div>
    </section>
  )
}
