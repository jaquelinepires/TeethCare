import bradesco from '../../assets/bradesco.png'
import sulamerica from '../../assets/sulamerica.png'
import portoseguro from '../../assets/portoseguro.png'
import odontoprev from '../../assets/odontoprev.png'
import unimed from '../../assets/unimed.png'
import sempreodonto from '../../assets/sempreodonto.png'
import odontosa from '../../assets/odontosa.png'
import odontoserve from '../../assets/odontoserve.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/pagination'
import 'swiper/css'
import { Container, ContainerPhoto, ImageHealthPlan } from './styles'

export function HealthPlan() {
  return (
    <Container>
      <Swiper
        breakpoints={{
          1024: {
            width: 1024,
            slidesPerView: 4,
          },
          764: {
            width: 764,
            slidesPerView: 2,
          },
        }}
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <ContainerPhoto>
          <SwiperSlide>
            <ImageHealthPlan src={bradesco} className="photo" />
          </SwiperSlide>
          <SwiperSlide>
            <ImageHealthPlan src={sempreodonto} className="photo" />
          </SwiperSlide>
          <SwiperSlide>
            <ImageHealthPlan src={portoseguro} className="photo" />
          </SwiperSlide>
          <SwiperSlide>
            <ImageHealthPlan src={unimed} className="photo" />
          </SwiperSlide>
          <SwiperSlide>
            <ImageHealthPlan src={sulamerica} className="photo" />
          </SwiperSlide>
          <SwiperSlide>
            <ImageHealthPlan src={odontoprev} className="photo" />
          </SwiperSlide>
          <SwiperSlide>
            <ImageHealthPlan src={odontoserve} className="photo" />
          </SwiperSlide>
          <SwiperSlide>
            <ImageHealthPlan src={odontosa} className="photo" />
          </SwiperSlide>
        </ContainerPhoto>
      </Swiper>
    </Container>
  )
}
