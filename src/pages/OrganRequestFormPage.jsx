import React from 'react'
import HomeHeader from '../components/Home/HomeHeader'
import OrganRequestForm from '../components/Home/components/OrganRequestForm'
import HomeFooter from '../components/Home/HomeFooter'

function OrganRequestFormPage() {
  return (
    <div>
      <HomeHeader />
        <OrganRequestForm />
      <HomeFooter />
    </div>
  )
}

export default OrganRequestFormPage;
