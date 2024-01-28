import RoadmapItem from '@/components/atoms/RoadmapItem'
import clsx from 'clsx'
import React from 'react'
import Slider from 'react-slick'

const roadmap = [
  {
    status: 'Completed',
    items: [
      {
        logo: '/assets/images/storage/phase-aleph-1668541391NtfwI.svg',
        items: [
          {
            title: 'Peer-reviewed consensus protocol',
            description: <p>Aleph asynchronous BFT consensus protocol appeared on AFT&apos;19 peer-reviewed conference: <a href="https://dl.acm.org/doi/10.1145/3318041.3355467" target="_blank" rel="noopener" tabIndex={-1}>https://dl.acm.org/doi/10.1145/3318041.3355467</a></p>,
            icon: 'icon-mainnet',
          },
          {
            title: 'Proof of Concept Golang implementation',
            description: <p>The PoC implementation is available in our repository (<a href="https://github.com/aleph-zero-foundation/consensus-go" target="_blank" rel="noopener" tabIndex={-1}>https://github.com/aleph-zero-foundation/consensus-go</a>) and served as a basis for the first benchmarks.</p>,
            icon: 'icon-mainnet',
          },
        ]
      }
    ]
  },
  {
    status: 'Completed',
    items: [
      {
        logo: '/assets/images/storage/phase-aleph-1668541391NtfwI.svg',
        items: [
          {
            title: 'Golang consensus benchmarks',
            description: <p>Testing the sole consensus mechanism has yielded an impressive result of finalizing data corresponding in size to 89600 transactions per second with the sub-second latency.</p>,
            icon: 'icon-mainnet',
          },
          {
            title: 'Threshold ECDSA PoC Implementation',
            description: <p>The implementation served as a basis for protocol benchmarks in the paper.</p>,
            icon: 'icon-mainnet',
          },
        ]
      },
      {
        logo: '/assets/images/storage/phase-liminal-1668541391N2LVQ.svg',
        items: [
          {
            title: 'Privacy: Liminal-ZK and Liminal-MPC research',
            description: <p>Researching the zero-knowledge proof subsystem of the native privacy layer on Aleph Zero. Detailed roadmap under construction.</p>,
            icon: 'icon-mainnet',
          },
        ]
      },
    ]
  },
  {
    status: 'In Progress',
    items: [
      {
        logo: '/assets/images/storage/phase-aleph-1668541391NtfwI.svg',
        items: [
          {
            title: 'Native coin transfers',
            description: <p>Minting AZERO and allowing it to be freely transferred among different parties.</p>,
            icon: 'icon-mainnet',
          },
          {
            title: 'Polkadot.js integration',
            description: <p>Integrating with wallet, basic explorer and developer tool at azero.dev</p>,
            icon: 'icon-mainnet',
          },
          {
            title: 'Rust implementation of AlephBFT',
            description: <p>Reimplementing our consensus and setting up the chain using Substrate - a modular Rust framework for blockchain creation.</p>,
            icon: 'icon-mainnet',
          },
          {
            title: 'Validator rotation',
            description: <p>Developing mechanism allowing validators to automatically switch places in the committee.</p>,
            icon: 'icon-governance',
          },
        ]
      },
    ]
  },
  {
    status: 'In Progress',
    items: [
      {
        logo: '/assets/images/storage/phase-aleph-1668541391NtfwI.svg',
        items: [
          {
            title: 'Account explorer',
            description: <p>Allowing users to see advanced account statistics.</p>,
            icon: 'icon-mainnet',
          },
          {
            title: 'Validator elections',
            description: <p>Aleph Zero validators will be reassigned for each session, based on the sum of their own stake and funds staked on them by the community.</p>,
            icon: 'icon-governance',
          },
          {
            title: 'Basic smart contract capabilities',
            description: <p>Adding WASM-based smart contracts to Aleph Zero blockchain, together with deployment tutorials.</p>,
            icon: 'icon-smart-contract',
          },
          {
            title: 'Nomination pools',
            description: <p>Providing better nominator experience by allowing multiple users to jointly stake their tokens.</p>,
            icon: 'icon-governance',
          },
          {
            title: 'Hardware wallets integration',
            description: <p>Allows to store AZERO on Ledger and Parity Signer hardware wallets.</p>,
            icon: 'icon-mainnet',
          },
        ]
      },
    ]
  },
  {
    status: 'In Progress',
    items: [
      {
        logo: '/assets/images/storage/phase-aleph-1668541391NtfwI.svg',
        items: [
          {
            title: 'Basic Smart Contract Templates',
            description: <p>Including both backend templates, and frontend integration with wallets.</p>,
            icon: 'icon-smart-contract',
          },
          {
            title: 'Metamask Snap integration',
            description: <p>Providing plugin for Metamask based on the Metamask Snap feature.</p>,
            icon: 'icon-mainnet',
          },
          {
            title: 'Validator dashboard',
            description: <p>Explorer showing status of validators and their advanced statistics.</p>,
            icon: 'icon-governance',
          },
        ]
      },
    ]
  },
  {
    status: 'In Progress',
    items: [
      {
        logo: '/assets/images/storage/phase-aleph-1668541391NtfwI.svg',
        items: [
          {
            title: 'The Foundation&apos;s Committee Role',
            description: <p>At this stage, foundation nodes will still keep their permanent positions in the committee, but the committee size will grow so that the majority of seats will be occupied by community validators chosen in the permissionless manner.</p>,
            icon: 'icon-governance',
          },
          {
            title: 'Smart contracts tooling',
            description: <p>Enhancing developer experience with a handy debugger and easy to set-up local development environment.</p>,
            icon: 'icon-smart-contract',
          },
          {
            title: 'Basic node update mechanism',
            description: <p>Preparing for future chain upgrades to be performed on-the-fly, i.e., without the chain downtime.</p>,
            icon: 'icon-mainnet',
          },
          {
            title: 'Custom block sync mechanism',
            description: <p>In order to ensure network stability with very low block times, we’re creating our own protocol for validators to always get the correct version of the newly created block.</p>,
            icon: 'icon-global',
          },
          {
            title: 'Shielding PSP22 tokens',
            description: <p>Allowing users to anonymously transact using any PSP22 token.</p>,
            icon: 'icon-key',
          },
          {
            title: 'ZK-ID',
            description: <p>System that allows users to authenticate themselves in on-chain services without revealing any information beyond what is absolutely necessary.&nbsp;</p>,
            icon: 'icon-user',
          },
        ]
      },
    ]
  },
  {
    status: 'To Be Done',
    items: [
      {
        logo: '/assets/images/storage/phase-aleph-1668541391NtfwI.svg',
        items: [
          {
            title: 'Moving to full community-governance',
            description: <p>Giving away privileged positions of foundation nodes in the committee and enabling full community governance over future chain updates.</p>,
            icon: 'icon-governance',
          },
          {
            title: 'Shielded interactions with smart contracts',
            description: <p>Allowing users to make anonymous interactions with any smart contract.</p>,
            icon: 'icon-user',
          },
          {
            title: 'Privacy plugins',
            description: <p>Enabling developer access to our privacy engine, so anyone can expand its features.</p>,
            icon: 'icon-key',
          },
          {
            title: 'Private wallet',
            description: <p>All privacy-focusing features conveniently packaged into the classical wallet interface.</p>,
            icon: 'icon-wallet',
          },
        ]
      }
    ]
  }
]

const Arrow = ({ style, onClick, direction }) => {
  return (
    <button
      className={"arrow transition-all duration-400 invisible absolute z-10 top-1/4 w-[60px] h-[60px] rounded-full flex items-center justify-center bg-buttons-secondary hover:bg-buttons-secondary-hover text-buttons-secondary-color hover:text-buttons-secondary-hover-color " + (direction === "right" ? "right-1/4" : "left-1/4")}
      onClick={onClick}
      style={{ ...style }}
    >
      <i className={`icon-chevron-${direction} text-2xl`}></i>
    </button>
  )
}

const DEFAULT_SLIDE = 2

export default function RoadmapSlider() {
  const ref = React.createRef(null)
  const refMobile = React.createRef(null)
  const [currentSlide, setCurrentSlide] = React.useState(DEFAULT_SLIDE);

  function handleClick(index) {
    ref.current.slickGoTo(index);
    refMobile.current.slickGoTo(index);
    setCurrentSlide(index);
  }

  return (
    <section className="relative pt-6 md:pt-12">
      <div className="union-gradient">
        <div className="union-gradient--union-left w-[calc(50%-206px)] sm:w-[calc(50%-260px)] md:w-[calc(50%-392px)] lg:w-[calc(50%-495px)] xl:w-[calc(50%-608px)]"></div>
        <div className="union-gradient--union-right w-[calc(50%-206px)] sm:w-[calc(50%-260px)] md:w-[calc(50%-392px)] lg:w-[calc(50%-495px)] xl:w-[calc(50%-608px)]"></div>
      </div>
      <div className="container">
        <div className="roadmap-pagination flex items-end md:grow-[2]">
          {roadmap.map((roadmap, index) => (
            <button className={clsx("relative grow z-[1] md:max-w-none md:w-[82px] group")} key={index}
              onClick={() => handleClick(index)}
            >
              <span className={clsx("text-night-medium-emphasis font-headline font-medium text-button-s text-center group-hover:text-primary transition-colors", currentSlide === index && "text-primary")}>
                <span className="hidden md:inline">Phase </span>{index + 1}</span>
              <span className="flex items-center w-full mt-2 px-1 indicator">
                <span className={clsx(
                  "w-3.5 h-3.5 border rounded-full border-night-low-emphasis flex items-center transition-colors duration-400",
                  currentSlide === index && "border-primary",
                  roadmap.status === 'Completed' && "bg-night-low-emphasis",
                  roadmap.status === 'Completed' && currentSlide === index && "bg-primary",
                )}>
                  <i className={clsx("text-sm text-day-high-emphasis", {
                    "icon-check": roadmap.status === 'Completed',
                    "mx-auto h-2 w-2 rounded-full bg-night-low-emphasis": roadmap.status === 'In Progress',
                    "bg-primary": roadmap.status === 'In Progress' && currentSlide === index,
                  })}></i>
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="container mt-12 lg:mt-20">
        <Slider
          infinite={false}
          centerMode
          pauseOnHover={false}
          slidesToShow={1}
          centerPadding='33.33%'
          className='roadmap-slider max-md:!hidden'
          afterChange={(index) => setCurrentSlide(index)}
          ref={ref}
          draggable={false}
          nextArrow={<Arrow direction="right" />}
          prevArrow={<Arrow direction="left" />}
          initialSlide={DEFAULT_SLIDE + 1}
        >
          {roadmap.map((roadmap, index) => (
            <RoadmapItem
              key={index}
              className="desktop"
              items={roadmap.items}
              status={roadmap.status}
            />
          ))}
        </Slider>

        <Slider
          infinite={false}
          pauseOnHover={false}
          slidesToShow={1}
          className='roadmap-slider '
          afterChange={(index) => setCurrentSlide(index)}
          arrows={false}
          ref={refMobile}
          initialSlide={DEFAULT_SLIDE + 1}
        >
          {roadmap.map((roadmap, index) => (
            <RoadmapItem
              key={index}
              className="md:!hidden"
              items={roadmap.items}
              status={roadmap.status}
            />
          ))}
        </Slider>
      </div>
    </section>
  )
}
