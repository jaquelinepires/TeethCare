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
import nos from '../../assets/nos.jpg'

export function About() {
  return (
    <Container id="about">
      <HeaderContainer>
        <HeadingLine />
        <Title>Sobre mim</Title>
        <Subtitle>Entenda quem somos e por que existimos</Subtitle>
      </HeaderContainer>
      <Content>
        <Left>
          <ImageAbout>
            <ImageBg></ImageBg>

            <ImageLg
              src={nos}
              style={{ width: '400px' }}
              alt=""
              className="lg"
            />

            <ImageSm
              src={nos}
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
