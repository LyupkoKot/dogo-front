import React from 'react'
import { LoginLabel, LoginRegistrationLabel, LoginSectionStyled, RegistrationLink } from './views'
import Input from '../../Inputs/Input'
import MainButton from '../../Buttons/MainButton'
import Link from 'next/link'

const LoginSection = () => {
  return (
    <LoginSectionStyled>
      <LoginLabel>
        {"Logowanie"}
      </LoginLabel>
      <Input placeholder={"Email"}/>
      <Input placeholder={"Password"} type={"password"}/>
      <MainButton label={"Zaloguj sie"} marginLeft={"auto"} marginTop={"20px"}/>
      <LoginRegistrationLabel>
        {"Niemasz konta?"}
      </LoginRegistrationLabel>
        <Link href={"/"}>
          <RegistrationLink>
            {"Rejestracja"}
          </RegistrationLink>
        </Link>
    </LoginSectionStyled>
  )
}

export default LoginSection
