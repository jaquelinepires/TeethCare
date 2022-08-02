import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { About2 } from '../About'
import { Contact } from '../Contact'
import { Footer } from '../Footer'
import { HealthPlan } from '../HealthPlan'
import { Hero } from '../Hero'
import { Navbar } from '../Navbar'
import { Services } from '../Services'
import { Sidebar } from '../Sidebar'
import { Testimonials } from '../Testimonials'

export function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
      </Router>
      <Hero />
      <About2 />
      <Services />
      <Testimonials />
      <HealthPlan />
      <Contact />
      <Footer />
    </>
  )
}
