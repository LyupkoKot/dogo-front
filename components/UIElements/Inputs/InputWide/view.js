import styled from 'styled-components'

const InputWideStyled = styled.textarea`
  width: ${({width}) => (width ? width : "48%")};
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 11px 20px;
  border: none;
  margin: ${props => props.float ? '10px 0 0 0' : '10px auto 0 auto'};
  float: ${props => props.float};
  resize: none;
  font-family: Quicksand, sans-serif;
  
  @media only screen and (max-width: 800px) {
    width: ${({width}) => (width ? width : "70%")};
  }
`

export default InputWideStyled
