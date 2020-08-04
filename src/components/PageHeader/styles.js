import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  background: var(--color-primary);

  div {
    width: 90%;
    margin: 0 auto;
    padding: 1.6rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-text-in-primary);

    a {
      height: 3.2rem;
      opacity: 1;
      transition: opacity .2s;

      &:hover {
        opacity: .6
      }
    }

    > img {
      height: 1.6rem;
    }
  }

  p {
    width: 90%;
    margin: 0 auto;
    position: relative;
    margin: 3.2rem auto;

    strong {
      font: 700 3.6rem Archivo;
      line-height: 4.2rem;
      color: var(--color-title-in-primary)
    }
  }
`
