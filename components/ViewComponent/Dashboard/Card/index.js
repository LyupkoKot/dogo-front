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
import Link from 'next/link'


const Card = () => {
  return (
    <CardStyled>
      <CardImageStyled/>
      <CardDescriptionStyled>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <div>
            <CardHeader>
              {"Maria"}
            </CardHeader>
            <CardSubHeader>
              {"Jest niewielkim zwierzęciem. Ma czarne, miękkie futerko."}
            </CardSubHeader>
          </div>
          <CardLike>
            <input type="checkbox"/>
            <span/>
          </CardLike>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <div>
            <CardCategory>
              <div/>
              <label>
                {"Kot"}
              </label>
            </CardCategory>
          </div>
          <CardButton>
            <Link href={'offer/[id]'}>
              <CardButtonImage />
            </Link>
          </CardButton>
        </div>
      </CardDescriptionStyled>
    </CardStyled>
  )
}

export default Card
