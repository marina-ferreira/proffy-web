import React from 'react'

import { Container } from './styles'

const Textarea = ({ label, name, ...rest }) => {
  return (
    <Container className="Textarea">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </Container>
  )
}

export default Textarea
