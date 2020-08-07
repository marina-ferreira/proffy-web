import React from 'react'

import PageHeader from 'components/PageHeader'
import Input from 'components/Input'
import Textarea from 'components/Textarea'

import warningIcon from 'assets/images/icons/warning.svg'
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

            <Input type="text" id="name" label="Full Name" />
            <Input type="text" id="avatar" label="Avatar" />
            <Input type="text" id="whatsapp" label="Whatsapp" />
            <Textarea id="bio" label="Bio" />
          </fieldset>

          <fieldset>
            <legend>About the class</legend>

            <Input type="text" id="subject" label="Subject" />
            <Input type="text" id="cost" label="Hour rate" />
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Warning" />
              Warning! <br/>
              Fill in all inputs
            </p>

            <button type="button">Salvar cadastro</button>
          </footer>
        </form>
      </Main>
    </Container>
  )
}

export default TeacherForm
