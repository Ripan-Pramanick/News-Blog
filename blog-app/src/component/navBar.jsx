import React from 'react'
import FirstNav from './navSec/navFirst.jsx'
import SecondNav from './navSec/navSecond.jsx'
import ThirdNav from './navSec/navThird.jsx'

const NavBar = () => {
  return (
    <>
    <header className=' text-white '>
    <FirstNav/>
    <SecondNav/>
    <ThirdNav/>
    </header>
    </>
  )
}

export default NavBar