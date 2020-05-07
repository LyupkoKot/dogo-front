import styled from 'styled-components'
import { colors, fonts } from '../../../../themes'

const CategoryButtonStyled = styled("div")`
  width: 31.3%;
  height: 44px;
  background-color: ${props => props.isActive ? colors.mainBackground : colors.white};
  border-radius: 3px;
  margin-right: 2vw;
  border: ${props => props.isActive ? "2px solid orange" : "2px solid white"};
  box-shadow: ${props => props.isActive ? "none" : "0 0 6px rgba(0, 0, 0, 0.1)"};
  background-image: url(../../../../static/images/cat.svg);
  background-repeat: no-repeat;
  background-position: 40% 50%;
  font-family: ${fonts.normal};
  color: ${colors.black};
  padding: 11px 0 0 14%;
  cursor: pointer;
  
  &:last-child {
    margin-right: 0;
  }
`

const CategoryButtonBarStyled = styled("div")`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`

export { CategoryButtonStyled, CategoryButtonBarStyled }
