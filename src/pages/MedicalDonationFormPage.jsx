import React from 'react'
import HomeHeader from '../components/Home/HomeHeader'
import MedicalDonationForm from '../components/Home/components/MedicalDonationForm'
import HomeFooter from '../components/Home/HomeFooter'
function MedicalDonationFormPage() {
  return (
    <div>
      <HomeHeader />
        <MedicalDonationForm />
      <HomeFooter />
    </div>
  )
}

export default MedicalDonationFormPage
