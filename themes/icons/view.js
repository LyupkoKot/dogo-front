import styled from 'styled-components'
import { colors } from '../../themes'


const IconWrapper = styled('div')`
  && {
    svg {
      width: ${({ size }) => size}px;
      height: ${({ size }) => size}px;
      fill: ${({ iconFill }) => (iconFill ? iconFill : colors.gray)};
    }
  }
`;

export { IconWrapper }
