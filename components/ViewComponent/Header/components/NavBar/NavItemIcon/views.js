import styled from 'styled-components'
import fonts from '../../../../../../themes/fonts'
import colors from '../../../../../../themes/colors'

export const NavItemIconStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 36px 10px 36px;
  color: ${({ color }) => (color ? color : colors.black)};
`

export const NavItemIconImage = styled.div`
  flex: 1;
  height: 38px;
  width: 38px;
  background-color: black;
  border-radius: 50%;
  border: 1px solid ${colors.orange};
  margin-left: 10px;
`

export const NavItemIconText = styled.div`
  flex: 2;
  font-size: 14px;
  font-family: ${fonts.normal};
`
