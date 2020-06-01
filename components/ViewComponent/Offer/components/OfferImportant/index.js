import React from "react";
import {
  DescriptionListStyled,
  DescriptionTitleStyled,
  OfferDescriptionStyled,
  OfferDescriptionWrapper,
  ParameterTitleStyled
} from "../OfferDescription/view";
import { fonts, colors } from "../../../../../themes";
import {offer} from "../../../../../static/tempData/offers";
import {ImportantWrapper} from "./view";

const OfferImportant = () => {
  return (


      <ImportantWrapper>
          <DescriptionListStyled>
              <li>
                  <ParameterTitleStyled color={colors.white}>
                      Płeć: <span className={"parameter"}>{offer.sex}</span>
                  </ParameterTitleStyled>
              </li>
              <li>
                  <ParameterTitleStyled color={colors.white}>
                      Rozmiar: <span className={"parameter"}>{offer.size}</span>
                  </ParameterTitleStyled>
              </li>
              <li>
                  <ParameterTitleStyled color={colors.white}>
                      Wiek: <span className={"parameter"}>{offer.age}</span>
                  </ParameterTitleStyled>
              </li>

          </DescriptionListStyled>
      </ImportantWrapper>

  );
};

export default OfferImportant;
