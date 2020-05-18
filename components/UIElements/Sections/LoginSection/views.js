import styled from "styled-components";
import { colors, fonts } from "../../../../themes";

const LoginWrapper = styled("div")`
  display: flex;
  justify-content: center;
  min-width: 1270px;
`;
const LoginSectionStyled = styled("div")`
  width: 60%;
  
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background-color: ${colors.white};
  margin-top: 73px;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0 0 50px 0;
`;

const LoginLabel = styled("label")`
  font-size: 24px;
  font-family: ${fonts.normal};
  color: ${colors.black};
  margin: 40px 0 50px 0;
`;

const LoginRegistrationLabel = styled("label")`
  font-size: 13px;
  font-family: ${fonts.normal};
  color: ${colors.black};
  margin-top: 120px;
`;

const RegistrationLink = styled("a")`
  color: ${colors.orange};
  font-family: ${fonts.normal};
  text-underline: none;
  cursor: pointer;
  margin-top: 5px;
  
`;
const ButtonWrapper = styled("div")`
  margin-top: 20px;
`;
const SocialWrapper = styled("div")``;
const SocialButton = styled("div")`


`;

export {
  LoginSectionStyled,
  LoginLabel,
  LoginRegistrationLabel,
  RegistrationLink,
  LoginWrapper,
  ButtonWrapper
};
