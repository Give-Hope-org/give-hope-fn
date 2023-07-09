import React from 'react'
import HomeHeader from '../components/Home/HomeHeader'
import Hero from '../components/Home/HomeHero'
import CharitySection from '../components/Home/components/CharitySection'
import Location from '../components/Home/components/Location'
import CauseSection from '../components/Home/components/CauseSection'
import HomeFooter from '../components/Home/HomeFooter'
import AboutUs from '../components/Home/AboutUs'
import ChatBox from '../components/Home/components/ChatBox';
import TestimonialsSection from '../components/Home/TestimonialsSection';

function HomePage() {
  const messages = [
    { text: 'Hello!', timestamp: '9:00 AM' },
    { text: 'How are you?', timestamp: '9:05 AM' },
    { text: 'I am good. Thanks!', timestamp: '9:10 AM' },
  ];
  return (
    <div>
        <HomeHeader />
        <Hero />
        <CharitySection />
        <CauseSection />
        <AboutUs />
        <ChatBox messages={messages} />
        <Location />
        <TestimonialsSection />
        <HomeFooter />
    </div>
  )
}

export default HomePage
