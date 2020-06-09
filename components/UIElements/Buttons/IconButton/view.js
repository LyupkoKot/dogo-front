import styled from 'styled-components'

const IconButtonStyled = styled.button`
  width: 200px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: ${props => props.isActive ? '2px solid #ff9b47' : 'none'};
  border-radius: 3px;
  background-color: #ffffff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
  margin-right: 10px;
  overflow: hidden;
`

const IconButtonImage = styled.img`
  height: 20px;
  width: 20px;
`

const IconButtonText = styled.div`
  font-size: 14px;
  color: #3D4E55;
  font-family: Quicksand, sans-serif;
  margin-left: 5px;
`

export { IconButtonStyled, IconButtonImage, IconButtonText }
