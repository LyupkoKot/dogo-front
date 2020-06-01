import React from 'react'
import { CategoryButtonStyled, CategoryButtonBarStyled } from './views'

const CategoryButtonBar = () => {
  return (
    <CategoryButtonBarStyled>
      <CategoryButtonStyled isActive={true}>
        {"Koty"}
      </CategoryButtonStyled>
      <CategoryButtonStyled>
        {"Psy"}
      </CategoryButtonStyled>
      <CategoryButtonStyled>
        {"Inne"}
      </CategoryButtonStyled>
    </CategoryButtonBarStyled>
  )
}

export default CategoryButtonBar
