import clsx from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function Feature({
  children,
  id,
  title,
  description,
  cta: { text, link },
  alignRight = false,
  offset = false,
  extend,
  center = false
}) {
  return (
    <section className="mt-20 lg:mt-32" id={id}>
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-12">
          <div className={twMerge(clsx("lg:col-span-5", alignRight && "lg:order-2", offset && "lg:col-start-8", center && "flex flex-col justify-center"))} data-aos={alignRight ? 'fade-left' : "fade-right"}>
            <h3 className="pb-6 text-h1 font-headline relative before:absolute before:bottom-0 before:w-16 before:h-[2px] before:bg-primary-darker text-white tracking-[.025em] leading-[1.16]">
              {title}
            </h3>
            <div className="mt-6 text-body-l">
              <p>
                {description}
              </p>
            </div>

            <a href={link} className="mt-6 font-medium font-headline rounded-[3rem] flex items-center justify-center w-fit h-12 px-6 btn-secondary" title="Get involved">
              <span>{text}</span>
            </a>
          </div>
          <div className={twMerge(clsx(alignRight ? (offset ? 'lg:col-span-6' : "lg:col-span-7") : "lg:col-span-6 lg:col-start-7"))} data-aos="zoom-in">
            {children}
          </div>
        </div>
      </div>
      {extend}
    </section>
  )
}
