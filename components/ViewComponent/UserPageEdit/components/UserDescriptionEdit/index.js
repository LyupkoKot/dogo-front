import React from "react";
import EditInput from "../../../../UIElements/Inputs/EditInput";
import { UserDescriptionStyled } from "../../../UserPage/components/UserDescription/view";
import { UserDescriptionInput } from "./view";

const UserDescriptionEdit = () => {
  return (
    <UserDescriptionStyled>
      <UserDescriptionInput>
        <EditInput placeholder={"Napisz tutaj ważną informacje..."} width={"100%"} />
      </UserDescriptionInput>
    </UserDescriptionStyled>
  );
};

export default UserDescriptionEdit;
