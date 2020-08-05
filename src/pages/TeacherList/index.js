import React from 'react'

import PageHeader from 'components/PageHeader'
import TeacherItem from 'components/TeacherItem'

import { Container, Form, Main } from './styles'

const TeacherList = () => {
  return (
    <Container>
      <PageHeader title="These are the available proffys">
        <Form>
          <div>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" />
          </div>
          <div>
            <label htmlFor="week_day">Week Day</label>
            <input type="text" id="week_day" />
          </div>
          <div>
            <label htmlFor="time">Time</label>
            <input type="text" id="time" />
          </div>
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
