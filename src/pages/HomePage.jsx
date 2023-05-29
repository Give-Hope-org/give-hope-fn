import React from 'react'
import HomeHeader from '../components/Home/HomeHeader'
import Hero from '../components/Home/HomeHero'
import CharitySection from '../components/Home/components/CharitySection'
import Location from '../components/Home/components/location'
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
        <Location />
        <HomeFooter />
    </div>
  )
}

export default HomePage
