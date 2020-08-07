import React, { useState } from 'react'

import api from 'services/api'

import PageHeader from 'components/PageHeader'
import TeacherItem from 'components/TeacherItem'
import Input from 'components/Input'
import Select from 'components/Select'

import { Container, Form, Main } from './styles'

const TeacherList = () => {
  const [teachers, setTeachers] = useState([])
  const [formData, setFormData] = useState({
    subject: '',
    week_day: '',
    time: ''
  })

  const handleChange = e => {
    e.preventDefault()

    const { name, value } = e.target
    const newData = { ...formData, [name]: value }

    setFormData(newData)
    if (newData.subject && newData.week_day && newData.time) handleSearch(newData)
  }

  const handleSearch = params => {
    api.get('/classes', { params })
      .then(response => setTeachers(response.data))
      .catch(error => console.log(error))
  }

  return (
    <Container>
      <PageHeader title="These are the available proffys">
        <Form onChange={handleChange}>
          <Select
            name="subject"
            label="Subject"
            defaultValue={formData.subject}
            options={[
              { value: 'Arts', label: 'Arts' },
              { value: 'Biology', label: 'Biology' },
              { value: 'Sciences', label: 'Sciences' },
              { value: 'History', label: 'History' },
              { value: 'Chemistry', label: 'Chemistry' },
              { value: 'Portuguese', label: 'Portuguese' }
            ]}
          />
          <Select
            name="week_day"
            label="Week Day"
            defaultValue={formData.week_day}
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
            name="time"
            label="Time"
            defaultValue={formData.time}
          />
        </Form>
      </PageHeader>

      <Main>
        {teachers.map(teacher => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </Main>
    </Container>
  )
}

export default TeacherList
