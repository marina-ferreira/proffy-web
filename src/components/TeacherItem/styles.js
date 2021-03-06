import styled from 'styled-components'

const breakpoint = 700

export const Article = styled.article`
  margin-top: 2.4rem;
  overflow: hidden;
  border-radius: .8rem;
  border: 1px solid var(--color-line-in-white);
  background: var(--color-box-base);

  > p {
    padding: 0 2rem;
    font-size: 1.6rem;
    line-height: 2.8rem;
  }

  @media(min-width: ${breakpoint}px) {
    > p {
      padding: 0 3.2rem;
    }
  }
`
export const Header = styled.header`
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

  @media(min-width: ${breakpoint}px) {
    padding: 3.2rem;
  }
`
export const Footer = styled.header`
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

  a {
    width: 22rem;
    height: 5.6rem;
    color: var(--color-button-text);
    border: 0;
    border-radius: .8rem;
    cursor: pointer;
    font: 700 1.6rem Archivo;
    display: flex;
    align-items: center;
    text-decoration: none;
    justify-content: space-evenly;
    transition: .2s;
    background: var(--color-secondary);

    &:hover {
      background: var(--color-secondary-dark);
    }
  }

  @media(min-width: ${breakpoint}px) {
    padding: 3.2rem;

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
`
