import React from 'react';
import {UserSubmitWrapper} from "./view";
import MainButton from "../../../../UIElements/Buttons/MainButton";

const UserEditSubmit = () => {
    return (
        <UserSubmitWrapper>
            <MainButton label={"Zapisz"}/>
        </UserSubmitWrapper>
    );
};

export default UserEditSubmit;
