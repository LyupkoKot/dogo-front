import styled from 'styled-components'

const IconButtonStyled = styled.button`
  width: ${props => props.width ? props.width :'200px'};
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

const IconButtonImage = styled.div`
  height: 20px;
  width: 20px;
  background-image: ${props => props.photo ? `url(${props.photo})` : null};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  color: transparent;
`

const IconButtonText = styled.div`
  font-size: 14px;
  color: #3D4E55;
  font-family: Quicksand, sans-serif;
  margin-left: 5px;
`

export { IconButtonStyled, IconButtonImage, IconButtonText }
