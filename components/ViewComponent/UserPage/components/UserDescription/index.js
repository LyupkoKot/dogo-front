import React from "react";
import { UserDescriptionStyled, UserDescriptionText } from "./view";

const UserDescription = () => {
  return (
    <UserDescriptionStyled>
      <UserDescriptionText>

        Poproszę dzwonić w godzinach: 10.00-15.00. Zwierzęcia z ogłoszeń
        znajdują się w schowku: “Dom dla wszystkich”, można kontaktować się z
        nim.
      </UserDescriptionText>
    </UserDescriptionStyled>
  );
};

export default UserDescription;
