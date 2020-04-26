import styled from 'styled-components'
import { fonts, colors } from '../../../../themes'

const CardStyled = styled("div")`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 152px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
`

const CardImageStyled = styled("div")`
  width: 200px;
  height: 100%;
  background-image: url(../../../../static/images/cat1.jpg);
`

const CardDescriptionStyled = styled('div')`
  height: 100%;
  width: 50vw;
  padding: 10px;
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

const CardLike = styled("label")`
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: relative;
  float: right;
  top: -40px;
  
  &>input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  
  &>span {
    position: absolute;
    top: 0;
    left: 0;
    height: inherit;
    width: inherit;
    background: url(../../../../static/images/like.svg);
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
  position: relative;
  top: 68px;
  left: 43.9vw;
  
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
  color: ${({ category }) => (category === "primary" ? colors.grey : colors.lightGrey)};
  display: flex;
  flex-direction: row;

  &>div {
    height: 15px;
    width: 16px;
    background: url(../../../../static/images/cat.svg);
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
