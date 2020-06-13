import React, { useCallback, useState } from 'react'
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
import { useDispatch } from 'react-redux'
import { setUserId } from '../../../../actions/setOfferValue'
import { CookiesManagerContext } from '../../../../contextProviders/cookiesManager'

const LoginSection = () => {

  const cookies = React.useContext(CookiesManagerContext)
  // console.log(cookiesMamanger.cookiesManager)

  const dispatch = useDispatch();
  const setUser = useCallback(val => dispatch(setUserId(val)), [
    dispatch
  ]);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const handleLogin =  () => {

    fetch(`http://77.55.221.84:3102/zpi/api/login`, {
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
      console.log(result)
      if (result.ok) {
        cookies.cookiesManager.setToken(result.headers.get('x-auth-token'))
        localStorage.setItem('token', result.headers.get('x-auth-token'))
        setUser(result.headers.get('x-auth-token'))
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
