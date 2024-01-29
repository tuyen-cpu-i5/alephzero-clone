import Lottie from 'lottie-react'
import React from 'react'
import GlobeCanvas from "@/components/atoms/GlobeCanvas";

export default function Hero() {
  return (
    <section className="pt-[130px] lg:pt-[149px] xl:pt-[175px] relative" id="hero">
      <div className="container md:relative z-[1] pt-52 md:pt-16 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-12">
          <div className={"lg:col-span-5 md:pl-6 md:pr-7 max-md:order-2"} data-aos="fade-left">
            <h3 className="pb-6 text-[1.9375rem] md:text-[2.6875rem] font-headline relative before:absolute before:bottom-0 before:w-16 before:h-[2px] before:bg-primary-darker text-white tracking-[.025em] leading-[1.16]">
              <strong>Blazingly fast.
              </strong>
              <br />
              Exceptionally private.
            </h3>
            <div className="mt-6 text-body-l">
              <p>
                Deploy Web3 apps that are as fast as legacy solutions. Aleph Zero is a layer 1 that enables teams to deploy scalable, secure, low-cost, and ZK privacy-enhanced products across multiple verticals—from DeFi and gaming to enterprise.
              </p>
            </div>

            <a href="#" className="mt-6 font-medium font-headline rounded-[3rem] flex items-center justify-center w-fit h-12 px-6 btn-secondary" title="Get involved">
              <i className="icon-scroll-down mr-2"></i>
              <span>Start exploring</span>
            </a>
          </div>
          <div className="lg:col-span-7 md:-mt-4 md:-mr-12 lg:-mt-32 xl:-mt-48 z-10 max-md:-mt-[220px]">
            {/*<GlobeCanvas/>*/}
            <div className="z-0 aspect-square max-lg:pointer-events-none xl:row-span-4 lg:px-20">
              <GlobeCanvas/>
            </div>
          </div>
        </div>
      </div>
      <div className='hero-lottie absolute top-2.5 h-[350px] overflow-hidden w-full md:top-[35px] md:h-[668px]'>
        <img
          className='absolute top-0 left-0 w-full h-full object-cover'
          src="/assets/images/hero-bg.svg"
          alt="hero"
        />
      </div>
    </section>
  )
}
