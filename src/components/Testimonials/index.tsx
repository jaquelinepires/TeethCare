import { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/pagination'
import 'swiper/css'
import {
  Container,
  Content,
  HeaderContainer,
  HeadingLine,
  Title,
  Subtitle,
  ImageTestimonials,
  Description,
  Name,
  Blockquote,
} from './styles'

import db from '../../db.json'

export function Testimonials() {
  const testimonial = db.testimonial
  return (
    <Container id="testimonials">
      <Content>
        <HeaderContainer>
          <HeadingLine />
          <Title>Depoimentos</Title>
          <Subtitle>O que nossos pacientes estão comentando?</Subtitle>
        </HeaderContainer>

        <Swiper
          className="carrossel"
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {testimonial.map((item) => (
            <SwiperSlide key={item.id} className="carrosselContainer">
              <Description>
                <ImageTestimonials src={item.avatar}></ImageTestimonials>
              </Description>
              <Name>{item.name}</Name>
              <Blockquote>
                <span>&ldquo;</span>
                {item.review}
              </Blockquote>
            </SwiperSlide>
          ))}
        </Swiper>
      </Content>
    </Container>
  )
}
