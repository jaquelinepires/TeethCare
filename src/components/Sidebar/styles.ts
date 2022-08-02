import styled from 'styled-components'
// import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

interface Props {
  isOpen: boolean
}

export const Container = styled.div<Props>`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #152b3c;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s all ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const SidebarWrapper = styled.div`
  color: #fff;
`

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(6, 60px);
  }
`

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #960200;
    transition: 0.2s ease ease-in-out;
  }
`
export const SideBtnContact = styled.div`
  display: flex;
  justify-content: center;
`
export const SidebarContact = styled.a`
  padding: 1rem 2rem;
  font-size: 1em;
  text-transform: uppercase;
  font-weight: 700;
  outline: none;
  border-radius: 0.9rem;

  color: white;
  border: 1px solid #fff;
  cursor: pointer;
  position: relative;
  z-index: 1;
  overflow: hidden;
  text-decoration: none;
  width: fit-content;
  display: flex;
  gap: 1.6rem;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #960200;
    z-index: -2;
    transform: translateX(-100%);
    transition: all 0.4s;
  }
  &:hover::before {
    transform: translateX(0);
  }
`
