import React from 'react'

import PageHeader from 'components/PageHeader'
import whatsappIcon from 'assets/images/icons/whatsapp.svg'

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
        <article>
          <header>
            <img src="https://avatars2.githubusercontent.com/u/4058722?s=460&u=aa7ccd0559a5e7265c0c29dc5e98e3503cfc0962&v=4" alt="Marina Ferreia" />

            <div>
              <strong>Marina Ferreira</strong>
              <span>Química</span>
            </div>
          </header>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            <br /><br />
            Iste eum nesciunt excepturi, alias saepe incidunt mollitia aperiam voluptates optio inventore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem distinctio tempore, vitae temporibus similique repellendus quam asperiores totam accusantium possimus?
          </p>

          <footer>
            <p>
              Hour rate
              <strong>R$ 20,00</strong>
            </p>

            <button type="type">
              <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
          </footer>
        </article>
      </Main>
    </Container>
  )
}

export default TeacherList
