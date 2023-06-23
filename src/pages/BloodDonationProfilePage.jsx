import React from 'react'
import HomeHeader from '../components/Home/HomeHeader'
import BloodDonationProfile from '../components/Home/BloodDonationProfile'
import HomeFooter from '../components/Home/HomeFooter'

function BloodDonationProfilePage() {
  return (
    <div>
      <HomeHeader />
        <BloodDonationProfile />
      <HomeFooter />
    </div>
  )
}

export default BloodDonationProfilePage
