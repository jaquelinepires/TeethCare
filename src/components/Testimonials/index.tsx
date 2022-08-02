import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
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
  Message,
} from './styles'

const data = [
  {
    id: 1,
    name: 'Maria José',
    testimonial:
      'lorem ipsum dolor sit lorem ipsum dolor silorem ipsum dolor sit lorem ipsum dolor si lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit',
    avatar: 'https://i.pravatar.cc/151',
  },
  {
    id: 2,
    name: 'Carlos Antonio',
    testimonial:
      'lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit',
    avatar: 'https://i.pravatar.cc/200',
  },
  {
    id: 3,
    name: 'Beatriz Cruz',
    testimonial:
      'lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit',
    avatar: 'https://i.pravatar.cc/185',
  },
  {
    id: 4,
    name: 'Priscilla Dias',
    testimonial:
      'lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit',
    avatar: 'https://i.pravatar.cc/100',
  },
  {
    id: 5,
    name: 'regina Martins',
    testimonial:
      'lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit',
    avatar: 'https://i.pravatar.cc/45',
  },
]

export function Testimonials() {
  return (
    <Container id="testimonials">
      <Content>
        <HeaderContainer>
          <HeadingLine />
          <Title>Depoimentos</Title>
          <Subtitle>
            O que os Cliente dizem sobre TeethCare O que os Cliente dizem sobre
            TeethCare O que os Cliente dizem sobre TeethCare
          </Subtitle>
        </HeaderContainer>

        <Swiper
          className="carrossel"
          modules={[Pagination]}
          spaceBetween={0}
          navigation
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map((user) => (
            <SwiperSlide key={user.id} className="carrosselContainer">
              <Description>
                <ImageTestimonials src={user.avatar}></ImageTestimonials>
              </Description>

              <Name>{user.name}</Name>
              <Message>{user.testimonial}</Message>
            </SwiperSlide>
          ))}
        </Swiper>
      </Content>
    </Container>
  )
}
