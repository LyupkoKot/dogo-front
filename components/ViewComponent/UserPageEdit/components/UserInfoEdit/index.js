import React from "react";
import { UserInfoStyled } from "../../../UserPage/components/UserInfo/view";
import Input from "../../../../UIElements/Inputs/Input";
import EditInput from "../../../../UIElements/Inputs/EditInput";
import { UserInfoInputs } from "./view";

const UserInfoEdit = () => {
  return (
    <UserInfoStyled>
        <EditInput placeholder={"Imie"} width={"410px"} />
        <EditInput placeholder={"Telefon"} width={"410px"}/>
        <EditInput placeholder={"Email"} width={"410px"} />
        <EditInput placeholder={"Miejscowość"} width={"410px"}/>
    </UserInfoStyled>
  );
};

export default UserInfoEdit;
