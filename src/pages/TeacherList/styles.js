import styled from 'styled-components'

const breakpoint = 700

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 700px;

  @media(min-width: ${breakpoint}px) {
    max-width: 100%;
  }
`
export const Form = styled.form`
  margin-top: 3.2rem;

  > div {
    position: relative;

    + div {
      margin-top: 1.4rem;
    }

    &:focus-within::after {
      content: '';
      width: calc(100% - 3.2rem);
      height: 2px;
      left: 1.6rem;
      right: 1.6rem;
      bottom: 0;
      position: absolute;
      background: var(--color-primary-light);
    }
  }

  label {
    color: var(--color-text-in-primary);
    font-size: 1.4rem;
  }

  input {
    width: 100%;
    height: 5.6rem;
    padding: 0 1.6rem;
    margin-top: .8rem;
    outline: 0;
    font: 1.6rem Archivo;
    border-radius: .8rem;
    border: 1px solid var(--color-line-in-white);
    background: var(--color-input-background);
  }

  @media(min-width: ${breakpoint}px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -28px;

    > div + div {
      margin-top: 0;
    }
  }
`
export const Main = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  @media(min-width: ${breakpoint}px) {
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;
  }
`
