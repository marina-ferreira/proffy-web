import React from 'react'

import PageHeader from 'components/PageHeader'
import Input from 'components/Input'
import Textarea from 'components/Textarea'
import Select from 'components/Select'

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

            <Input type="text" name="name" label="Full Name" />
            <Input type="text" name="avatar" label="Avatar" />
            <Input type="text" name="whatsapp" label="Whatsapp" />
            <Textarea name="bio" label="Bio" />
          </fieldset>

          <fieldset>
            <legend>About the class</legend>

            <Select
              name="subject"
              label="Subject"
              options={[
                { value: 'arts', label: 'Arts' },
                { value: 'biology', label: 'Biology' },
                { value: 'sciences', label: 'Sciences' },
                { value: 'history', label: 'History' },
                { value: 'chemistry', label: 'Chemistry' },
                { value: 'portuguese', label: 'Portuguese' }
              ]}
            />
            <Input type="text" name="cost" label="Hour rate" />
          </fieldset>

          <fieldset>
            <legend>
              Available schedules
              <button>+ New Appointment</button>
            </legend>

            <section>
              <Select
                name="week_day"
                label="Week Day"
                options={[
                  { value: '0', label: 'Sunday' },
                  { value: '1', label: 'Monday' },
                  { value: '2', label: 'Tuesday' },
                  { value: '3', label: 'Wednesday' },
                  { value: '4', label: 'Thursday' },
                  { value: '5', label: 'Friday' },
                  { value: '6', label: 'Saturday' }
                ]}
              />

              <Input type="time" name="from" label="From" />
              <Input type="time" name="to" label="To" />
            </section>
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
