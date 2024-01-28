import Image from 'next/image'
import Footer from '@/components/molecules/Footer'
import Meta from '@/components/core/Meta'
import LinkBoxes from '@/components/molecules/home/LinkBoxes'
import FeaturePanel from '@/components/molecules/home/FeaturePanel'
import Statistics from '@/components/molecules/home/Statistics'
import Community from '@/components/molecules/home/Community'
import Web3 from '@/components/molecules/home/Web3'
import Applications from '@/components/molecules/home/EcosystemApps'
import Quotes from '@/components/molecules/home/Quotes'
import BuildScales from '@/components/molecules/home/BuildScales'
import Partners from '@/components/molecules/home/Partners'
import Hero from '@/components/molecules/home/Hero'
import Globe from '@/components/molecules/home/Globe'
import RoadmapHero from '@/components/molecules/roadmap/RoadmapHero'
import Cta from '@/components/molecules/roadmap/Cta'
import RoadmapSlider from '@/components/molecules/roadmap/RoadmapSlider'
import Analysis from "@/components/molecules/roadmap/analysis";

export default function Roadmap() {
  return (
    <>
      <Meta 
        title='Aleph Zero Roadmap - Aleph Zero: Public Blockchain with Private Smart Contracts'
        description="Aleph Zero's roadmap outlines our plans to create a decentralized, privacy-enhancing blockchain platform that offers secure smart contracts and more. Learn more about our upcoming features and milestones."
        image='https://alephzero.org/storage/a0-website-og-sub-project-roadmap-1669216419IXGOF-og.png'
      />

      <RoadmapHero />
      <RoadmapSlider />
      <Cta />
      <Analysis/>
    </>
  )
}
