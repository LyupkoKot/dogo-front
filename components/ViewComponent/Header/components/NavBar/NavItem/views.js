import styled from 'styled-components'
import { colors, fonts } from '../../../../../../themes'

const NavItemStyled = styled("div")`
  padding: 10px 36px 10px 36px;
  font-size: 14px;
  color: ${({ color }) => (color ? color : colors.black)};
  font-family: ${fonts.normal};
`;

export default NavItemStyled
