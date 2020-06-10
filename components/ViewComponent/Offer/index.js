import React from "react";
import { OfferStyled, OfferWrapper } from "./view";
import TopSection from "../../../layouts/sections/TopSection";
import OfferDescription from "./components/OfferDescription";
import OfferHealth from "./components/OfferHealth";
import OfferImage from "./components/OfferImage";
import RightSideContent from "./components/RightSideContent";
import { TopSectionStyled } from "../../../layouts/sections/TopSection/view";
import OfferTitleCard from "./components/OfferTitleCard";
import Description from "../../UIElements/Description";
import { colors } from "../../../themes";
import OfferCardSmall from "../OfferCardSmall";
import OfferOwner from "./components/OfferOwner";

const Offer = ({offer}) => {

  return (
    <OfferWrapper>

      <OfferStyled>
        <TopSection
          image={<OfferImage />}
          rightSideContent={<OfferTitleCard offer={offer}/>}
        />
        <Description title={"Opis"} content={<OfferDescription offer={offer}/>} />
        <Description
          title={"Zdrowie"}
          content={<OfferHealth offer={offer} />}
        />
        <Description
            title={"Właściciel"}
            content={<OfferOwner/>}

        />
      </OfferStyled>
    </OfferWrapper>
  );
};

export default Offer;
