import React, { useState } from 'react'
import RadioSectionWrapper from './view'
import IconButton from '../../Buttons/IconButton'

const RadioSection = props => {

  const [selected, setSelected] = useState(-1)

  return (
    <RadioSectionWrapper>
    {props.items.map((item, key) => (
      <IconButton
        key={key}
        isActive={selected === key}
        onClick={() => {setSelected(key); props.onChange({...props.data, [props.setKey]: item})}}
        // photo={props.photo[key]}
      >
        {item}
      </IconButton>
      ))}
    </RadioSectionWrapper>
  )
}

export default RadioSection
