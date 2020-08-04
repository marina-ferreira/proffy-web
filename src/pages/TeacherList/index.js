import React from 'react'
import { Link } from 'react-router-dom'

import logo from 'assets/images/logo.svg'
import backIcon from 'assets/images/icons/back.svg'

import {
  Container,
  Header
} from './styles'

const TeacherList = () => {
  return (
    <Container>
      <Header>
        <div>
          <Link to="/">
            <img src={backIcon} alt="Back" />
          </Link>
          <img src={logo} alt="Proffy" />
        </div>

        <p>
          <strong>These are the available proffys</strong>
        </p>
      </Header>
    </Container>
  )
}

export default TeacherList
