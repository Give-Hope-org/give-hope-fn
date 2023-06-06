import React from 'react'
import HomeHeader from '../components/Home/HomeHeader'
import BloodDonationForm from '../components/Home/components/BloodDonationForm'
import HomeFooter from '../components/Home/HomeFooter'

function BloodDonationFormPage() {
  return (
    <div>
      <HomeHeader />
        <BloodDonationForm />
      <HomeFooter />
    </div>
  )
}

export default BloodDonationFormPage
