import React from "react";
import {
  DescriptionListStyled,
  DescriptionTextStyled,
  DescriptionTitleStyled,
  OfferDescriptionStyled,
  OfferDescriptionWrapper,
  ParameterTitleStyled
} from "./view";
const description = ["Płeć", "Rozmiar", "Wiek", "Rasa", "Kolor"];

const OfferDescription = ({ offer }) => {
  return (
    <OfferDescriptionStyled>
        {offer.description&&<DescriptionTextStyled>{offer.description}</DescriptionTextStyled>}
      <DescriptionListStyled>
        { offer.color&& <li>
          <ParameterTitleStyled>
            Maść: <span className={"parameter"}>{offer.color}</span>
          </ParameterTitleStyled>
        </li>}
        {offer.animal_type&&<li>
          <ParameterTitleStyled>
            Rasa: <span className={"parameter"}>{offer.animal_type}</span>
          </ParameterTitleStyled>
        </li>}
        {offer.cost_of_living&&<li>
          <ParameterTitleStyled>
            Koszty utrzymania:{" "}
            <span className={"parameter"}>{offer.cost_of_living}</span>
          </ParameterTitleStyled>
        </li>}
      </DescriptionListStyled>
    </OfferDescriptionStyled>
  );
};

export default OfferDescription;
