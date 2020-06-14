import React from "react";
import EditInput from "../../../../UIElements/Inputs/EditInput";
import { UserDescriptionStyled } from "../../../UserPage/components/UserDescription/view";
import { UserDescriptionInput } from "./view";

const UserDescriptionEdit = ({ data, setData }) => {
  return (
    <UserDescriptionStyled>
      <UserDescriptionInput>
        <EditInput
          placeholder={"Napisz tutaj ważną informacje..."}
          width={"100%"}
          value={data.about}
          onChange={event => { setData({ ...data, about: event.target.value })}}
        />
      </UserDescriptionInput>
    </UserDescriptionStyled>
  );
};

export default UserDescriptionEdit;
