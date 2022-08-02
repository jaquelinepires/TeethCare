import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import { Envelope, MapPin, WhatsappLogo } from 'phosphor-react'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'
import {
  Container,
  Content,
  Title,
  ContainerContact,
  ContainerForm,
  Button,
} from './styles'

const addressFormValidationSchema = zod.object({
  name: zod
    .string({
      required_error: 'Digite um CEP válido',
      invalid_type_error: 'Digite um CEP válido',
    })
    .min(1, 'Digite um CEP válido'),
  whatsapp: zod
    .string({
      required_error: 'Digite seu email',
      invalid_type_error: 'Digite seu email',
    })
    .length(11, 'O campo email é obrigatório.'),
  email: zod
    .string({
      required_error: 'Digite seu email',
      invalid_type_error: 'Digite seu email',
    })
    .min(1, 'O campo email é obrigatório.'),
  message: zod
    .string({
      required_error: 'Digite um bairro',
      invalid_type_error: 'Digite um bairro válido',
    })
    .min(1, 'O campo bairro é obrigatório.'),
})

type AddressFormData = zod.infer<typeof addressFormValidationSchema>

export function Contact() {
  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
  })
  const { handleSubmit, register, watch } = addressForm

  const name = watch('name')
  const isSubmitDisabled = !name

  const form = useRef<HTMLFormElement | null>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_6qsgtqs',
        'template_92mjja5',
        e.currentTarget,
        'y2VO4SG3Y-_EYLjBu',
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        },
      )

    e.currentTarget.reset()
  }

  return (
    <Container id="contact">
      <Title>
        <h2>Entre em contato com a gente!</h2>
      </Title>

      <Content>
        <ContainerContact>
          <article>
            <Envelope size={32} weight="fill" color="#4aa8dc" />
            <h4>Email</h4>
            <h5>piresjaqueline17@gmail.com</h5>
            <a
              href="mailto:piresjaqueline17@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article>
            <WhatsappLogo size={32} weight="fill" color="#72c24d" />
            <h4>Whatsapp</h4>
            <h5>(71) 99259-9502</h5>
            <a
              href="https://wa.me/5571992599502"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article>
            <MapPin size={32} weight="fill" color="#960200" />
            <h4>Endereço</h4>
            <h5>Avenida antonio carlos magalhães</h5>
            <a
              href="https://wa.me/5571992599502"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </ContainerContact>

        <form
          ref={form}
          onSubmit={(handleSubmit((d) => console.log(d)), sendEmail)}
        >
          <ContainerForm>
            <input
              type="text"
              // name="nome"
              placeholder="Your full Name"
              {...register('name')}
            />
            <input
              type="number"
              // name="whatsapp"
              placeholder="Your whatsapp"
              max={11}
              min={11}
              required
              {...register('whatsapp')}
            />

            <input
              type="email"
              // name="email"
              placeholder="Your email"
              required
              {...register('email')}
            />
            <textarea
              // name="message"
              rows={7}
              placeholder="Your message"
              required
              {...register('message')}
            ></textarea>

            <Button type="submit" disabled={isSubmitDisabled}>
              Send Message
            </Button>
          </ContainerForm>
        </form>
      </Content>
    </Container>
  )
}
