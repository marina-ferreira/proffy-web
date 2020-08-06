import React from 'react'

import PageHeader from 'components/PageHeader'
import TeacherItem from 'components/TeacherItem'
import Input from 'components/Input'

import { Container, Form, Main } from './styles'

const TeacherList = () => {
  return (
    <Container>
      <PageHeader title="These are the available proffys">
        <Form>
          <Input type="text" id="subject" label="Subject" />
          <Input type="text" id="week_day" label="Week Day" />
          <Input type="time" id="time" label="Time" />
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
