import styled from 'styled-components'
import { colors } from '../../../themes'

const HeaderStyled = styled("div")`
  height: 70px;
  width: 100vw;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.14);
  background-color: ${colors.white};
`;

const HeaderWrapper = styled("div")`
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
`

export { HeaderStyled, HeaderWrapper }
