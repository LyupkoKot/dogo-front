import React, { useState } from 'react'
import { useRouter } from 'next/router'
import {
  ButtonWrapper,
  LoginLabel,
  LoginRegistrationLabel,
  LoginSectionStyled,
  LoginWrapper,
  RegistrationLink
} from "./views"
import Input from "../../Inputs/Input"
import MainButton from "../../Buttons/MainButton"
import Link from "next/link"

const LoginSection = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const handleLogin =  () => {

    fetch('http://192.168.1.246:3001/zpi/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(result => {
      if (result.ok) {
        localStorage.setItem('token', result.headers.get('x-auth-token'))
        router.push('/')
      }
    })
    .catch(err => console.log(err))
  }

  return (
    <LoginWrapper>
      <LoginSectionStyled>
        <LoginLabel>{"Logowanie"}</LoginLabel>
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
            label={"Zaloguj sie"}
            marginLeft={"auto"}
            marginTop={"20px"}
            onClick={handleLogin}
          />
        </ButtonWrapper>
        <LoginRegistrationLabel>{"Niemasz konta?"}</LoginRegistrationLabel>
        <Link href={"/registration"}>
          <RegistrationLink>{"Rejestracja"}</RegistrationLink>
        </Link>
      </LoginSectionStyled>
    </LoginWrapper>
  )
}

export default LoginSection;
