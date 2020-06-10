import React, { useState } from 'react'
import {
  ButtonWrapper,
  LoginLabel,
  LoginRegistrationLabel,
  LoginSectionStyled, LoginWrapper, RegistrationLink
} from "../../UIElements/Sections/LoginSection/views"
import Input from "../../UIElements/Inputs/Input"
import MainButton from "../../UIElements/Buttons/MainButton"
import Link from "next/link"

const Registration = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleCreate =  () => {
    const data = {
      name: name,
      email: email,
      password: password
    }
    fetch('http://192.168.1.246:3001/zpi/api/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      )
    .then(result => {
      // console.log(result.body.getReader().closed.then(result => console.log(result)))

      document.cookie = `token=${result.headers.get('x-auth-token')}`
    })
    .catch(err => console.log(err))
  }

  return (
    <>
      <LoginWrapper>
        <LoginSectionStyled>
          <LoginLabel>{"Rejestracja"}</LoginLabel>
          <Input
            placeholder={"Imie"}
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <Input
            placeholder={"Email"}
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <Input
            placeholder={"Password"}
            value={password}
            onChange={event => setPassword(event.target.value)}
            type={"password"}
          />
          <ButtonWrapper>
            <MainButton
              label={"Załóż konto"}
              marginLeft={"auto"}
              marginTop={"20px"}
              onClick={handleCreate}
            />
          </ButtonWrapper>
          <LoginRegistrationLabel>{"Już masz konto?"}</LoginRegistrationLabel>
          <Link href={"/login"}>
            <RegistrationLink>{"Logowanie"}</RegistrationLink>
          </Link>
        </LoginSectionStyled>
      </LoginWrapper>
    </>
  )
}

export default Registration
