import styled from 'styled-components'

export const Container = styled.div`
  width: 68.75rem;
  margin-inline: auto;
  padding-top: 6.75rem;

  @media screen and (min-width: 1024px) {
    .swiper-container {
      width: 1024px;
    }
  }
  @media screen and (min-width: 764px) {
    .swiper-container {
      width: 764px;
    }
  }
`
export const ContainerPhoto = styled.div`
  width: 444px;
  height: 144px;
`
export const ImageHealthPlan = styled.img`
  width: 260px;
  height: 144px;
  object-fit: cover;
`
