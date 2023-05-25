import React from 'react'
import HomeHeader from '../components/Home/HomeHeader'
import DonationForm from '../components/Home/components/DonationForm'
import HomeFooter from '../components/Home/HomeFooter'
function DonationFormPage() {
  return (
    <div>
      <HomeHeader />
        <DonationForm />
      <HomeFooter />
    </div>
  )
}

export default DonationFormPage
