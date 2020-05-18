import React from "react";
import {
  DescriptionListStyled,
  DescriptionTextStyled,
  DescriptionTitleStyled,
  OfferDescriptionStyled,
  OfferDescriptionWrapper,
  ParameterTitleStyled
} from "./view";
import { offer } from "../../../../../static/tempData/offers";
const description = ["Płeć", "Rozmiar", "Wiek", "Rasa", "Kolor"];

const OfferDescription = () => {
  return (
    <OfferDescriptionWrapper>
      <DescriptionTitleStyled>Opis</DescriptionTitleStyled>
      <OfferDescriptionStyled>
        <DescriptionTextStyled>
          Jest niewielkim zwierzęciem. Ma czarne, miękkie futerko. Koniuszek
          ogona i łapki ma białe. Duże żółte oczy które widać w ciemności, a
          jego łapy są zakończone ostrymi pazurami. Gdy jest zdenerwowany jego
          ogon nerwowo uderza o podłogę.
        </DescriptionTextStyled>
        <DescriptionListStyled>
          <li>
            <ParameterTitleStyled>
              Płeć: <span className={"parameter"}>{offer.sex}</span>
            </ParameterTitleStyled>
          </li>
          <li>
            <ParameterTitleStyled>
              Rozmiar: <span className={"parameter"}>{offer.size}</span>
            </ParameterTitleStyled>
          </li>
          <li>
            <ParameterTitleStyled>
              Wiek: <span className={"parameter"}>{offer.age}</span>
            </ParameterTitleStyled>
          </li>
          <li>
            <ParameterTitleStyled>
              Rasa: <span className={"parameter"}>{offer.race}</span>
            </ParameterTitleStyled>
          </li>
          <li>
            <ParameterTitleStyled>
              Kolor: <span className={"parameter"}>{offer.color}</span>
            </ParameterTitleStyled>
          </li>
          <li>
            <ParameterTitleStyled>
              Szczepienie: <span className={"parameter"}>{offer.vaccine}</span>
            </ParameterTitleStyled>
          </li>
          <li>
            <ParameterTitleStyled>
              Stopień socjalizacji:{" "}
              <span className={"parameter"}>{offer.socialization}</span>
            </ParameterTitleStyled>
          </li>
        </DescriptionListStyled>
      </OfferDescriptionStyled>
    </OfferDescriptionWrapper>
  );
};

export default OfferDescription;
