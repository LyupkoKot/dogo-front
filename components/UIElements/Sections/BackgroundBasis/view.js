import styled from 'styled-components'

const BackgroundBasisStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
  background-color: #ffffff;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0'};
`

export default BackgroundBasisStyled
