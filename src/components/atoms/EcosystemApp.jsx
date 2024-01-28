import clsx from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function EcosystemApp({
  title,
  description,
  logo,
  labels,
  likes,
  efp,
  className,
}) {
  return (
    <div className={twMerge(clsx("relative before:bg-night-150 before:top-5 before:left-0 before:w-full h-auto before:absolute before:bottom-0 before:border before:border-night-300 rounded-sm transition-colors duration-400 mt-4", className))}>
      <div className="relative px-4 pb-4 flex flex-col h-full">
        <div className="bg-bg-ecosystem h-16 w-16 p-2 border border-night-300 rounded-sm">
          <div className="h-full w-full rounded-sm bg-no-repeat bg-contain bg-50 bg-black"
            style={{ backgroundImage: `url(${logo})` }}
          >
          </div>
        </div>
        <h4 className="mt-4 text-white font-headline font-medium text-h2">{title}</h4>
        <div className="mt-1 lg:h-[91px] overflow-hidden text-night-medium-emphasis text-body-xs font-medium line-clamp-5">
          <p>{description}</p>
        </div>
        <div className="mt-auto h-[25px] overflow-hidden flex justify-between">
          <div className="flex flex-wrap items-center -mx-0.5">
            {labels.map((tag, index) => (
              <span className="text-day-350 text-[13px] bg-night-100 rounded-2xl px-2 py-0.5 m-0.5" key={index}>
                {tag}
              </span>
            ))}
          </div>

          {efp && <img src="/assets/images/storage/efp-logo-short-1691511197EvxPB.png" className="w-auto h-full" alt="" />}
        </div>
        <span className="absolute top-2 right-4 p-2.5 border border-night-300 rounded flex items-center bg-night-100">
          <i className="icon-heart-o mr-2 text-2xl text-primary" />
          <span className="text-white">{likes}</span>
        </span>
      </div>
    </div>
  )
}
