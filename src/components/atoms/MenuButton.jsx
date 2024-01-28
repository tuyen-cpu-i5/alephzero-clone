import clsx from 'clsx'
import React from 'react'

export default function MenuButton({ onClick, open }) {

  return (
    <button className="lg:hidden relative w-8 -mr-2" onClick={onClick}>
      <svg viewBox="0 0 45 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="1" className={clsx('transition-transform duration-400 origin-top-left', open && 'rotate-45')}
          y1="1" x2="44" y2="1" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="1" className={clsx('transition-transform duration-400', open ? 'opacity-0' : 'opacity-100')}
          y1="16" x2="44" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="1" className={clsx('transition-transform duration-400 origin-bottom-left', open && '-rotate-45')}
          y1="31" x2="44" y2="31" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>

    </button>

  )
}
