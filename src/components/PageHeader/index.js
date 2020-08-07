import React from 'react'
import { Link } from 'react-router-dom'

import logo from 'assets/images/logo.svg'
import backIcon from 'assets/images/icons/back.svg'

import { Header, Topbar, Content } from './styles'

const PageHeader = ({ title, description, children }) => {
  return (
    <Header>
      <Topbar>
        <Link to="/">
          <img src={backIcon} alt="Back" />
        </Link>
        <img src={logo} alt="Proffy" />
      </Topbar>

      <Content>
        <strong>{title}</strong>
        {description && <p>{description}</p>}
        {children}
      </Content>
    </Header>
  )
}

export default PageHeader
