import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/pagination'
import 'swiper/css'
import { Container, ContainerPhoto, ImageHealthPlan } from './styles'
import db from '../../db.json'

export function HealthPlan() {
  const healthPlan = db.healthPlan
  return (
    <Container>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={0}
        slidesPerView={4}
      >
        <ContainerPhoto>
          {healthPlan.map((user) => (
            <SwiperSlide key={user.id}>
              <ImageHealthPlan src={user.photo} />
            </SwiperSlide>
          ))}
        </ContainerPhoto>
      </Swiper>
    </Container>
  )
}
