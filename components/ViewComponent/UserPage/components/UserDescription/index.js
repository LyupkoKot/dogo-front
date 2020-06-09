import React from "react";
import { UserDescriptionStyled, UserDescriptionText } from "./view";

const UserDescription = ({ user }) => {
  return (
    <UserDescriptionStyled>
      <UserDescriptionText>{user.about}</UserDescriptionText>
    </UserDescriptionStyled>
  );
};

export default UserDescription;
