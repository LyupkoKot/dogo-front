import React from "react";
import {
  DescriptionListStyled,
  DescriptionTitleStyled,
  OfferDescriptionStyled,
  OfferDescriptionWrapper,
  ParameterTitleStyled
} from "../OfferDescription/view";
import { fonts, colors } from "../../../../../themes";
import {ImportantWrapper} from "./view";

const OfferHealth = ({offer}) => {
  return (


      <ImportantWrapper>
          <DescriptionListStyled>
              { offer.vaccines&&<li>
                  <ParameterTitleStyled >
                      Szczepienia podstawowe: <span className={"parameter"}>{offer.vaccines}</span>
                  </ParameterTitleStyled>
              </li>}
              {offer.allergies&&<li>
                  <ParameterTitleStyled >
                      Uczulenia: <span className={"parameter"}>{offer.allergies}</span>
                  </ParameterTitleStyled>
              </li>}
              {offer.health_status&&<li>
                  <ParameterTitleStyled >
                      Stan zdrowia: <span className={"parameter"}>{offer.health_status}</span>
                  </ParameterTitleStyled>
              </li>}
              <li>
                  <ParameterTitleStyled >
                      Zaburzenia behawioralne: <span className={"parameter"}>{offer.behavioral_disorders ? offer.behavioral_disorders_description : "Niema"}</span>
                  </ParameterTitleStyled>
              </li>

          </DescriptionListStyled>
      </ImportantWrapper>

  );
};

export default OfferHealth;
