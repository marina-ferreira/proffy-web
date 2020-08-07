import React from 'react'

import whatsappIcon from 'assets/images/icons/whatsapp.svg'

import { Article } from './styles'

const TeacherItem = ({ teacher }) => {
  const { subject, cost, name, avatar, whatsapp, bio } = teacher

  return (
    <Article>
      <header>
        <img src={avatar} alt={name} />

        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>

      <p>{bio}</p>

      <footer>
        <p>
          Hour rate
          <strong>R$ {cost}</strong>
        </p>

        <button type="type">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </Article>
  )
}

export default TeacherItem
