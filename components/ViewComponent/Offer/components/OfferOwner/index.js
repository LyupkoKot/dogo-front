import React from "react";
import {
  OwnerBottomSection,
  OwnerImage,
  OwnerName,
  OwnerTopSection,
  OwnerWrapper
} from "./view";
import OwnerInfo from "./components/OwnerInfo";
import TextButton from "../../../../UIElements/Buttons/TextButton";
import { colors } from "../../../../../themes";
import Link from "next/link";
import {CookiesManagerContext} from "../../../../../contextProviders/cookiesManager";

const OfferOwner = ({user}) => {
    const userToken = React.useContext(CookiesManagerContext).cookiesManager.getToken('x-auth-token');

    return (
    <OwnerWrapper>
      <OwnerTopSection>
        <OwnerImage>
          <img src={"../static/images/kot.jpg"} />
        </OwnerImage>
        {user&&
        <OwnerName>{user.name}</OwnerName>}
      </OwnerTopSection>
      <OwnerBottomSection>
        {userToken &&
        <OwnerInfo user={user}/>}
          {!userToken &&
        <Link href="/login">
          <TextButton
            label={"Zaloguj się aby zobaczyć dane kontaktowe "}
            color={colors.blue}
          />
        </Link>}
      </OwnerBottomSection>
    </OwnerWrapper>
  );
};

export default OfferOwner;
