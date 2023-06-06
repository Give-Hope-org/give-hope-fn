import React from 'react'
import HomeHeader from '../components/Home/HomeHeader'
import EquipmentRequestForm from '../components/Home/components/EquipmentRequestForm'
import HomeFooter from '../components/Home/HomeFooter'

function EquipmentRequestFormPage() {
  return (
    <div>
      <HomeHeader />
        <EquipmentRequestForm />
      <HomeFooter />
    </div>
  )
}

export default EquipmentRequestFormPage;
