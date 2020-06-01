import React from 'react';
import EditInputStyled from "./view";

const EditInput = ({ placeholder, type, textColor, active, ...rest }) => {
    return (
        <EditInputStyled placeholder={placeholder} type={type} textColor={textColor} active={active} {...rest}/>
    );
};

export default EditInput;
