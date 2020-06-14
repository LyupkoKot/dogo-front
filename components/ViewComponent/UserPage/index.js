import React, { useState, useEffect, useContext } from "react";
import { OfferStyled, OfferWrapper } from "../Offer/view";
import TopSection from "../../../layouts/sections/TopSection";
import UserImage from "./components/UserImage";
import UserInfo from "./components/UserInfo";
import Description from "../../UIElements/Description";
import UserDescription from "./components/UserDescription";
import { UserContext } from "../../../contextProviders/UserContextProvider";

const UserPage = () => {
  const { user } = useContext(UserContext);
  return (
    <OfferWrapper>
      {user !== null && (
        <OfferStyled>
          <TopSection
            image={<UserImage user={user} />}
            rightSideContent={<UserInfo user={user} />}
          />
          <Description
            title={"Info"}
            content={<UserDescription user={user} />}
          />
        </OfferStyled>
      )}
    </OfferWrapper>
  );
};

export default UserPage;
