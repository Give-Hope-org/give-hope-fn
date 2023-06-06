import React from 'react'
import HomeHeader from '../components/Home/HomeHeader'
import OrganDonationForm from '../components/Home/components/OrganDonationForm'
import HomeFooter from '../components/Home/HomeFooter'

function OrganDonationFormPage() {
  return (
    <div>
      <HomeHeader />
        <OrganDonationForm />
      <HomeFooter />
    </div>
  )
}

export default OrganDonationFormPage
