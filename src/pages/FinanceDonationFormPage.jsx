import React from 'react'
import HomeHeader from '../components/Home/HomeHeader'
import FinanceDonationForm from '../components/Home/components/FinanceDonationForm'
import HomeFooter from '../components/Home/HomeFooter'

function FinanceDonationFormPage() {
  return (
    <div>
      <HomeHeader />
        <FinanceDonationForm />
      <HomeFooter />
    </div>
  )
}

export default FinanceDonationFormPage
