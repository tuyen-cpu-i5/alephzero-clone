import clsx from 'clsx'
import React from 'react'
import Lottie from 'lottie-react';

export default function BuildScale({ data, className }) {
  const { title, description, url, lottie, linkText } = data

  /**
   * @type {React.MutableRefObject<Lottie>}
   */
  const ref = React.useRef(null);

  return (
    <div className={clsx('px-2', className)} data-aos="zoom-in">
      <a href={url} target="_blank"
        className="build-scale group"
        onMouseEnter={() => ref.current?.play()}
        onMouseLeave={() => ref.current?.stop()}
      >
        <div className="absolute w-full top-4 left-4 md:top-2 md:left-6 transition-all duration-400 group-hover:top-1">
          <Lottie
            animationData={require(`../../assets/lotties/${lottie}`)}
            autoPlay={false}
            loop={false}
            lottieRef={ref}
          />
        </div>
        <h3 className="quote-heading text-h2 font-headline text-white">{title}</h3>
        <div className='pb-20'>
          <p className='mt-2'>{description}</p>
        </div>
        <span className="absolute right-4 bottom-4">
          <span className="build-scale-button">
            <span>{linkText}</span>
            <i className={clsx("icon-arrow-right", "text-2xl ml-2")}></i>
          </span>
        </span>
      </a>
    </div>
  )
}
