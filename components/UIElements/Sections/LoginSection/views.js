import styled from 'styled-components'
import { colors, fonts } from '../../../../themes'

const LoginSectionStyled = styled("div")`
  width: 100%;
  height: 500px;
  border: 1px solid #E0E0E0;
  border-radius: 4px;
  background-color: ${colors.white};
  margin-top: 73px;
  display: flex;
  flex-direction: column;
  text-align: center;
`

const LoginLabel = styled("label")`
  font-size: 24px;
  font-family: ${fonts.normal};
  color: ${colors.black};
  margin: 40px 0 50px 0;
`

const LoginRegistrationLabel = styled("label")`
  font-size: 13px;
  font-family: ${fonts.normal};
  color: ${colors.black};
  margin-top: 120px;
`

const RegistrationLink = styled("a")`
  color: ${colors.blue};
  font-family: ${fonts.normal};
  text-underline: none;
  cursor: pointer;
  margin-top: 5px;
`

export { LoginSectionStyled, LoginLabel, LoginRegistrationLabel, RegistrationLink }
