import React, { useState } from 'react'
import RadioSectionWrapper from './view'
import IconButton from '../../Buttons/IconButton'

const RadioSection = props => {

  const [selected, setSelected] = useState(null)

  return (
    <RadioSectionWrapper marginTop={props.marginTop}>
    {props.items.map((item, key) => (
      <IconButton
        key={key}
        isActive={selected === key}
        onClick={() => {
          selected !== key ? setSelected(key) : setSelected(null);
          props.onChange({...props.data, [props.setKey]: selected !== key ? item : ''});
          props.onPress()
        }}
        width={props.width}
        photo={props.photos[key]}
      >
        {item}
      </IconButton>
      ))}
    </RadioSectionWrapper>
  )
}

export default RadioSection
