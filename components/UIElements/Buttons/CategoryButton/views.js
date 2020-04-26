import styled from 'styled-components'
import { colors, fonts } from '../../../../themes'

const CategoryButtonStyled = styled("div")`
  width: 19vw;
  height: 44px;
  background-color: ${colors.mainBackground};
  border-radius: 3px;
  margin-right: 2vw;
  border: 2px solid orange;
  background-image: url(../../../../static/images/cat.svg);
  background-repeat: no-repeat;
  background-position: 40% 50%;
  font-family: ${fonts.normal};
  color: ${colors.black};
  padding: 11px 0 0 14%;
  
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
