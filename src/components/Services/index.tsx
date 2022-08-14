import {
  Container,
  HeadingLine,
  Header,
  Title,
  Subtitle,
  Cards,
  CardsContainer,
  ButtonCard,
  ImageCard,
  Description,
} from './styles'
import data from '../../db.json'

export function Services() {
  const cards = data.cards
  return (
    <Container id="service">
      {/* <div className="h-line"></div> */}
      <HeadingLine />
      <Header>
        <Title>Serviços</Title>
        <Subtitle>Como podemos ajudá-lo a se sentir melhor?</Subtitle>
      </Header>

      <Cards>
        <CardsContainer>
          {cards.map((card) => (
            <ButtonCard key={card.id}>
              <ImageCard src={card.photo} />
              <Description>{card.name}</Description>
            </ButtonCard>
          ))}
        </CardsContainer>
      </Cards>
    </Container>
  )
}
