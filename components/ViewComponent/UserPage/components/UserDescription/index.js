import React from "react";
import { UserDescriptionStyled, UserDescriptionText } from "./view";

const UserDescription = ({ user }) => {
  return (
    user&&<UserDescriptionStyled>
      <UserDescriptionText>{user.about}</UserDescriptionText>
    </UserDescriptionStyled>
  );
};

export default UserDescription;
