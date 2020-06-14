import React from "react";
import { OwnerInfoWrapper } from "./view";
import TextIcon from "../../../../../../UIElements/TextIcon";
import { colors, fonts } from "../../../../../../../themes";

const OwnerInfo = ({ user }) => {
  return (
    <div>
        {user&&<OwnerInfoWrapper>
        {user.phone_number && (
          <TextIcon
            icon={"phone"}
            iconSize={14}
            text={user.phone_number}
            textSize={14}
            textFont={fonts.normal}
            textColor={colors.black}
          />
        )}
        {user.email && (
          <TextIcon
            icon={"mail"}
            iconSize={14}
            text={user.email}
            textSize={14}
            textFont={fonts.normal}
            textColor={colors.black}
          />
        )}
        {user.facebook && (
          <TextIcon
            icon={"world"}
            iconSize={13}
            text={user.facebook}
            textSize={12}
            textFont={fonts.normal}
            textColor={colors.orange}
          />
        )}
      </OwnerInfoWrapper>}
    </div>
  );
};

export default OwnerInfo;
