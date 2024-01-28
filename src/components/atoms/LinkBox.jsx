import clsx from 'clsx'
import React from 'react'

export default function LinkBox({ data, className }) {
  const { title, description, url, image, external } = data

  return (
    <div className={clsx('', className)} data-aos="zoom-in">
      <a href={url} target="_blank" title={title} className="link-box group">
        <div className="absolute w-16 top-4 left-4 md:top-2 md:left-6 md:w-24 transition-all duration-400 group-hover:top-1">
          <img src={image} alt={title} />
        </div>
        <h3 className="quote-heading text-h3 font-headline text-white">AZERO <strong>{title}</strong></h3>
        <p className='text-body-s mt-2'>{description}</p>
        <span className="absolute right-0 w-[125px] h-[48px] bottom-4">
          <span className="link-box-button">
            <i className={clsx(external ? "icon-external-link" : "icon-arrow-right", "text-2xl mr-2")}></i>
            <span>Go to</span>
          </span>
        </span>
      </a>
    </div>
  )
}
