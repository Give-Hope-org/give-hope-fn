import React from 'react'
import HomeHeader from '../components/Home/HomeHeader'
import EquipmentDonationForm from '../components/Home/components/EquipmentDonationForm'
import HomeFooter from '../components/Home/HomeFooter'

function EquipmentDonationFormPage() {
  return (
    <div>
      <HomeHeader />
        <EquipmentDonationForm />
      <HomeFooter />
    </div>
  )
}

export default EquipmentDonationFormPage
