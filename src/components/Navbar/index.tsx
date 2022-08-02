import { TextAlignLeft } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import {
  Container,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './styles'

interface NavProps {
  toggle: () => void
}

export function Navbar({ toggle }: NavProps) {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <Container scrollNav={scrollNav}>
      <NavBarContainer>
        <NavLogo to="/" onClick={toggleHome} scrollNav={scrollNav}>
          Logo
        </NavLogo>
        <MobileIcon onClick={toggle} scrollNav={scrollNav}>
          <TextAlignLeft size={32} />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks
              scrollNav={scrollNav}
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
            >
              About
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              scrollNav={scrollNav}
              to="service"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="active"
            >
              Services
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              scrollNav={scrollNav}
              to="testimonials"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="active"
            >
              testimonial
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              scrollNav={scrollNav}
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="active"
            >
              Contact
            </NavLinks>
          </NavItem>
        </NavMenu>
      </NavBarContainer>
    </Container>
  )
}
