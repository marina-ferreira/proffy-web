import React from 'react'

import PageHeader from 'components/PageHeader'
import TeacherItem from 'components/TeacherItem'
import Input from 'components/Input'
import Select from 'components/Select'

import { Container, Form, Main } from './styles'

const TeacherList = () => {
  return (
    <Container>
      <PageHeader title="These are the available proffys">
        <Form>
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
          <Input type="time" name="time" label="Time" />
        </Form>
      </PageHeader>

      <Main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </Main>
    </Container>
  )
}

export default TeacherList
