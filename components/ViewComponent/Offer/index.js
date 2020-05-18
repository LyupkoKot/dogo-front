import React from "react";
import { OfferStyled, OfferWrapper } from "./view";
import TopSection from "../../../layouts/sections/TopSection";
import OfferDescription from "./components/OfferDescription";
import OfferImportant from "./components/OfferImportant";
import OfferImage from "./components/OfferImage";
import RightSideContent from "./components/RightSideContent";
import {TopSectionStyled} from "../../../layouts/sections/TopSection/view";

const Offer = () => {
  return (
    <OfferWrapper>
      <OfferStyled>
        <TopSection image={<OfferImage/>} rightSideContent={<RightSideContent/>} />
        <OfferDescription />
        <OfferImportant/>
      </OfferStyled>
    </OfferWrapper>
  );
};

export default Offer;
