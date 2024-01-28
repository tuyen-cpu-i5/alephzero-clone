import Head from 'next/head'
import React from 'react'

export default function Meta({
  title = "Aleph Zero: Enterprise-grade Public Blockchain, Private Smart Contracts",
  description = "Discover Aleph Zero, a non-profit organization dedicated to advancing the adoption and development of decentralized technologies. Learn about our mission to create a secure blockchain ecosystem and develop secure smart contracts that power the decentralized world.",
  image = "https://alephzero.org/storage/a0-website-og-generic-1669217618y61bk-og.png",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="aleph,crypto,aleph zero,blockchain" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta property="og:locale" content="en" />
      <meta name="theme-color" content="#111b24" />

      <meta property="og:type" content="article" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@alephzero" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="apple-touch-icon" sizes="57x57" href="/assets/brand-elements/favicon-day/apple-icon-57x57.png" className="light-scheme-icon" />
      <link rel="apple-touch-icon" sizes="60x60" href="/assets/brand-elements/favicon-day/apple-icon-60x60.png" className="light-scheme-icon" />
      <link rel="apple-touch-icon" sizes="72x72" href="/assets/brand-elements/favicon-day/apple-icon-72x72.png" className="light-scheme-icon" />
      <link rel="apple-touch-icon" sizes="76x76" href="/assets/brand-elements/favicon-day/apple-icon-76x76.png" className="light-scheme-icon" />
      <link rel="apple-touch-icon" sizes="114x114" href="/assets/brand-elements/favicon-day/apple-icon-114x114.png" className="light-scheme-icon" />
      <link rel="apple-touch-icon" sizes="120x120" href="/assets/brand-elements/favicon-day/apple-icon-120x120.png" className="light-scheme-icon" />
      <link rel="apple-touch-icon" sizes="144x144" href="/assets/brand-elements/favicon-day/apple-icon-144x144.png" className="light-scheme-icon" />
      <link rel="apple-touch-icon" sizes="152x152" href="/assets/brand-elements/favicon-day/apple-icon-152x152.png" className="light-scheme-icon" />
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/brand-elements/favicon-day/apple-icon-180x180.png" className="light-scheme-icon" />
      <link rel="icon" type="image/png" sizes="192x192" href="/assets/brand-elements/favicon-day/android-icon-192x192.png" className="light-scheme-icon" />
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/brand-elements/favicon-day/favicon-32x32.png" className="light-scheme-icon" />
      <link rel="icon" type="image/png" sizes="96x96" href="/assets/brand-elements/favicon-day/favicon-96x96.png" className="light-scheme-icon" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/brand-elements/favicon-day/favicon-16x16.png" className="light-scheme-icon" />
      <link rel="manifest" href="/assets/brand-elements/favicon-day/manifest.json" className="light-scheme-icon" />
      <meta name="msapplication-TileColor" content="#ffffff" className="light-scheme-icon" />
      <meta name="msapplication-TileImage" content="/assets/brand-elements/favicon-day/ms-icon-144x144.png" className="light-scheme-icon" />
      <meta name="theme-color" content="#ffffff" className="light-scheme-icon" />

      <link rel="apple-touch-icon" sizes="57x57" href="/assets/brand-elements/favicon-night/apple-icon-57x57.png" className="dark-scheme-icon" />
      <link rel="apple-touch-icon" sizes="60x60" href="/assets/brand-elements/favicon-night/apple-icon-60x60.png" className="dark-scheme-icon" />
      <link rel="apple-touch-icon" sizes="72x72" href="/assets/brand-elements/favicon-night/apple-icon-72x72.png" className="dark-scheme-icon" />
      <link rel="apple-touch-icon" sizes="76x76" href="/assets/brand-elements/favicon-night/apple-icon-76x76.png" className="dark-scheme-icon" />
      <link rel="apple-touch-icon" sizes="114x114" href="/assets/brand-elements/favicon-night/apple-icon-114x114.png" className="dark-scheme-icon" />
      <link rel="apple-touch-icon" sizes="120x120" href="/assets/brand-elements/favicon-night/apple-icon-120x120.png" className="dark-scheme-icon" />
      <link rel="apple-touch-icon" sizes="144x144" href="/assets/brand-elements/favicon-night/apple-icon-144x144.png" className="dark-scheme-icon" />
      <link rel="apple-touch-icon" sizes="152x152" href="/assets/brand-elements/favicon-night/apple-icon-152x152.png" className="dark-scheme-icon" />
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/brand-elements/favicon-night/apple-icon-180x180.png" className="dark-scheme-icon" />
      <link rel="icon" type="image/png" sizes="192x192" href="/assets/brand-elements/favicon-night/android-icon-192x192.png" className="dark-scheme-icon" />
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/brand-elements/favicon-night/favicon-32x32.png" className="dark-scheme-icon" />
      <link rel="icon" type="image/png" sizes="96x96" href="/assets/brand-elements/favicon-night/favicon-96x96.png" className="dark-scheme-icon" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/brand-elements/favicon-night/favicon-16x16.png" className="dark-scheme-icon" />
      <link rel="manifest" href="/assets/brand-elements/favicon-night/manifest.json" className="dark-scheme-icon" />
      <meta name="msapplication-TileColor" content="#ffffff" className="dark-scheme-icon" />
      <meta name="msapplication-TileImage" content="/assets/brand-elements/favicon-night/ms-icon-144x144.png" className="dark-scheme-icon" />
      <meta name="theme-color" content="#ffffff" className="dark-scheme-icon" />
    </Head>
  )
}
