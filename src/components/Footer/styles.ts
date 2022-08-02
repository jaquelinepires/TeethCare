import styled from 'styled-components'

export const Container = styled.div`
  background: #152b3c;
  padding-block: 2rem;
  text-align: left;
`
export const Logo = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 1.875rem;
`
export const Content = styled.div`
  width: 68.75rem;
  margin-inline: auto;
`
export const ContainerDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Description = styled.p`
  color: #fff;
  margin-bottom: 0.623rem;
  margin-top: 1.5rem;
  font-size: 1rem;
  line-height: 2;

  @media screen and (max-width: 768px) {
    padding-inline: 1.5rem;
  }
`
export const Subtitle = styled.p`
  color: #fff;
`
export const ListIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`
export const IconsContainer = styled.ul``
export const Icons = styled.a`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 1.562rem;
  border: 2px solid #b22222;
  padding: 0.625rem;
  width: 3.125rem;
  height: 3.125rem;
  text-align: center;
  border-radius: 50%;
  margin: 2px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-1rem);
  }
`
