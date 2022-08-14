import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
interface Props {
  scrollNav: boolean
}
export const Container = styled.div<Props>`
  background: ${({ scrollNav }) => (scrollNav ? '#152b3c' : '#fff')};
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  border-bottom: 1px solid rgba(29, 30, 44, 0.1);
  box-shadow: 0 0.5rem 0.5rem rgba(29, 30, 44, 0.1);

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`
export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding-block: 0;
  /* padding: 0 24px; */
  max-width: 1100px;
`
export const NavLogo = styled(LinkR)<Props>`
  color: ${({ scrollNav }) => (scrollNav ? '#fff' : '#152b3c')};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  /* margin-left: 24px; */
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    margin-left: 48px;
  }
`
export const Logo = styled.img`
  width: 40px;
`
export const MobileIcon = styled.div<Props>`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.125rem;
    cursor: pointer;
    color: ${({ scrollNav }) => (scrollNav ? '#fff' : '#152b3c')};
  }
`
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavItem = styled.li`
  height: 80px;
`
export const NavLinks = styled(LinkS)<Props>`
  color: ${({ scrollNav }) => (scrollNav ? '#fff' : '#152b3c')};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  font-weight: bold;
  font-size: 0.875rem;
  height: 100%;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    border-bottom: 3px solid #960200;
    transition: 0.4s;
  }

  &.active {
    border-bottom: 3px solid #960200;
  }
`
