import styled from 'styled-components'
import { fonts, colors } from '../../../themes'

const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  
  margin: 0 auto;
`

const DashboardLabelStyled = styled("div")`
  font-size: 24px;
  font-family: ${fonts.normal};
  color: ${colors.grey};
  margin: 30px 0 20px 0;
`

export { DashboardWrapper, DashboardLabelStyled }
