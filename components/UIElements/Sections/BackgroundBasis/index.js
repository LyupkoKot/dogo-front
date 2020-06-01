import React from 'react'
import BackgroundBasisStyled from './view'

const BackgroundBasis = props => {
  return (
    <BackgroundBasisStyled marginBottom={props.marginBottom}>
      {props.children}
    </BackgroundBasisStyled>
  )
}

export default BackgroundBasis
