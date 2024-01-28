import React from 'react'
import Marquee from "react-fast-marquee";

const partners = [
  {
    image: '/assets/images/storage/blockworks-monochrome-16690614659sgXJ.svg',
    title: 'Blockworks',
    link: '#',
  },
  {
    image: '/assets/images/storage/sifted-1663423453PaDAL.png',
    title: 'Sifted',
    link: '#',
  },
  {
    image: '/assets/images/storage/mycompanypolska-1663423452Fqb6v.svg',
    title: 'My Company Polska',
    link: '#',
  },
  {
    image: '/assets/images/storage/nasdaq-monochrome-16692198428B73k.svg',
    title: 'NASDAQ',
    link: '#',
  },
  {
    image: '/assets/images/storage/the-block-monochrome-1669219764BaQvS.svg',
    title: 'The block research',
    link: '#',
  },
  {
    image: '/assets/images/storage/coindesk-monochrome-1669218572qe8Kk.svg',
    title: 'CoinDesk',
    link: '#',
  },
  {
    image: '/assets/images/storage/accelpoint-monochrome-1668855161K1mGp.svg',
    title: 'accelpoint',
    link: '#',
  },
  {
    image: '/assets/images/storage/monetary-authority-of-singapore-monochrome-166920686312kdG.svg',
    title: 'Monetary Authority of Singapore',
    link: '#',
  },
]

export default function Partners() {
  return (
    <section className="partners relative">
      <div className="union-gradient">
        <div className="union-gradient--union-left"></div>
        <div className="union-gradient--union-right"></div>
      </div>
      <div className="container pt-6">
        <h6 className="text-center relative z-[1] font-headline text-overline tracking-[0.27em] uppercase text-white">Featured in</h6>
        <Marquee pauseOnHover className='marquee-partner border-b border-b-night-300 mt-8 sm:mt-14 pb-12 md:pb-16'>
          {partners.map((partner, index) => (
            <a className='' key={index} href={partner.link} target="_blank" title={partner.title}>
              <img src={partner.image} className='h-12 object-contain' alt={partner.title} />
            </a>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
