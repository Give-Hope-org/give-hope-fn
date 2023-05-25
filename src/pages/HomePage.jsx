import React from 'react'
import HomeHeader from '../components/Home/HomeHeader'
import Hero from '../components/Home/HomeHero'
import CharitySection from '../components/Home/components/CharitySection'
import CauseSection from '../components/Home/components/CauseSection'
import HomeFooter from '../components/Home/HomeFooter'
import AboutUs from '../components/Home/AboutUs'
function HomePage() {
  return (
    <div>
        <HomeHeader />
        <Hero />
        <CharitySection />
        <CauseSection />
        <AboutUs />
        <HomeFooter />
    </div>
  )
}

export default HomePage
