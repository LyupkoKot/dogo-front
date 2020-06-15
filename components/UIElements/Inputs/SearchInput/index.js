import React from 'react'
import SearchInputStyled from './views'

const SearchInput = props => {
  return (
    <SearchInputStyled
      placeholder={"Wyszukiwanie"}
      onChange={props.onChange}
      value={props.value}
    />
  )
}

export default SearchInput
