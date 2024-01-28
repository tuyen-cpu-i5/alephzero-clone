import React from 'react'
import LinkBox from '../../atoms/LinkBox'

const linkBoxes = [
  {
    title: 'wallet',
    description: 'Set up your Aleph Zero wallet to be able to hold, transfer, or stake your AZERO coins.',
    url: '#',
    image: '/assets/images/links/wallet-1663434756rhatl.svg',
    external: true
  },
  {
    title: 'explorer',
    description: 'Familiarize yourself with the Aleph Zero explorer launched in collaboration with Subscan.',
    url: '#',
    image: '/assets/images/links/explorer-1663434756QSZce.svg',
    external: true
  },
  {
    title: 'utility',
    description: 'Learn more about the utility and economics behind AZERO - Aleph Zero&rsquo;s native coin.',
    url: '#',
    image: '/assets/images/links/utility-166343475684Hbk.svg',
  },
]

export default function LinkBoxes() {
  return (
    <div className="py-44 relative md:mt-20 md:mt-32 cta-gradient z-10" data-scroll-id="link-boxes">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-start-2 lg:col-span-10 grid md:grid-cols-2 gap-x-6 gap-y-2 lg:grid-cols-3">
            {linkBoxes.map((linkBox, index) => (
              <LinkBox key={index} data={linkBox} />
            ))}
          </div>
        </div>
      </div>

      <div className="cta-lines"></div>
      <div className="cta-decorations"></div>
    </div>
  )
}
