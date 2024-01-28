import clsx from 'clsx'
import Link from 'next/link'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import MenuButton from '../atoms/MenuButton'

const menus = [
  {
    title: 'Explore',
    items: [
      {
        title: 'About',
        items: [
          {
            title: 'Why Aleph Zero',
            href: '#',
            icon: 'icon-azero',
          },
          {
            title: 'Roadmap',
            href: '/roadmap',
            icon: 'icon-roadmap',
          },
          {
            title: 'Utility & Economics',
            href: '#',
            icon: 'icon-tokenomics',
          },
          {
            title: 'Use cases',
            href: '#',
            icon: 'icon-use-cases',
          },
          {
            title: 'FAQ',
            href: '#',
            icon: 'icon-faq',
            external: true,
          },
          {
            title: 'Whitepapers',
            href: '#',
            icon: 'icon-document',
            external: true,
          },
          {
            title: 'Carbon Footprint',
            href: '#',
            icon: 'icon-carbon-footprint',
          },
        ],
      },
      {
        title: 'Network',
        items: [
          {
            title: 'Wallet',
            href: '#',
            icon: 'icon-wallet',
          },
          {
            title: 'Signer',
            href: '#',
            icon: 'icon-signer',
          },
          {
            title: 'Staking',
            href: '#',
            icon: 'icon-staking',
          },
          {
            title: 'Explorer',
            href: '#',
            icon: 'icon-explorer',
            external: true,
          },
          {
            title: 'Ecosystem Projects',
            href: '#',
            icon: 'icon-ecosystem',
          },
        ],
      }
    ],
  },
  {
    title: 'Build',
    items: [
      {
        title: 'Get involved',
        items: [
          {
            title: 'Community',
            href: '#',
            icon: 'icon-community',
          },
          {
            title: 'Events',
            href: '#',
            icon: 'icon-calendar',
          },
          {
            title: 'Ambassador Program',
            href: '#',
            icon: 'icon-ambassadors',
          },
          {
            title: 'Press/Brandbook',
            href: '#',
            icon: 'icon-press',
          },
          {
            title: 'The Button Game',
            href: '#',
            icon: 'icon-button-game',
          },
          {
            title: 'Bug Bounty Program',
            href: '#',
            icon: 'icon-game',
            external: true,
          },
        ],
      },
      {
        title: 'Team',
        items: [
          {
            title: 'Careers',
            href: '#',
            icon: 'icon-career',
            external: true,
          },
          {
            title: 'Core Team',
            href: '#',
            icon: 'icon-team',
          },
        ],
      },
    ],
  },
  {
    title: 'Engage',
    items: [
      {
        title: 'Get involved',
        items: [
          {
            title: 'Community',
            href: '#',
            icon: 'icon-community',
          },
          {
            title: 'Events',
            href: '#',
            icon: 'icon-calendar',
          },
          {
            title: 'Ambassador Program',
            href: '#',
            icon: 'icon-ambassadors',
          },
          {
            title: 'Press/Brandbook',
            href: '#',
            icon: 'icon-press',
          },
          {
            title: 'The Button Game',
            href: '#',
            icon: 'icon-button-game',
          },
          {
            title: 'Bug Bounty Program',
            href: '#',
            icon: 'icon-game',
            external: true,
          },
        ],
      },
      {
        title: 'Team',
        items: [
          {
            title: 'Careers',
            href: '#',
            icon: 'icon-career',
            external: true,
          },
          {
            title: 'Core Team',
            href: '#',
            icon: 'icon-team',
          },
        ],
      },
    ]
  },
  {
    title: 'Content',
    items: [
      {
        title: 'Learn more',
        items: [
          {
            title: 'Blog',
            href: '#',
            icon: 'icon-blog',
          },
          {
            title: 'Podcast',
            href: '#',
            icon: 'icon-podcasts',
          },
          {
            title: 'Videos',
            href: '#',
            icon: 'icon-play',
            external: true,
          },
        ],
      },
    ],
  },
]

