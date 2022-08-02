import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 6.75rem;
`
export const Content = styled.div`
  width: 68.75rem;
  margin-inline: auto;

  .swiper-pagination-clickable .swiper-pagination-bullet {
    background-color: #b22222;
  }

  .carrossel {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    padding-bottom: 4rem;
  }
  .carrosselContainer {
    background: #152b3c;
    padding: 2rem;
    border-radius: 2rem;
    user-select: none;
  }
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
export const HeaderContainer = styled.div`
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

export const ImageTestimonials = styled.img`
  object-fit: cover;
  width: 48px;
`
export const Description = styled.div`
  width: 4rem;
  aspect-ratio: 1/1;
  overflow: hidden;
  border-radius: 50%;
  margin: 0 auto 1rem;
  border: 0.3rem solid white;
`
export const Name = styled.h4`
  font-size: 1rem;
  text-align: center;
  color: #b22222;
`
export const Message = styled.h2`
  color: white;
  font-weight: 300;
  display: block;
  width: 80%;
  margin: 0.8rem auto 0;
  font-size: 0.875rem;
  text-align: center;
`
