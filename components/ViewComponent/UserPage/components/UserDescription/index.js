import React from "react";
import { UserDescriptionStyled, UserDescriptionText } from "./view";

const UserDescription = ({ user }) => {
  return (
    <UserDescriptionStyled>
      {user&&<UserDescriptionText>{user.about}</UserDescriptionText>}
    </UserDescriptionStyled>
  );
};

export default UserDescription;
