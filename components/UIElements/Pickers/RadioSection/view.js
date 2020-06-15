import styled from 'styled-components'

const RadioSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${props => props.marginTop ? props.marginTop : '20px'};
`

export default RadioSectionWrapper
