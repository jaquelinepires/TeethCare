import { WhatsappLogo, X } from 'phosphor-react'
import {
  Container,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnContact,
  SidebarContact,
} from './styles'

export interface SideProps {
  isOpen: boolean
  toggle: () => void
}
export function Sidebar({ isOpen, toggle }: SideProps) {
  return (
    <Container isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <X style={{ color: '#fff' }} size={32} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="service" onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to="testimonials" onClick={toggle}>
            Testimonials
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            Contact
          </SidebarLink>
        </SidebarMenu>
        <SideBtnContact>
          <SidebarContact
            href="https://wa.me/5571986224674"
            target="_blank"
            className="btn btn-dark"
            rel="noreferrer"
          >
            <WhatsappLogo /> Agendar Avaliação
          </SidebarContact>
        </SideBtnContact>
      </SidebarWrapper>
    </Container>
  )
}
