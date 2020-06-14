import React from 'react';
import {UserSubmitWrapper} from "./view";
import MainButton from "../../../../UIElements/Buttons/MainButton";

const UserEditSubmit = ({onPress}) => {
    return (
        <UserSubmitWrapper>
            <MainButton onClick={onPress} label={"Zapisz"}/>
        </UserSubmitWrapper>
    );
};

export default UserEditSubmit;
