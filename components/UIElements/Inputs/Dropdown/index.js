import React from 'react'
import { DropdownHeader, DropdownOption, DropdownOptions, DropdownStyled } from './views'


const Dropdown = props => {
  return (
    <DropdownStyled width={props.width} marginLeft={props.marginLeft}>
      <DropdownHeader onClick={() => props.setActive()} width={props.width}>
        {props.value || props.placeholder}
      </DropdownHeader>
      {props.isActive
        ? <DropdownOptions>
            {props.options.map((item, key) => (
              <DropdownOption onClick={() => props.setValue(item)} key={key}/>
            ))}
          </DropdownOptions>
        : null}
    </DropdownStyled>
  )
}

export default Dropdown
