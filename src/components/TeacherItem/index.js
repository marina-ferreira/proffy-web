import React from 'react'

import api from 'services/api'

import whatsappIcon from 'assets/images/icons/whatsapp.svg'
import { Article, Header, Footer } from './styles'

const TeacherItem = ({ teacher }) => {
  const { subject, cost, name, avatar, whatsapp, bio } = teacher

  const handleCreateConnection = () => {
    api.post('/connections', { user_id: teacher.id })
  }

  return (
    <Article>
      <Header>
        <img src={avatar} alt={name} />

        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </Header>

      <p>{bio}</p>

      <Footer>
        <p>
          Hour rate
          <strong>R$ {cost}</strong>
        </p>

        <a
          href={`https://api.WhatsApp.com/send?phone=${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCreateConnection}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </Footer>
    </Article>
  )
}

export default TeacherItem
