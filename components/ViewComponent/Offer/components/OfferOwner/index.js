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

const OfferOwner = () => {
  return (
    <OwnerWrapper>
      <OwnerTopSection>
        <OwnerImage>
          <img src={"../static/images/kot.jpg"} />
        </OwnerImage>
        <OwnerName>Bob</OwnerName>
      </OwnerTopSection>
      <OwnerBottomSection>
        {typeof window !== 'undefined' && localStorage.getItem('token') !== null &&
        <OwnerInfo />}
          {typeof window == 'undefined' || localStorage.getItem('token') == null &&
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
