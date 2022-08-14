import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  margin-top: 80px;
  background: radial-gradient(
    circle,
    rgba(42, 167, 255, 1) 25%,
    rgba(65, 178, 253, 1) 36%,
    rgba(132, 210, 246, 1) 52%,
    rgba(145, 229, 246, 1) 100%
  );

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 5rem;
  }
`

export const Header = styled.div`
  width: 68.75rem;
  margin-inline: auto;
  display: flex;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    text-align: center;
  }
`

export const Title = styled.h4`
  margin-bottom: 1rem;
  color: #152b3c;
  padding-top: 5rem;

  @media screen and (max-width: 768px) {
    padding-top: 2.5rem;
  }
`
export const Subtitle = styled.h1`
  font-size: 3.25rem;
  color: #152b3c;

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
    font-size: 3rem;
    text-align: center;
    font-size: 2.125rem;
  }
`
export const Message = styled.p`
  margin-top: 1rem;
  color: #495057;
  width: 35rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
    font-size: 1.125rem;
  }
`
export const HeaderContent = styled.div`
  text-align: left;
  width: 50rem;

  @media screen and (max-width: 768px) {
    text-align: center;
    width: 100%;
    padding-inline: 1.5rem;
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
    margin-top: 2rem;
    margin-inline: auto;
  }
`
export const ImageHero = styled.img`
  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 263px;
    height: 342.53px;
  }
`
