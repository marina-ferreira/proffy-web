import React from 'react'

import { Container } from './styles'

const Input = ({ label, name, ...rest }) => {
  return (
    <Container className="Input">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} name={name} {...rest} />
    </Container>
  )
}

export default Input
