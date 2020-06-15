import styled from 'styled-components'
import { colors, fonts } from '../../../../themes'

const SearchInputStyled = styled("input")`
  width: 60vw;
  height: 44px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  border: none;
  margin-top: 30px;
  padding: 20px 50px;
  background: url(../../../../static/images/searchIcon.svg) no-repeat 20px 50% ${colors.white};
  font-weight: ${fonts.normal};
  
  &::placeholder {
    color: ${colors.gray};
  }
`

export default SearchInputStyled
