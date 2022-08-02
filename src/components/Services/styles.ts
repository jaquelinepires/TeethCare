import styled from 'styled-components'

export const Container = styled.div`
  width: 68.75rem;
  margin-inline: auto;
  padding-top: 6.75rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-inline: 1.5rem;
  }
`

export const HeadingLine = styled.div`
  position: relative;
  padding-top: 3rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5rem;
    height: 3px;
    background-color: #b22222;
  }
`
export const Header = styled.div`
  text-align: left;
`
export const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 3rem;
  color: #152b3c;
`
export const Subtitle = styled.h4`
  margin-bottom: 3rem;
  color: #b22222;
`

export const Cards = styled.div`
  margin-bottom: 3rem;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  border-radius: 1rem;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    width: 350px;
    margin-inline: auto;
  }
`
export const ButtonCard = styled.button`
  :hover {
    filter: brightness(0.9);
    transform: scale(0.85);
    transition: transform 0.3s, opacity 0.2s;
  }
`
export const ImageCard = styled.img`
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 196px;
  width: 350px;
  position: relative;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`
export const Description = styled.h3`
  margin-block: 1rem;
  color: #152b3c;
`
