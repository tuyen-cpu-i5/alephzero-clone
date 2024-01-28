import React from 'react'
import Slider from 'react-slick'
import UseCaseBox from '../../atoms/UseCaseBox'
import Feature from '../../core/Feature'

const slides = [
  {
    image: '/assets/images/storage/smart-contract-1668528260pRhUn.svg',
    title: 'Smart contracts'
  },
  {
    image: '/assets/images/storage/games-1668528260HSuaZ.svg',
    title: 'Game assets'
  },
  {
    image: '/assets/images/storage/public-documents-1668528260aop0X.svg',
    title: 'Transparent public document access'
  },
  {
    image: '/assets/images/storage/iot-1668528260hN7t5.svg',
    title: 'IoT'
  },
  {
    image: '/assets/images/storage/tax-1668528261DjfXM.svg',
    title: 'Automatic tax payment'
  },
  {
    image: '/assets/images/storage/supply-chain-1668528260zzZku.svg',
    title: 'Supply chain management'
  },
  {
    image: '/assets/images/storage/wallet-16685282612S46K.svg',
    title: 'Wallet & DEX'
  },
  {
    image: '/assets/images/storage/notary-signatory-1668528260Ykb0A.svg',
    title: 'Notary signatory'
  },
  {
    image: '/assets/images/storage/shared-revenue-1668528260rXi5i.svg',
    title: 'Automatic payments and shared revenue agreement'
  },
  {
    image: '/assets/images/storage/dns-1668528260ogSoc.svg',
    title: 'DNS'
  },
  {
    image: '/assets/images/storage/asset-digitization-1668528260tTuhA.svg',
    title: 'Asset digitization'
  },
  {
    image: '/assets/images/storage/database-1668528260aNWrV.svg',
    title: 'Databases'
  }
]

export default function Web3() {
  return (
    <Feature
      id="web3"
      title={<>Driving <strong>Web3 adoption</strong></>}
      description="Aleph Zero bridges the gap between scalability, security, developer friendliness, and cost of use. Moreover, the network will boast a native privacy stack to further enable you to build solutions that strike the balance between transparency and privacy."
      cta={{
        text: 'See what’s possible',
        link: '#'
      }}
      center
    >
      <Slider
        infinite
        centerMode
        pauseOnHover={false}
        draggable={false}
        arrows={false}
        slidesToShow={3}
        centerPadding='104px'
        className='web3-slider mt-16'
        autoplaySpeed={4000}
        autoplay
        vertical
      >
        {slides.map((slide, index) => (
          <UseCaseBox key={index} className="" image={slide.image} title={slide.title} />
        ))}
      </Slider>
    </Feature>
  )
}
