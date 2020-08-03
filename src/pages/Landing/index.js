import React from 'react'

import logo from 'assets/images/logo.svg'
import landingImg from 'assets/images/landing.svg'
import studyIcon from 'assets/images/icons/study.svg'
import teachIcon from 'assets/images/icons/give-classes.svg'
import purpleHeartIcon from 'assets/images/icons/purple-heart.svg'

const Landing = () => {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logo} alt="Proffy" />

          <h2>Your online study platform</h2>
        </div>

        <img src={landingImg} alt="Your online study platform" className="hero-image" />

        <div className="buttons-container">
          <a href="" className="study">
            <img src={studyIcon} alt="Study"/>
            Study
          </a>

          <a href="" className="">
            <img src={teachIcon} alt="Teach"/>
            Teach
          </a>
        </div>

        <span className="total-connections">
          A total of 200 connections achieved
          <img src={purpleHeartIcon} alt="Purple heart"/>
        </span>
      </div>
    </div>
  )
}

export default Landing
