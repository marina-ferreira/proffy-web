import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import api from 'services/api'

import logo from 'assets/images/logo.svg'
import landingImg from 'assets/images/landing.svg'
import studyIcon from 'assets/images/icons/study.svg'
import teachIcon from 'assets/images/icons/give-classes.svg'
import purpleHeartIcon from 'assets/images/icons/purple-heart.svg'

import {
  Container,
  LogoContainer,
  HeroImage,
  ButtonsContainer,
  TotalConnections
} from './styles'

const Landing = () => {
  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    const fetchConnections = async () => {
      const connections = await api.get('/connections')
      setTotalConnections(connections.data.total)
    }

    fetchConnections()
  }, [])

  return (
    <Container>
      <div>
        <LogoContainer>
          <img src={logo} alt="Proffy" />

          <h2>Your online study platform</h2>
        </LogoContainer>

        <HeroImage src={landingImg} alt="Your online study platform" />

        <ButtonsContainer>
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Study"/>
            Study
          </Link>

          <Link to="/teach" className="teach">
            <img src={teachIcon} alt="Teach"/>
            Teach
          </Link>
        </ButtonsContainer>

        <TotalConnections>
          A total of {totalConnections} connections achieved
          <img src={purpleHeartIcon} alt="Purple heart"/>
        </TotalConnections>
      </div>
    </Container>
  )
}

export default Landing
