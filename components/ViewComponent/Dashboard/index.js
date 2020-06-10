import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { DashboardWrapper, DashboardLabelStyled } from "./views";
import Link from "next/link";
import { OfferContext } from "../../../contextProviders/OfferContextProvider";
import { offer } from "../../../static/tempData/offers";
import axios from "axios";

const Dashboard = ({ setOffer }) => {
  const { filterOffers} = useContext(OfferContext);
  return (
    <DashboardWrapper>
      <DashboardLabelStyled>Ogłoszenie</DashboardLabelStyled>
      {filterOffers &&
        filterOffers.map((item, key) => (
          <Card offer={item} key={key} setOffer={setOffer} />
        ))}
    </DashboardWrapper>
  );
};

export default Dashboard;
