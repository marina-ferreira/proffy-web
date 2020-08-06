import React from 'react'

import PageHeader from 'components/PageHeader'
import Input from 'components/Input'

import { Container, Main } from './styles'

const TeacherForm = () => {
  return (
    <Container>
      <PageHeader
        title="It's amazing your will to share knowledge"
        description="The first step is to fill the register form"
      />

      <Main>
        <form>
          <fieldset>
            <legend>Your info</legend>

            <Input text="text" id="name" label="Full Name" />
            <Input text="text" id="avatar" label="Avatar" />
            <Input text="text" id="whatsapp" label="Whatsapp" />
          </fieldset>
        </form>
      </Main>
    </Container>
  )
}

export default TeacherForm
