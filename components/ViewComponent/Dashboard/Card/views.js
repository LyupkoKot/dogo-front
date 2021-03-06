import styled from 'styled-components'
import { fonts, colors } from '../../../../themes'

const CardStyled = styled("div")`
  display: flex;
  flex-direction: row;
  height: 152px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  background-color: ${colors.white};
  margin-top: 20px;
`

const CardImageStyled = styled("div")`
  width: 200px;
  height: 100%;
  background-image: ${({ offer }) =>
    offer.animal_type === "Kot"
        ? `url(../../../../../static/images/cat.jpg)`
        : `url(../../../../../static/images/dog.jpg)`};
`

const CardDescriptionStyled = styled('div')`
  height: 100%;
  width: 50vw;
  padding: 10px;
  display: flex;
  flex-direction: column;
`

const CardHeader = styled("div")`
  font-size: 18px;
  color: ${colors.black};
  font-family: ${fonts.bold};
`

const CardSubHeader = styled("div")`
  font-size: 14px;
  color: ${colors.grey};
  font-family: ${fonts.normal};
`

const CardLike = styled("div")`
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: relative;
  margin-right: 8px;
  
  &>input {
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  
  &>span {
    position: absolute;
    height: inherit;
    width: inherit;
    background: ${({isActive}) => (isActive  ? `url(../../../../static/images/like.svg);`:`url(../../../../static/images/heartInActive.png);`)}
  }
  &>span:hover{
  background: url(../../../../static/images/like.svg)  ;
  }
  
`

const CardButton = styled("button")`
  height: 24px;
  width: 24px;
  background: linear-gradient(90deg, #FF7C30 -12.5%, #FF9C47 100%);
  box-shadow: 0 0 1px #828282;
  border-radius: 3px;
  border: none;
  padding: 0;
`

const CardButtonImage = styled("img")`
  height: inherit;
  width: inherit;
  background-repeat: no-repeat;
  background-image: url(../../../../static/images/leftArrow.svg);
  background-position: center;
`

const CardCategory = styled("div")`
  height: 15px;
  color: ${({category}) => (category === "primary" ? colors.grey : colors.lightGrey)};
  display: flex;
  flex-direction: row;
  
  &~div:not(:first-child) {
    margin-left: 12px;
  }

  &>div {
    height: 15px;
    width: 16px;
    background: url(${props => props.image ? props.image:''}) no-repeat;
  }
  
  &>label {
    margin-left: 5px;
    font-family: ${fonts.normal};
  }
`


export {
  CardStyled,
  CardImageStyled,
  CardDescriptionStyled,
  CardHeader,
  CardSubHeader,
  CardButton,
  CardButtonImage,
  CardLike,
  CardCategory
}
