import React from "react";
import {DashboardLabelStyled, DashboardWrapper} from "../Dashboard/views";
import Card from "../Dashboard/Card";

const Favourites = ({ data, setOffer }) => {
  return (
    <DashboardWrapper>
      <DashboardLabelStyled>Ulubione</DashboardLabelStyled>
      {data && data.map((item, key) => (
        <Card offer={item} key={key} setOffer={setOffer} />
      ))}
    </DashboardWrapper>
  );
};

export default Favourites;
