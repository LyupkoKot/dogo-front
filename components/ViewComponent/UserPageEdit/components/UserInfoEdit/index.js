import React from "react";
import { UserInfoStyled } from "../../../UserPage/components/UserInfo/view";
import Input from "../../../../UIElements/Inputs/Input";
import EditInput from "../../../../UIElements/Inputs/EditInput";
import { UserInfoInputs } from "./view";
import {validateEmail} from "../../../../../utils/functions";

const UserInfoEdit = ({  setData, data }) => {
  return (
    <UserInfoStyled>
      <EditInput
        placeholder={"Imie"}
        value={data.name}
        width={"410px"}
        onChange={event => setData({ ...data, name: event.target.value })}
      />
      <EditInput
        placeholder={"Telefon"}
        value={data.phone_number}
        width={"410px"}
        onChange={event => setData({ ...data, phone_number: event.target.value })}
      />
      <EditInput
        placeholder={"Email"}
        value={data.email}
        width={"410px"}
        onChange={event => setData({ ...data, email: event.target.value})}
      />
      <EditInput
        placeholder={"Miejscowość"}
        value={data.city}
        width={"410px"}
        onChange={event => setData({ ...data, city: event.target.value })}

      />
    </UserInfoStyled>
  );
};

export default UserInfoEdit;
