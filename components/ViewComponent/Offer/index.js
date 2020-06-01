import React from "react";
import { OfferStyled, OfferWrapper } from "./view";
import TopSection from "../../../layouts/sections/TopSection";
import OfferDescription from "./components/OfferDescription";
import OfferImportant from "./components/OfferImportant";
import OfferImage from "./components/OfferImage";
import RightSideContent from "./components/RightSideContent";
import { TopSectionStyled } from "../../../layouts/sections/TopSection/view";
import OfferTitleCard from "./components/OfferTitleCard";
import Description from "../../UIElements/Description";
import { colors } from "../../../themes";
import OfferCardSmall from "../OfferCardSmall";

const Offer = () => {
  return (
    <OfferWrapper>

      <OfferStyled>
        <TopSection
          image={<OfferImage />}
          rightSideContent={<OfferTitleCard />}
        />
        <Description title={"Opis"} content={<OfferDescription />} />
        <Description
          title={"Wazne"}
          content={<OfferImportant />}
          textColor={colors.orange}
          backgroundColor={colors.orange}
        />
        <OfferCardSmall/>
      </OfferStyled>
    </OfferWrapper>
  );
};

export default Offer;
