import {
  Container,
  ContentLeft,
  LeftWrapper,
  Right,
  Title,
  Subtitle,
  Message,
  ButtonWhatsapp,
  ImageMe,
  Bg,
} from './styles'

import me from '../../assets/me.png'
import { FaWhatsapp } from 'react-icons/fa'

export function Hero() {
  return (
    <Container>
      <ContentLeft>
        <LeftWrapper>
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
        </LeftWrapper>
      </ContentLeft>
      <Right>
        <Bg></Bg>
        <ImageMe src={me} alt="" className="i-img" />
      </Right>
    </Container>
  )
}
