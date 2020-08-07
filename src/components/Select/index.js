import React from 'react'

import { Container } from './styles'

const Select = ({ label, name, options, ...rest }) => {
  return (
    <Container className="Select">
      <label htmlFor={name}>{label}</label>

      <select id={name} {...rest}>
        <option value="" disabled selected hidden>
          Selecione uma opção
        </option>

        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  )
}

export default Select
