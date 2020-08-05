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

  article {
    margin-top: 2.4rem;
    overflow: hidden;
    border-radius: .8rem;
    border: 1px solid var(--color-line-in-white);
    background: var(--color-box-base);

    header {
      padding: 3.2rem 2rem;
      display: flex;
      align-items: center;

      img {
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
      }

      div {
        margin-left: 2.4rem;

        strong {
          font: 700 2.4rem Archivo;
          display: block;
          color: var(--color-text-title);
        }

        span {
          font-size: 1.6rem;
          display: block;
          margin-top: .4rem;
        }
      }
    }

    > p {
      padding: 0 2rem;
      font-size: 1.6rem;
      line-height: 2.8rem;
    }

    footer {
      padding: 3.2rem 2rem;
      background: var(--color-box-footer);
      border-top: 1px solid var(--color-line-in-white);
      margin-top: 3.2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      p strong {
        color: var(--color-primary);
        font-size: 1.6rem;
        display: block;
      }

      button {
        width: 20rem;
        height: 5.6rem;
        color: var(--color-button-text);
        border: 0;
        border-radius: .8rem;
        cursor: pointer;
        font: 700 1.4rem Archivo;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        transition: .2s;
        background: var(--color-secondary);

        &:hover {
          background: var(--color-secondary-dark);
        }
      }
    }
  }

  @media(min-width: ${breakpoint}px) {
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;

    article {
      header,
      footer {
        padding: 3.2rem;
      }

      > p {
        padding: 0 3.2rem;
      }

      footer {
        p strong {
          display: initial;
          margin-left: 1.6rem;
        }

        button {
          width: 24.5rem;
          font-size: 1.6rem;
          justify-content: center;

          img {
            margin-right: 1.6rem;
          }
        }
      }
    }
  }
`
