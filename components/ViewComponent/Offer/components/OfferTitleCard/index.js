import React from "react";
import {
    OfferDateStyled,
    OfferLocationStyled,
    OfferPlaceDateStyled,
    OfferTitleCardStyled,
    OfferTitleStyled
} from "./view";
import TextIcon from "../../../../UIElements/TextIcon/index";

const OfferTitleCard = () => {
  return (
    <OfferTitleCardStyled>
      <OfferTitleStyled>
        <div className="title">{"Maria"}</div>
        <div className="icon"></div>
      </OfferTitleStyled>
      <OfferPlaceDateStyled>
        <OfferLocationStyled>
          <div className="icon"></div>
          <div className="title">Wrocław</div>
        </OfferLocationStyled>
        <OfferDateStyled>
            <TextIcon icon={"time"}/>
          <div className="title">14 Sierpnia</div>
        </OfferDateStyled>
      </OfferPlaceDateStyled>
    </OfferTitleCardStyled>
  );
};

export default OfferTitleCard;
