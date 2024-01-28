import React from 'react'
import Slider from 'react-slick'
import Quote from '../../atoms/Quote'
import clsx from 'clsx'

const quotes = [
  {
    quote: 'The progress that Aleph Zero has made is incredible; with proven limitations in EVM, WASM smart contracts written in ink! are the future. As an early and constant supporter of the Aleph Zero ecosystem, we have no doubt about their achievements and are committed to working alongside them to support innovative and disruptive technologies as quickly as possible.',
    name: 'Hieu Dao',
    caption: 'Co-founder',
    logo: '/assets/images/storage/group-21-1691659081n3vPj.png'
  },
  {
    quote: 'Aleph Zero is one of the most secure and scalable networks in the industry. We believe many NFT-related projects with real use cases can run effectively on the network. Aleph Zero can be a potential game changer, especially once the privacy layer is fully implemented.',
    name: 'Brian Nguyen',
    caption: 'Co-founder',
    logo: '/assets/images/storage/monochrome-1691659230zb4gv.png'
  },
  {
    quote: 'Information submitted by players will remain confidential through the use of Aleph Zero’s Zero-Knowledge proof solutions to ensure that whatever happens in DRKVRS, stays in DRKVRS.',
    name: 'Marcin Kobylecki',
    caption: 'Co-founder',
    logo: '/assets/images/storage/monochrome-1691659358Z2vJk.png'
  },
  {
    quote: 'We can decentralize the Interlock logic without revealing how the heuristics work, or what they are computing—which is part of our advantage against malicious actors.',
    name: 'Nick',
    caption: 'Principal Engineer',
    logo: '/assets/images/storage/mono-1691659725SdKSw.png'
  },
  {
    quote: 'Our collaboration with Aleph Zero is very exciting. With new technical standards and a high level of decentralization, we are working together on the secure Internet of Values.',
    name: 'Dirk Röder',
    caption: 'Head of the Web3 Infrastructure & Solutions Team',
    logo: '/assets/images/storage/deutschetelecom-1702296857tKLbf.svg'
  },
  {
    quote: 'While aiming for genuine decentralization, Aleph Zero upholds rigorous data privacy and transaction-security standards. Highly versatile, its key strength is that it enables to exchange value online faster, more cheaply and more securely than alternatives.',
    name: 'Technology Fast50 CE Report',
    caption: '',
    logo: '/assets/images/storage/deloite-1702297487sWeT7.svg'
  },
  {
    quote: 'Aleph Zero is at the top of our priority list. It brings an exciting use case for us: private fundraises that could be attractive to enterprises that don’t want to disclose the investment but would benefit from our smart contract-based protection.',
    name: 'Alex Strzesniewski',
    caption: 'CEO',
    logo: '/assets/images/storage/angelblock-1691658557Vgt4g.svg'
  },
]

const Arrow = ({ style, onClick, direction }) => {
  return (
    <button
      className={"absolute slick-arrow top-1/2 transform -translate-y-1/2 z-10 w-24 h-24 border-[18px] border-night-100 rounded-full bg-transparent " + (direction === "right" ? "right-slick-arrow" : "left-slick-arrow")}
      onClick={onClick}
      style={{ ...style }}
    >
      <span className='rounded-full h-full flex items-center justify-center bg-buttons-secondary hover:bg-buttons-secondary-hover text-buttons-secondary-color hover:text-buttons-secondary-hover-color'>
        <i className={`icon-chevron-${direction} text-2xl`}></i>
      </span>
    </button>
  )
}

export default function Quotes() {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const ref = React.createRef()

  return (
    <section className="mt-6 lg:mt-10" id="quotes">
      <div className="container p-1">
        <Slider
          infinite
          centerMode
          pauseOnHover={false}
          centerPadding="25%"
          slidesToShow={1}
          className='quotes-slider max-md:!hidden'
          afterChange={(index) => setCurrentSlide(index)}
          ref={ref}
          nextArrow={<Arrow direction="right" />}
          prevArrow={<Arrow direction="left" />}
          autoplaySpeed={4000}
          autoplay
        >
          {quotes.map((slide, index) => (
            <Quote
              key={index}
              className="desktop"
              quote={slide.quote}
              name={slide.name}
              caption={slide.caption}
              logo={slide.logo}
            />
          ))}
        </Slider>

        <Slider
          infinite
          pauseOnHover={false}
          slidesToShow={1}
          className='md:!hidden'
          afterChange={(index) => setCurrentSlide(index)}
          ref={ref}
          arrows={false}
          autoplaySpeed={4000}
          autoplay
        >
          {quotes.map((slide, index) => (
            <Quote
              key={index}
              className="px-4"
              quote={slide.quote}
              name={slide.name}
              caption={slide.caption}
              logo={slide.logo}
            />
          ))}
        </Slider>

        <div className="flex justify-center mt-8">
          <ul className="flex p-2 border border-night-300 rounded-[50px]" role="tablist">
            {quotes.map((slide, index) => (
              <li className="" key={index} role="presentation">
                <button type="button" role="tab" tabIndex="-1"
                  onClick={() => ref.current.slickGoTo(index)}
                  className={clsx("slide-dot", currentSlide === index && "active")}>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
