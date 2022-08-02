import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 8rem;
  width: 68.75rem;
  margin-inline: auto;

  @media screen and (max-width: 768px) {
    margin: 0;
    padding-inline: 1.5rem;
  }
`
export const Content = styled.h1`
  grid-template-columns: 26rem auto;
  position: relative;
  display: grid;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
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
export const Header = styled.div``
export const HeaderContainer = styled.header``

export const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 3rem;
  color: #152b3c;
`
export const Subtitle = styled.h4`
  margin-bottom: 1.6rem;
  color: #b22222;
`

export const Left = styled.div``
export const ImageAbout = styled.div`
  position: relative;

  &:hover .sm {
    opacity: 0;
  }

  &:hover .lg {
    filter: saturate(1) brightness(1);
    /* box-shadow: 0 3rem 3rem rgba(0, 0, 0, 0.2); */
    border: 1rem solid #152b3c;
    left: 0;
    bottom: 0;
  }
`
export const ImageBg = styled.img`
  width: 16rem;
  height: 24rem;
  position: absolute;
  bottom: 0;
  background: #152b3c;
`
export const ImageLg = styled.img`
  position: relative;
  left: 1rem;
  bottom: 1rem;
  filter: saturate(0) brightness(0.3);
  transition: 500ms ease;
`
export const ImageSm = styled.img`
  height: 22rem;
  width: 22rem;
  position: absolute;
  top: 3rem;
  left: 8rem;
  overflow: hidden;
  box-shadow: 2rem 2rem 2rem rgba(0, 0, 0, 0.3);
  transition: 500ms ease;
  object-fit: cover;
`
export const Right = styled.div`
  margin-left: 5rem;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`
export const Message = styled.div`
  margin: 0 4rem 1.5rem 3rem;
  font-size: 1rem;
  color: #152b3c;

  @media screen and (max-width: 768px) {
    margin: 0;
    width: 40%;
  }
`
