import styled from 'styled-components'

const breakpoint = 1100

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-text-in-primary);
  background: var(--color-primary);

  @media (min-width: ${breakpoint}px) {
    > div {
      max-width: 1100px;
      display: grid;
      grid-template-rows: 350px 1fr;
      grid-template-columns: 2fr 1fr 1fr;
      grid-template-areas: "logo hero hero" "buttons buttons total";
    }
  }
`
export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  img {
    height: 10rem;
  }

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: .8rem;
  }

  @media (min-width: ${breakpoint}px) {
    grid-area: logo;
    align-self: center;
    margin: 0;
    text-align: left;

    h2 {
      text-align: initial;
      font-size: 3.6rem;
    }

    img {
      height: 100%;
    }
  }
`
export const HeroImage = styled.img`
  width: 95%;

  @media (min-width: ${breakpoint}px) {
    grid-area: hero;
    justify-self: end;
  }

  @media (max-width: 680px) {
    width: 100%;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    font: 700 2rem Archivo;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: var(--color-button-text);
    transition: background .2s;

    &:first-child {
      margin-right: 1.6rem;
    }

    img {
      width: 4rem;
      margin-right: 2.4rem;
    }

    &.study {
      background: var(--color-primary-lighter);

      &:hover {
        background: var(--color-primary-light);
      }
    }

    &.teach {
      background: var(--color-secondary);

      &:hover {
        background: var(--color-secondary-dark);
      }
    }
  }

  @media (min-width: ${breakpoint}px) {
    grid-area: buttons;
    justify-content: flex-start;

    a {
      font-size: 2.4rem
    }
  }
`
export const TotalConnections = styled.div`
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-left: .8rem;
  }

  @media (min-width: ${breakpoint}px) {
    grid-area: total;
    justify-self: end;
  }
`
