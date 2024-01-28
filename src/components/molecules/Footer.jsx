import clsx from 'clsx'
import React from 'react'
import NewsLetterForm from './NewsLetterForm'
import Image from 'next/image'

const socials = [
  {
    href: "#",
    icon: "icon-discord"
  },
  {
    href: "#",
    icon: "icon-telegram"
  },
  {
    href: "#",
    icon: "icon-x"
  },
  {
    href: "#",
    icon: "icon-linkedin"
  },
  {
    href: "#",
    icon: "icon-reddit"
  },
  {
    href: "#",
    icon: "icon-youtube"
  },
  {
    href: "#",
    icon: "icon-instagram"
  }
]

const menus = [
  {
    heading: "Explore",
    title: "About",
    links: [
      {
        href: "#",
        title: "Why Aleph Zero"
      },
      {
        href: "/roadmap",
        title: "Roadmap"
      },
      {
        href: "#",
        title: "Utility & Economics"
      },
      {
        href: "#",
        title: "Use cases"
      },
      {
        href: "#",
        title: "FAQ",
        external: true
      },
      {
        href: "#",
        title: "Whitepapers",
        external: true
      },
      {
        href: "#",
        title: "Carbon Footprint"
      }
    ]
  },
  {
    heading: "Build",
    title: "Dev space",
    links: [
      {
        href: "#",
        title: "Dev Portal"
      },
      {
        href: "#",
        title: "Code Repository",
        external: true
      },
      {
        href: "#",
        title: "Documentation",
        external: true
      },
      {
        href: "#",
        title: "Testnet",
        external: true
      },
      {
        href: "#",
        title: "CTRL+Hack+ZK",
        external: true
      }
    ]
  },
  {
    heading: "Engage",
    title: "Get involved",
    links: [
      {
        href: "#",
        title: "Community"
      },
      {
        href: "#",
        title: "Events"
      },
      {
        href: "#",
        title: "Ambassador Program"
      },
      {
        href: "#",
        title: "Press/Brandbook"
      },
      {
        href: "#",
        title: "The Button Game"
      },
      {
        href: "#",
        title: "Bug Bounty Program",
        external: true
      }
    ]
  }
]

const addresses = [
  {
    name: "Aleph Zero Foundation",
    address: "Bergliweg 15, 6300 Zug, Switzerland",
    description: "The Aleph Zero Foundation is responsible for overseeing the development of Aleph Zero protocol. The Foundation is also the issuer of the AZERO coin.",
    contact: [
      {
        icon: "icon-mail",
        url: "mailto:hello@alephzero.org",
        text: "hello@alephzero.org"
      }
    ],
    logo: "/assets/images/a0-foundation-1666083851hUAD6.svg"
  },
  {
    name: "Cardinal Cryptography sp. z o.o.",
    address: "Zamoyskiego 79A, 30-519 Krakow, Poland",
    description: "Aleph Zero core developer responsible for research, development, cryptography, native tooling, and incubating use cases deploying on top of the network.",
    contact: [
      {
        icon: "icon-global",
        url: "https://cardinal.co/",
        text: "www.cardinal.co"
      },
      {
        icon: "icon-mail",
        url: "mailto:hello@cardinals.cc",
        text: "hello@cardinals.cc"
      }
    ],
    logo: "/assets/images/cardinals-1666083851PJcv9.svg"
  }
]

export default function Footer() {
  return (
    <footer className='container'>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-4 lg:col-span-5 gap-x-6">
          <NewsLetterForm />
          <ul className="flex mt-6">
            {socials.map((social, index) => (
              <li key={index} className="p-1">
                <a href={social.href} target="_blank" className="text-text-night-100 w-9 h-9 flex-center hover:text-primary-lighter">
                  <i className={clsx(social.icon, "text-2xl")}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-7 grid md:grid-cols-3 gap-y-12 lg:px-3 pt-14 lg:pt-0">
          {menus.map((menu, index) => (
            <nav className="lg:px-4" key={index}>
              <h5 className="font-bold text-white">{menu.heading}</h5>

              <div className="mt-8">
                <h6 className="text-overline text-day-300 tracking-[0.27em] font-light uppercase font-headline">
                  {menu.title}
                </h6>

                <ul className="mt-1.5">
                  {menu.links.map((link, index) => (
                    <li key={index} className='py-1.5'>
                      <a href={link.href} className="transition-colors text-white hover:text-primary-darker text-button-s inline-flex font-medium tracking-[0.04em] font-headline py-0.5" title="Whitepapers" target={link.external ? "_blank" : ""}>
                        <span>{link.title}</span>
                        {link.external && (
                          <i className="icon icon-external-link-arrow text-primary-darker text-base ml-2"></i>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          ))}
        </div>
        {/* <div className="col-span-12 pt-12">
          <div className="grid md:grid-cols-2 gap-6">
            {addresses.map((address, index) => (
              <div key={index} className="text-body-s text-night-medium-emphasis px-6 py-4 border border-night-300">
                <div className="relative flex flex-col lg:flex-row lg:pb-4 items-start lg:items-center">
                  <Image src={address.logo} alt={address.name} height={48} width={100} className='lg:ml-4 lg:mr-6 h-12 lg:h-auto lg:w-28' />
                  <hr className='mt-2 mb-6 lg:m-0 lg:absolute bottom-0 w-full' />
                  <div>
                    <h6 className='font-headline text-white text-h6'>{address.name}</h6>
                    <p className="mt-2">
                      {address.description}
                    </p>
                  </div>
                </div>
                <div className="block lg:flex lg:justify-between mt-6">
                  <div className="lg:px-3">
                    <p className="mb-3">
                      <i className="icon-location mr-2"></i>
                      {address.address}
                    </p>
                  </div>
                  <div className="lg:px-3">
                    {address.contact.map((contact, index) => (
                      <a href={contact.url} className="flex items-center mb-3 hover:text-primary-darker" key={index}>
                        <i className={clsx(contact.icon, "mr-2")}></i>
                        {contact.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        <div className="col-span-12 pt-8">
          <div className="lg:flex lg:justify-between py-6 border-t border-t-night-300">
            <p className="text-h6 font-medium font-headline text-center text-night-medium-emphasis">
              Aleph Zero Foundation © 2018-2024, design and development by Cardinal
            </p>

            {/* <nav className="mt-3">
              <ul className="flex justify-center gap-x-6">
                <li>
                  <a href="#" className="text-day-0 font-medium text-button-s hover:text-primary-darker font-headline" target="_self" title="Privacy Policy">
                    <span>Privacy Policy</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-day-0 font-medium text-button-s hover:text-primary-darker font-headline" target="_self" title="Cookies Policy">
                    <span>Cookies Policy</span>
                  </a>
                </li>
              </ul>
            </nav> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
