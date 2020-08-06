import React from 'react'

import { Container } from './styles'

const Input = ({ label, name, ...rest }) => {
  return (
    <Container className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </Container>
  )
}

export default Input
