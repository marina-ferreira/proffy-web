import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import api from 'services/api'

import PageHeader from 'components/PageHeader'
import Input from 'components/Input'
import Textarea from 'components/Textarea'
import Select from 'components/Select'

import warningIcon from 'assets/images/icons/warning.svg'
import { Container, Main, Legend, Footer, Button, ScheduleItem } from './styles'

const TeacherForm = () => {
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')

  const [subject, setSubject] = useState('')
  const [cost, setCost] = useState('')

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: '', from: '', to: '' }
  ])

  const history = useHistory()

  const addScheduleItem = () => {
    setScheduleItems([...scheduleItems, { week_day: '', from: '', to: '' }])
  }

  const setScheduleItemValue = (index, field, value) => {
    const newItems = scheduleItems.map(item => ({ ...item, [field]: value }))
    setScheduleItems([...newItems])
  }

  const handleSubmit = e => {
    e.preventDefault()

    const newClass = {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }

    api.post('/classes', newClass)
      .then(() => {
        alert('Class was successfuly registered!')
        history.push('/')
      })
      .catch(() => alert('Class could not be registered.'))
  }

  return (
    <Container>
      <PageHeader
        title="It's amazing your will to share knowledge"
        description="The first step is to fill the register form"
      />

      <Main>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <Legend>Your info</Legend>

            <Input
              type="text"
              name="name"
              label="Full Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Input
              type="text"
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={e => setAvatar(e.target.value)}
            />
            <Input
              type="text"
              name="whatsapp"
              label="Whatsapp"
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
            />

            <Textarea
              name="bio"
              label="Bio"
              value={bio}
              onChange={e => setBio(e.target.value)}
              />
          </fieldset>

          <fieldset>
            <Legend>About the class</Legend>

            <Select
              name="subject"
              label="Subject"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              options={[
                { value: 'arts', label: 'Arts' },
                { value: 'biology', label: 'Biology' },
                { value: 'sciences', label: 'Sciences' },
                { value: 'history', label: 'History' },
                { value: 'chemistry', label: 'Chemistry' },
                { value: 'portuguese', label: 'Portuguese' }
              ]}
            />

            <Input
              type="text"
              name="cost"
              label="Hour rate"
              value={cost}
              onChange={e => setCost(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <Legend>
              Available schedules
              <button type="button" onClick={addScheduleItem}>
                + New Appointment
              </button>
            </Legend>

            {scheduleItems.map((item, index) => (
              <ScheduleItem key={index}>
                <Select
                  name="week_day"
                  label="Week Day"
                  onChange={e => setScheduleItemValue(index, 'week_day', e.target.value )}
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

                <Input
                  type="time"
                  name="from"
                  label="From"
                  onChange={e => setScheduleItemValue(index, 'from', e.target.value )}
                />
                <Input
                  type="time"
                  name="to"
                  label="To"
                  onChange={e => setScheduleItemValue(index, 'to', e.target.value )}
                />
              </ScheduleItem>
            ))}
          </fieldset>

          <Footer>
            <p>
              <img src={warningIcon} alt="Warning" />
              Warning! <br/>
              Fill in all inputs
            </p>

            <Button type="submit">Salvar cadastro</Button>
          </Footer>
        </form>
      </Main>
    </Container>
  )
}

export default TeacherForm
