import React from 'react'
import HomeHeader from '../components/Home/HomeHeader'
import FinanceRequestForm from '../components/Home/components/FinanceRequestForm'
import HomeFooter from '../components/Home/HomeFooter'

function FinanceRequestFormPage() {
  return (
    <div>
      <HomeHeader />
        <FinanceRequestForm />
      <HomeFooter />
    </div>
  )
}

export default FinanceRequestFormPage;
