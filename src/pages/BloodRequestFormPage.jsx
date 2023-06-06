import React from 'react'
import HomeHeader from '../components/Home/HomeHeader'
import BloodRequestForm from '../components/Home/components/BloodRequestForm'
import HomeFooter from '../components/Home/HomeFooter'

function BloodRequestFormPage() {
  return (
    <div>
      <HomeHeader />
        <BloodRequestForm />
      <HomeFooter />
    </div>
  )
}

export default BloodRequestFormPage;
