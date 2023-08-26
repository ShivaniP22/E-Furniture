import React from 'react'
import Hero from '../Hero/Hero'
import  './Home.css'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div className="homePage">
      <Hero/>
      <Footer/>
    </div>
  )
}

export { Home }