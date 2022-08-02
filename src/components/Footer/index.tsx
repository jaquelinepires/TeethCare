import {
  Container,
  Content,
  Logo,
  ContainerDescription,
  Description,
  Subtitle,
  ListIcons,
  IconsContainer,
  Icons,
} from './styles'
import { BsFillArrowUpSquareFill } from 'react-icons/bs'
import { FiInstagram, FiYoutube, FiFacebook } from 'react-icons/fi'
import ScrollToTop from 'react-scroll-to-top'

export function Footer() {
  return (
    <Container>
      <Content>
        <Logo id="home" href="/">
          LOGO
        </Logo>

        <ContainerDescription>
          <Description>
            ©2022 Dentista Salvador. Resp. Técnica Dra. Maria João CRO:??????
            <Subtitle>Todos os Direitos Reservados</Subtitle>
          </Description>

          <ListIcons>
            <IconsContainer>
              <Icons target="blank" href="https://facebook.com/jaqueline">
                <FiInstagram />
              </Icons>
            </IconsContainer>

            <IconsContainer>
              <Icons target="blank" href="https://instagram.com">
                <FiYoutube />
              </Icons>
            </IconsContainer>

            <IconsContainer>
              <Icons target="blank" href="https://youtube.com/jaqueline">
                <FiFacebook />
              </Icons>
            </IconsContainer>
          </ListIcons>
        </ContainerDescription>
      </Content>

      <ScrollToTop
        style={{
          marginBottom: '60px',
          marginRight: '-10px',
          overflow: 'hidden',
          boxShadow: 'none',
        }}
        smooth
        component={<BsFillArrowUpSquareFill size="40" color="#960200" />}
      />
    </Container>
  )
}
