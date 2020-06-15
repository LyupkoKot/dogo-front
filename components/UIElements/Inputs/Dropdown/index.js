import React from 'react'
import { DropdownArrow, DropdownHeader, DropdownOption, DropdownOptions, DropdownStyled } from './views'
import ArrowDown from '../../../../themes/icons/ArrowDown'


const Dropdown = props => {
  return (
    <DropdownStyled width={props.width} marginLeft={props.marginLeft} marginTop={props.marginTop}>
      <DropdownHeader onClick={() => props.setActive()} width={props.width}>
        {props.value || props.placeholder}
        <DropdownArrow isActive={props.isActive}/>
      </DropdownHeader>
      {props.isActive
        && <DropdownOptions width={props.width}>
            {props.options.map((item, key) => (
              <DropdownOption onClick={() => {props.setValue(item); props.setActive()}} key={key}>
                {item}
              </DropdownOption>
            ))}
          </DropdownOptions>
        }
    </DropdownStyled>
  )
}

export default Dropdown
