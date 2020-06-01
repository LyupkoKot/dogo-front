import React from "react";
import { OfferStyled, OfferWrapper } from "../Offer/view";
import TopSection from "../../../layouts/sections/TopSection";
import UserImage from "../UserPage/components/UserImage";
import UserInfo from "../UserPage/components/UserInfo";
import UserImageEdit from "./components/UserImageEdit";
import UserInfoEdit from "./components/UserInfoEdit";
import Description from "../../UIElements/Description";
import UserDescriptionEdit from "./components/UserDescriptionEdit";
import UserEditSubmit from "./components/UserEditSubmit";

const UserPageEdit = () => {
  return (
    <OfferWrapper>
      <OfferStyled>
        <TopSection
          image={<UserImageEdit />}
          rightSideContent={<UserInfoEdit />}
        />
        <Description title={"Info"} content={<UserDescriptionEdit />} />
        <UserEditSubmit/>
      </OfferStyled>
    </OfferWrapper>
  );
};

export default UserPageEdit;
