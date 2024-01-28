import React from 'react'
import Feature from '../../core/Feature'

export default function Community() {
  return (
    <Feature
      id="community"
      title={<><strong>Community</strong> of over 100,000 people</>}
      description="Join us and get involved in a number of ongoing educational activities run not only by the core team but also by the community directly."
      cta={{ text: 'Get involved', link: '#' }}
      alignRight
      center
    >
      <div className='md:pr-12'>
        <img src="/assets/images/community.png" alt="Community" className="w-full max-md:mt-6" />
      </div>
    </Feature>
  )
}
