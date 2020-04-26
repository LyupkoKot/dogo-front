import React from 'react'
import { CategoryButtonStyled, CategoryButtonBarStyled } from './views'

const CategoryButtonBar = () => {
  return (
    <CategoryButtonBarStyled>
      <CategoryButtonStyled>
        {"Koty"}
      </CategoryButtonStyled>
      <CategoryButtonStyled/>
      <CategoryButtonStyled/>
    </CategoryButtonBarStyled>
  )
}

export default CategoryButtonBar
