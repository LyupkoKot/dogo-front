import styled from 'styled-components'
import { colors, fonts } from '../../../../themes'

const EditInputStyled = styled("input")`
  height: 40px;
  width: ${({width}) => (width ? width : "48%")};
  box-shadow: ${({active})=>(active ? "0px 0px 1px #828282": "0px 0px 6px rgba(0, 0, 0, 0.05)")};
  border-radius: 3px;
  padding: 11px 20px;
  border: none;
  font-family: ${fonts.normal};
  
  &::placeholder {
    color: ${({ textColor }) => (textColor ? textColor : colors.gray)};
    font-family: ${fonts.normal};
  }
  @media only screen and (max-width: 800px) {
    width: ${({width}) => (width ? width : "70%")};
  }
`

export default EditInputStyled
