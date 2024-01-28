import React from 'react'
import BuildScale from '../../atoms/BuildScale'
import Slider from 'react-slick'
import clsx from 'clsx'

const items = [
  {
    title: <><strong>Build</strong> fast</>,
    description: 'Benefit from a unique combination of our consensus protocol, AlephBFT, and ink!, the Rust-based WASM programming environment.',
    url: '#',
    lottie: 'A0_Hoover1_3.json',
    linkText: 'Deploy apps',
  },
  {
    title: <><strong>Scale</strong> easy</>,
    description: 'Stake your AZERO with a trusted network of validators—or help scale Aleph Zero and make it more secure for everyone involved by becoming one yourself.',
    url: '#',
    lottie: 'A0_Hoover2_3.json',
    linkText: "Validate and nominate"
  }
]

export default function BuildScales() {

  const [currentSlide, setCurrentSlide] = React.useState(0)

  const ref = React.createRef()

  return (
    <section className='mt-14 md:mt-20'>
      <div className="container px-4">
        <Slider
          infinite
          slidesToShow={2}
          arrows={false}
          className='build-scales-slider'
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            }
          ]}
          afterChange={(index) => setCurrentSlide(index)}
          ref={ref}
        >
          {items.map((item, index) => (
            <BuildScale key={index} data={item} className="" />
          ))}
        </Slider>
        <div className="flex lg:hidden justify-center mt-8">
          <ul className="flex p-2 border border-night-300 rounded-[50px]" role="tablist">
            {items.map((slide, index) => (
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
