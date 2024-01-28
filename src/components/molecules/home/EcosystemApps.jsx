import React from 'react'
import Slider from 'react-slick/lib/slider'
import EcosystemApp from '../../atoms/EcosystemApp'
import Feature from '../../core/Feature'
import Marquee from 'react-fast-marquee'

const ecosystemLeft = [
  {
    title: 'idOS',
    description: 'The identity layer of web3',
    labels: ['Identity management', '+ 4'],
    logo: '/assets/images/storage/idos-primary-horizontal-1694520669KCjh2.png',
    likes: 37,
    efp: true
  },
  {
    name: 'Gatenox',
    description: 'Welcome to Gatenox – Your Partner in Web3 and DeFi Corporate Onboarding',
    labels: ['Identity management', '+ 1'],
    logo: '/assets/images/storage/gatenox-gradient-200x200-16757843405fsX8.png',
    likes: 20,
    efp: true
  },
  {
    name: 'Subsquid',
    description: 'An open-source framework to create scalable and performant indexers',
    labels: ['Software developer', '+ 1'],
    logo: '/assets/images/storage/squid-pose-1-white-transparent-slim-6-1695385557mZFln.png',
    likes: 4,
  },
  {
    name: 'AZERO.ID',
    description: 'AZERO.ID is the first-ever private domain name service built on Aleph Zero',
    labels: ['Identity management', '+ 3'],
    logo: '/assets/images/storage/icon-primary-on-dark-with-margin-1684394510szcX8.png',
    likes: 370,
    efp: true
  },
  {
    title: "Talisman",
    description: "An easy-to-use browser wallet extension for accessing Aleph Zero and 150+ other blockchains",
    logo: "/assets/images/storage/talisman-icon-blue-1685529352iAuR0.png",
    likes: 17,
    labels: ["Wallet", "+ 1"],
  }
]

const ecosystemRight = [
  {
    name: 'Liminal',
    description: 'Liminal is Aleph Zero\'s native multichain, privacy-enhancing technology.',
    labels: ['Privacy'],
    logo: '/assets/images/storage/a0-ecosystem-liminal-logo-1667766006e8F5N.png',
    likes: 126,
  },
  {
    name: 'Nightly Wallet',
    description: 'Nightly is a non-custodial wallet solution for NEAR, Solana, Aptos, SUI and Aleph Zero.',
    labels: ['Wallet', '+ 1'],
    logo: '/assets/images/storage/a0-ecosystem-nightly-logo-169150652986FXu.png',
    likes: 37,
    efp: true
  },
  {
    title: "Cardinal Cryptography",
    description: "Co-founded by Adam Gagol, Antoni Zolciak, Michal Swietek, and Matthew Niemerg, Cardinal Cryptography is the core developer of the Aleph Zero technology — consensus protocol, blockchain, and more.",
    logo: "/assets/images/storage/cardinal-sm-avatarjpg-167543209254Hm8.jpg",
    likes: 29,
    labels: ["Core developer", "+ 1"],
    efp: true,
  },
  {
    title: "MetaMask",
    description: "A MetaMask Snap that onboards users to the Aleph Zero network.",
    logo: "/assets/images/storage/metamask-aleph-zero-1673621095zNejV.png",
    likes: 49,
    labels: ["Wallet", "+ 1"],
    efp: true,
  },
  {
    title: "SubWallet",
    description: "SubWallet is a Web3 extension wallet for Substrate-based chains.",
    logo: "/assets/images/storage/subwallet-aleph-zero-logo-1667768016nhRkI.jpeg",
    likes: 90,
    labels: ["Wallet"],
  }
]

const ecosystems = ecosystemLeft.concat(ecosystemLeft);

const EcosystemMobile = () => {
  return (
    <div className="lg:hidden py-12">
      <Marquee direction="right" className='ecosystem-placeholder-top'>
        {[...Array(ecosystems.length)].map((_, index) => (
          <img src="/assets/images/homepage-applications-overlay-v2.svg" key={index} width="240" height="276" className="mx-3" alt="" />
        ))}
      </Marquee>
      <Marquee speed={50} className="mt-3 mb-6">
        {ecosystems.map((ecosystem, index) => (
          <EcosystemApp key={index} {...ecosystem} className="w-[276px] h-[260px] mx-3" />
        ))}
      </Marquee>
      <Marquee direction="right" className='ecosystem-placeholder-bottom'>
        {[...Array(ecosystems.length)].map((_, index) => (
          <img src="/assets/images/homepage-applications-overlay-v2.svg" key={index} width="240" height="276" className="mx-3" alt="" />
        ))}
      </Marquee>
    </div>
  )
}

export default function EcosystemApps() {
  return (
    <Feature
      id="applications"
      title={<><strong>Applications</strong> under development</>}
      description="With the mainnet launch, Aleph Zero has seen a notable initial adoption within the developer community. Our flexible environment will be familiar for builders who are already accustomed with Rust and the Substrate stack."
      cta={{ text: 'Explore the ecosystem', link: '#' }}
      alignRight
      offset
      center
      extend={<EcosystemMobile />}
    >
      <div className="hidden relative h-[970px] -ml-12 xl:-ml-3 lg:flex gap-3">
        <Slider
          infinite
          centerMode
          pauseOnHover={false}
          arrows={false}
          slidesToShow={2}
          className='ecosystem-slider reverse left w-1/2 rotate-180'
          autoplaySpeed={4000}
          speed={2000}
          autoplay
          vertical
        >
          {ecosystemLeft.map((ecosystem, index) => (
            <EcosystemApp key={index} {...ecosystem} className="my-3 -rotate-180" />
          ))}
        </Slider>
        <Slider
          infinite
          centerMode
          pauseOnHover={false}
          arrows={false}
          slidesToShow={1}
          centerPadding='200px'
          className='ecosystem-slider right w-1/2'
          autoplaySpeed={4000}
          speed={2000}
          autoplay
          vertical
        >
          {ecosystemRight.map((ecosystem, index) => (
            <EcosystemApp key={index} {...ecosystem} className="my-3" />
          ))}
        </Slider>
      </div>
    </Feature>
  )
}
