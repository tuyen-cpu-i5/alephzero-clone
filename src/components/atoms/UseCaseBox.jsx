import clsx from 'clsx'
import React from 'react'

export default function UseCaseBox({ image, title, className }) {
  return (
    <div className="px-5 lg:px-10">
      <div className={clsx("use-case-box", className)}>
        <img src={image} alt={title} />
        <h5>{title}</h5>
      </div>
    </div>
  )
}
