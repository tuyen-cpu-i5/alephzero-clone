import clsx from 'clsx'
import React from 'react'

function Item({ accordion }) {
  const [expanded, setExpanded] = React.useState(false)

  return (
    <div
      className={clsx(
        "roadmap-item",
        "transition-colors p-2 border-b border-b-night-300 cursor-pointer duration-400",
        expanded && "border-b-primary"
      )}
      onClick={() => setExpanded(!expanded)}
    >
      <div className='flex justify-between items-center text-night-medium-emphasis hover:text-night-high-emphasis'>
        <h6 className={clsx("font-headline text-h6 flex items-center relative min-h-12 pr-6 font-medium transition-colors", expanded && "text-night-high-emphasis")}>
          <i className={clsx(accordion.icon, "mr-4 text-base")} />
          {accordion.title}
        </h6>
        <i className={clsx('icon-chevron-down text-2xl text-primary transition-transform duration-400',
          expanded && "rotate-180"
        )}></i>
      </div>
      <div className={clsx("text-body-s transition-all duration-400 text-night-medium-emphasis pt-2 pb-3",
        expanded ? "opacity-100 max-h-[999px] visible" : "opacity-0 max-h-0 invisible"
      )}>
        {accordion.description}
      </div>
    </div>
  )
}

export default function RoadmapItem({ status, items, className }) {
  return (
    <div className={clsx("roadmap-column mx-2 relative z-[1] md:w-[400px] max-w-[calc(100vw-40px)] lg:mx-0 lg:px-3", className)}>
      <h6 className="font-headline uppercase text-overline text-white absolute top-0 right-0 w-[140px] pt-1 text-center">{status}</h6>
      {items.map((item, i) => (
        <div className="py-6 h-auto relative w-full" data-aos="zoom-in" key={i}>
          <div className="roadmap-item--header">&nbsp;</div>
          <div className="border border-night-300 rounded-sm bg-night-150 pb-10 pt-2 px-4 md:px-6">
            <img src={item.logo} alt="" className='w-auto max-w-full h-6' />
            <div className="mt-4">
              {item.items.map((accordion, index) => (
                <Item accordion={accordion} key={index} />
              ))}
            </div>
          </div>
          <div className="roadmap-item--footer">&nbsp;</div>
        </div>
      ))}
    </div>
  )
}
