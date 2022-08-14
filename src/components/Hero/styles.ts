import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 68.75rem;
  margin-inline: auto;
  height: 100vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`
export const ContentLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
  }
`
export const Right = styled.div`
  flex: 1;
  position: relative;
`
export const LeftWrapper = styled.div`
  padding: 2rem;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    padding: 10px;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
  }
`
export const Title = styled.h4`
  margin-bottom: 1rem;
  color: #152b3c;

  @media screen and (max-width: 768px) {
    padding-top: 6rem;
  }
`
export const Subtitle = styled.h1`
  font-size: 3.25rem;
  color: #152b3c;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
    text-align: center;
    font-size: 2.125rem;
  }
`
export const Message = styled.p`
  margin-top: 1.5rem;
  color: #495057;

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 1.125rem;
    /* display: none; */
  }
`
export const ButtonWhatsapp = styled.a`
  display: flex;
  align-items: center;
  margin-top: 5rem;
  padding: 1.5rem 2rem;
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
    padding: 1rem 2rem;
  }
`
export const ImageMe = styled.img`
  /* width: 100%; */
  height: 100%;
  object-fit: cover;
  position: absolute;
  left: 4rem;

  @media screen and (max-width: 768px) {
    width: 60%;
    margin-inline: auto;
  }
`
export const Bg = styled.div`
  clip-path: polygon(100% 0%, 100% 51%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
  background-color: #152b3c;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
`
