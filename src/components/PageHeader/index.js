import React from 'react'
import { Link } from 'react-router-dom'

import logo from 'assets/images/logo.svg'
import backIcon from 'assets/images/icons/back.svg'

import { Header } from './styles'

const PageHeader = ({ title, children }) => {
  return (
    <Header>
      <div>
        <Link to="/">
          <img src={backIcon} alt="Back" />
        </Link>
        <img src={logo} alt="Proffy" />
      </div>

      <section>
        <strong>{title}</strong>

        {children}
      </section>
    </Header>
  )
}

export default PageHeader
