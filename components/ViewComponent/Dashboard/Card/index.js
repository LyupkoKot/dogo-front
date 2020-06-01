import React from 'react'
import {
  CardStyled,
  CardImageStyled,
  CardDescriptionStyled,
  CardHeader,
  CardSubHeader,
  CardButton,
  CardButtonImage,
  CardLike,
  CardCategory
} from './views'


const Card = () => {
  return (
    <CardStyled>
      <CardImageStyled/>
      <CardDescriptionStyled>
        <CardHeader>
          {"Maria"}
        </CardHeader>
        <CardSubHeader>
          {"Jest niewielkim zwierzęciem. Ma czarne, miękkie futerko."}
        </CardSubHeader>
        <CardLike>
          <input type="checkbox"/>
          <span/>
        </CardLike>
        <CardButton>
          <CardButtonImage/>
          {/*<Link href="/"/>*/}
        </CardButton>
        <CardCategory>
          <div/>
          <label>
            {"Kot"}
          </label>
        </CardCategory>
      </CardDescriptionStyled>
    </CardStyled>
  )
}

export default Card
