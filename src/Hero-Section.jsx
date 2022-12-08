import React from 'react'
import './Hero.css'
import { BsFillPersonFill, BsCartFill } from 'react-icons/bs'
import Trending from './Trending'

function HeroSection() {
  return (
    <div className='App'>
      <nav className='Nav'>
        <ul>
          <li>Shop</li>
          <li>Home</li>
          <li>About</li>
          <img src={"src/assets/ready-imgs/logo.png"} />
          <li>Contact</li>
          <li> <BsFillPersonFill/> Your Account</li>
          <li> <BsCartFill/> </li>
        </ul>
      </nav>

      <div className="hero-sec">
        <img src={"src/assets/ready-imgs/hero-image.png"} alt="" />
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="content-section">
          <h1>The perfect jeans for your unique physique</h1>
          <p>Find the right fit for you using our advanced search and an array of product images on different body types.</p>
          <button>Shop</button>
        </div>
      </div>
      
      <Trending />

    </div>
  )
}

export default HeroSection