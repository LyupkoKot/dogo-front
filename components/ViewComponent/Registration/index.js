import React from 'react';
import {
    ButtonWrapper,
    LoginLabel,
    LoginRegistrationLabel,
    LoginSectionStyled, LoginWrapper, RegistrationLink
} from "../../UIElements/Sections/LoginSection/views";
import Input from "../../UIElements/Inputs/Input";
import MainButton from "../../UIElements/Buttons/MainButton";
import Link from "next/link";

const Registration = () => {
    return (
        <div>
            <LoginWrapper>
                <LoginSectionStyled>
                    <LoginLabel>{"Rejestracja"}</LoginLabel>
                    <Input placeholder={"Imie"} />
                    <Input placeholder={"Email"} />
                    <Input placeholder={"Password"} type={"password"} />
                    <ButtonWrapper>
                        <MainButton
                            label={"Załóż konto"}
                            marginLeft={"auto"}
                            marginTop={"20px"}
                        />
                    </ButtonWrapper>
                    <LoginRegistrationLabel>{"Już masz konto?"}</LoginRegistrationLabel>
                    <Link href={"/login"}>
                        <RegistrationLink>{"Logowanie"}</RegistrationLink>
                    </Link>
                </LoginSectionStyled>
            </LoginWrapper>
        </div>
    );
};

export default Registration;
