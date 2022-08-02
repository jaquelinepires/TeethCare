import {
  Container,
  HeaderContainer,
  HeadingLine,
  Title,
  Subtitle,
  Content,
  Left,
  ImageAbout,
  ImageBg,
  ImageLg,
  ImageSm,
  Right,
  Message,
} from './styles'
import about from '../../assets/about.jpg'

export function About2() {
  return (
    <Container id="about">
      <HeaderContainer>
        <HeadingLine />
        <Title>Sobre nós</Title>
        <Subtitle>Entenda quem somos e por que existimos</Subtitle>
      </HeaderContainer>
      <Content>
        <Left>
          <ImageAbout>
            <ImageBg></ImageBg>

            <ImageLg
              src={about}
              style={{ width: '400px' }}
              alt=""
              className="lg"
            />

            <ImageSm
              src={about}
              style={{ width: '300px' }}
              alt=""
              className="sm"
            />
          </ImageAbout>
        </Left>
        <Right>
          <Message>
            lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lore lorem
            ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
            lorem ipsum dolor lore lorem ipsum dolor lorem ipsum dolor lorem
            ipsum dolor lorem ipsum dolor lore lorem ipsum dolor lorem ipsum
            dolor lorem ipsum dolor lorem ipsum dolor lore lorem ipsum dolor
            lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lore lorem
            ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
            lore lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
            ipsum dolor lore lorem ipsum dolor lorem ipsum dolor lorem ipsum
            dolor lorem ipsum dolor lore lorem ipsum dolor lorem ipsum dolor
            lorem ipsum dolor lorem ipsum dolor lore lorem ipsum dolor
          </Message>
        </Right>
      </Content>
    </Container>
  )
}
