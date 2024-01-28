import Meta from '@/components/core/Meta'
import BuildScales from '@/components/molecules/home/BuildScales'
import Community from '@/components/molecules/home/Community'
import EcosystemApps from '@/components/molecules/home/EcosystemApps'
import FeaturePanel from '@/components/molecules/home/FeaturePanel'
import Globe from '@/components/molecules/home/Globe'
import Hero from '@/components/molecules/home/Hero'
import LinkBoxes from '@/components/molecules/home/LinkBoxes'
import Partners from '@/components/molecules/home/Partners'
import Quotes from '@/components/molecules/home/Quotes'
import Statistics from '@/components/molecules/home/Statistics'
import Web3 from '@/components/molecules/home/Web3'

export default function Home() {
  return (
    <>
      <Meta />
      <Hero />
      <Partners />
      <BuildScales />
      <Statistics />
      <Globe />

      <Quotes />

      <FeaturePanel
        title={<>We&apos;re building a new take on <strong>blockchain infrastructure</strong></>}
        url="#"
        image="/assets/images/a0-corefeatures-00-1665399887Ogca2.jpg"
        background="/assets/images/featured-panel-features.svg"
        linkText="Why Aleph Zero"
      />

      <EcosystemApps />

      <FeaturePanel
        alignLeft
        title={<>Curious about <strong>upcoming network upgrades?</strong></>}
        url="/roadmap"
        image="/assets/images/a0-roadmap-00-1665399902Ys6tS.jpg"
        background="/assets/images/featured-panel-roadmap.svg"
        linkText="Go to the roadmap"
      />

      <Web3 />

      <FeaturePanel
        title={<>Aleph Zero is designed to <strong>care for the environment</strong></>}
        url="#"
        image="/assets/images/a0-carbonpositive-sml-16698045328B0qS.jpg"
        background="/assets/images/featured-panel-carbon.svg"
        linkText="Our carbon footprint"
      />

      <Community />

      <LinkBoxes />
    </>
  )
}
