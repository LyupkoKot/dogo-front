import React from "react";
import {
  ButtonWrapper,
  LoginLabel,
  LoginRegistrationLabel,
  LoginSectionStyled,
  LoginWrapper,
  RegistrationLink
} from "./views";
import Input from "../../Inputs/Input";
import MainButton from "../../Buttons/MainButton";
import Link from "next/link";

const LoginSection = () => {
  return (
    <LoginWrapper>
      <LoginSectionStyled>
        <LoginLabel>{"Logowanie"}</LoginLabel>
        <Input placeholder={"Email"} />
        <Input placeholder={"Password"} type={"password"} />
        <ButtonWrapper>
          <MainButton
            label={"Zaloguj sie"}
            marginLeft={"auto"}
            marginTop={"20px"}
          />
        </ButtonWrapper>
        <LoginRegistrationLabel>{"Niemasz konta?"}</LoginRegistrationLabel>
        <Link href={"/registration"}>
          <RegistrationLink>{"Rejestracja"}</RegistrationLink>
        </Link>
      </LoginSectionStyled>
    </LoginWrapper>
  );
};

export default LoginSection;
