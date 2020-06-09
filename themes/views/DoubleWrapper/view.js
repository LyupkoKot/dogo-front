import styled from 'styled-components'

const DoubleWrapper = styled.div`
  width: ${props => props.width ? props.width : '100%'};
  display: flex;
  flex-direction: row;
`

export default DoubleWrapper