export default function Header() {
  const [open, setOpen] = React.useState(false)
  const [active, setActive] = React.useState(0)
  const headerRef = React.useRef(null)
  const navRef = React.useRef(null)
  const navListRef = React.useRef([])

  React.useEffect(() => {
    if (open) {
      document.body.classList.add('has-triggered-nav', 'overflow-hidden')
    } else {
      document.body.classList.remove('has-triggered-nav', 'overflow-hidden')
    }
  }, [open])

  React.useEffect(() => {
    if (window.innerWidth > 992) return;
    const navList = navListRef.current[active]
    const nav = navRef.current
    if (navList) {
      const height = navList.offsetHeight + 50
      nav.style.marginBottom = `${height}px`
    }
  }, [active])

  useEffect(() => {
    const header = headerRef.current
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(header, {
      scrollTrigger: {
        trigger: document.querySelector('body'),
        start: 'top top',
        scrub: true,
        onUpdate: ({ direction }) => {
          if (direction === -1) {
            header.classList.add('show-nav')
          } else {
            header.classList.remove('show-nav')
          }
        },
      },
    })

    const handleScroll = () => {
      const scroll = window.scrollY;
      if (scroll > 0) {
        header.classList.add('is-sticky');
      } else {
        header.classList.remove('is-sticky');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <header className="header" ref={headerRef}>
      <Link className="block mr-4 w-[200px] relative h-auto md:mr-0 lg:basis-[200px] lg:grow-0 lg:shrink-0 xl:basis-[250px] xl:w-[250px]" href="/">
        <img src="/assets/brand-elements/logo-day.svg" alt="Aleph Zero" />
      </Link>

      <MenuButton onClick={() => setOpen(!open)} open={open} />

      <div className={clsx("header-hld", open && "translate-y-0")}>
        <nav className="header--nav flex justify-between px-4 lg:grow lg:justify-center transition-all lg:!mb-0" ref={navRef}>
          {menus.map((menu, index) => (
            <div className={clsx("header--nav-box block p-0 lg:px-6 z-[1] group lg:relative", active === index && "is-active")} key={index}>
              <a href="#" className="header--nav-box__link font-medium font-headline text-h5 py-[15px] text-white-30 transition-all duration-400 block relative z-[1] lg:py-[21px] lg:text-text-night-100 lg:text-center group-hover:after:lg:visible group-hover:after:lg:opacity-100" onClick={(e) => { e.preventDefault(); setActive(index) }}>
                <span className="title">{menu.title}</span>
              </a>

              <div className="header--nav-box__list block absolute top-[118px] left-0 w-full opacity-0 invisible transition-all duration-400 bg-night-200 border-t border-t-night-200 lg:-translate-x-1/2 lg:rounded-lg lg:top-full lg:left-1/2 lg:overflow-hidden lg:w-auto lg:flex group-hover:lg:visible group-hover:lg:opacity-100" ref={el => navListRef.current[index] = el}>
                {menu.items.map((col, index) => (
                  <div className={clsx("block p-6 lg:min-w-[245px]", index === 1 && "bg-night-250")} key={index}>
                    <h6 className="font-headline tracking-[.27em] uppercase block px-2 text-day-300 text-overline">{col.title}</h6>

                    <div className="menu-links mt-4 lg:flex lg:-mx-4">
                      <ul className="grow px-4">
                        {col.items.map((item, index) => (
                          <li key={index} className='px-1'>
                            {item.href ? (
                              <a href={item.href} className="menu-link w-full py-[11px] text-white text-left text-button-s inline-flex items-center lg:whitespace-nowrap" target="_self" title={item.title}>
                                <i className={clsx("icon text-primary-darker mr-2", item.icon)}></i>
                                <span>{item.title}</span>
                                {item.external && <i className="icon icon-external-link-arrow text-primary-darker ml-2"></i>}
                              </a>
                            ) : (
                              <p>{item.title}</p>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="block pt-6 px-6 text-center lg:p-0 lg:flex lg:justify-end lg:relative lg:bottom-0 lg:w-[200px] lg:basis-[200px] xl:w-[250px] xl:basis-[250px]">
          <a href="#" className="font-headline font-medium h-9 px-4 text-button-s inline-flex items-center align-middle rounded-[3rem] bg-buttons-primary text-buttons-primary-color hover:bg-buttons-primary-hover hover:text-buttons-primary-hover-color md:hover:shadow-[0 0 12px rgba(0,234,199,.6)] whitespace-nowrap" title="Explore the ecosystem">
            <i className="icon-ecosystem text-xl mr-2"></i>
            <span>Explore the ecosystem</span>
          </a>
        </div>
      </div>
    </header>
  )
}
