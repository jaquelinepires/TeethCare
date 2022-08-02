import styled from 'styled-components'

export const Container = styled.div`
  margin-block: 8rem;
`

export const Title = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    /* color: #960200; */
    color: #152b3c;
  }
`
export const Content = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 1024px) {
    width: 70%;
    display: grid;
    grid-template-columns: 30% 50%;
    gap: 12%;
  }
`

export const ContainerContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  article {
    background: #152b3c;
    padding: 1rem;
    border-radius: 1.2rem;
    text-align: center;
    border: 1px solid transparent;
    transition: all 400ms ease;
  }
  article:hover {
    background: transparent;
    border: 1px solid #152b3c;
  }
  a {
    margin-top: 0.7rem;
    display: inline-block;
    font-size: 0.8rem;
    color: #fff;
  }
  h4 {
    color: #fff;
  }

  h5 {
    color: #fff;
  }
`

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  input,
  textarea {
    width: 100%;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: transparent;
    border: 2px solid #152b3c;
    resize: none;
    color: var(--color-white);
  }
`
export const Button = styled.button`
  width: max-content;
  display: inline-block;
  color: #fff;
  font-weight: 700;
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;
  cursor: pointer;
  border: 1px solid #960200;
  transition: all 400ms ease;
  text-decoration: none;
  background-color: #960200;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    /* filter: brightness(0.9); */
    background-color: #3c0000;
  }
`
