import React from 'react'
import Global from '../../../assets/Global.svg'
import "./Location.css"

function Location() {
  return (
    <div className='lacationContainer'>
       <h1 className='text-3xl font-bold text-center mb-8'>Donate Anywhere</h1>
    <p>
        GiveHope enables you to make donations from anywhere, anytime.
        Whether you're at home, in the office, or on the go, supporting our cause has never been easier.
    </p>
    <img src={Global} alt="" />
    </div>
  )
}

export default Location