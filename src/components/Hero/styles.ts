import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-top: 80px;
  margin-bottom: 10rem;
  background-color: #fafafa;
  overflow: hidden;
`

export const Header = styled.div`
  width: 68.75rem;
  margin-inline: auto;

  @media screen and (max-width: 768px) {
    padding-inline: 1.5rem;
  }
`

export const Title = styled.h4`
  margin-bottom: 1.6rem;
  color: #152b3c;
  padding-top: 5rem;

  @media screen and (max-width: 768px) {
    padding-top: 5.3rem;
    text-align: left;
  }
`
export const Subtitle = styled.h1`
  font-size: 3.25rem;
  color: #152b3c;

  @media screen and (max-width: 768px) {
    margin-bottom: 1.2rem;
    font-size: 3rem;
    text-align: left;
  }
`
export const Message = styled.p`
  margin-top: 1rem;
  color: #152b3c;
  width: 35rem;

  @media screen and (max-width: 768px) {
    width: 90%;
    text-align: left;
  }
`
export const HeaderContent = styled.div`
  text-align: left;
  position: absolute;
  width: 50rem;

  @media screen and (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`

export const ButtonWhatsapp = styled.a`
  display: flex;
  align-items: center;
  margin-top: 6rem;
  padding: 1rem 2rem;
  font-size: 0.875em;
  text-transform: uppercase;
  font-weight: 700;
  color: #152b3c;
  border: 2px solid #960200;
  cursor: pointer;
  position: relative;
  z-index: 1;
  overflow: hidden;
  text-decoration: none;
  width: fit-content;
  display: flex;
  gap: 1.6rem;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #960200;
    z-index: -2;
    transform: translateX(-100%);
    transition: all 0.4s;
  }
  &:hover::before {
    transform: translateX(0);
  }
  @media screen and (max-width: 768px) {
    margin-inline: auto;
  }
`
export const Image = styled.img`
  width: 100vw;
  height: 80vh;
  object-fit: cover;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
