import clsx from 'clsx'
import React from 'react'

export default function Quote({
  quote,
  name,
  caption,
  logo,
  className
}) {
  return (
    <div className={clsx("w-full flex h-full mx-auto items-center quote", className)}>
      <div className='bg-night-150 border border-night-300 rounded transition-transform'>
        <div className="relative">
          <div className="absolute z-10 top-[14px] left-[-20px] text-primary">
            <i className="icon-quote text-display-2"></i>
          </div>
          <div className="p-8 md:py-8 md:pl-10 pr-6 text-lg text-day-300">
            <p>{quote}</p>
          </div>
        </div>
        <div className="quote-details">
          <div className="font-headline">
            <h4 className="font-medium text-white text-lg">{name}</h4>
            <h6 className="text-sm">{caption}</h6>
          </div>
          <div className="flex justify-end">
            <img src={logo} alt={name} />
          </div>
        </div>
      </div>
    </div>
  )
}
