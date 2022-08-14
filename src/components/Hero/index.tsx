import { FaWhatsapp } from 'react-icons/fa'
import {
  Container,
  Header,
  HeaderContent,
  Title,
  Subtitle,
  Message,
  ButtonWhatsapp,
  ImageHero,
} from './styles'
import abcd from '../../assets/abcd.png'

export function Hero() {
  return (
    <Container id="home">
      <Header>
        <HeaderContent>
          <Title>BOAS-VINDAS 👋</Title>
          <Subtitle>TENHA UM SORRISO SAUDÁVEL</Subtitle>
          <Message>
            Utilizo as mais recentes tecnologias para ajudar a melhorar o
            sorriso e a saúde bucal de nossos pacientes
          </Message>
          <ButtonWhatsapp href="https://wa.me/5571986224674" target="_blank">
            <FaWhatsapp size="24" />
            Agendar Avaliação
          </ButtonWhatsapp>
        </HeaderContent>
        <div>
          <ImageHero src={abcd}></ImageHero>
        </div>
      </Header>
    </Container>
  )
}
