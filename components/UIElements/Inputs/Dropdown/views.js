import styled from 'styled-components'

const DropdownStyled = styled.div`
  width: ${props => props.width ? props.width : '410px'};
  margin-left: ${props => props.marginLeft ? props.marginLeft : '0'};
  display: flex;
  flex-direction: column;
  margin-top: ${props => props.marginTop ? props.marginTop : '10px'};
`

const DropdownHeader = styled.div`
  width: ${props => props.width ? props.width : '410px'};
  display: flex;
  position: relative;
  height: 40px;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-family: Quicksand, sans-serif;
  color: #3D4E55;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  user-select: none;
  background-color: #ffffff;
`

const DropdownArrow = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  right: 10px;
  top: 10px;
  background-image: ${props => props.isActive ? 'url(../../../../static/icons/arrowUp.svg)' : 'url(../../../../static/icons/arrowDown.svg)'};
  background-repeat: no-repeat;
  background-position: center;
`

const DropdownCross = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  right: 10px;
  top: 10px;
  background-image: url(../../../../static/icons/close.svg);
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: center;
`

const DropdownOptions = styled.div`
  width: ${props => props.width ? props.width : '410px'};
  position: absolute;
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
  z-index: 1000;
`

const DropdownOption = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-family: Quicksand, sans-serif;
  color: #3D4E55;
  user-select: none;
  background-color: #ffffff;
`

export { DropdownStyled, DropdownHeader, DropdownArrow, DropdownOptions, DropdownOption, DropdownCross }
