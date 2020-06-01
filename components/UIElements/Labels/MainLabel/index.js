import React from 'react'
import MainLabelStyled from './view'

const MainLabel = props => {
  return (
    <MainLabelStyled>
      {props.title}
    </MainLabelStyled>
  )
}

export default MainLabel
