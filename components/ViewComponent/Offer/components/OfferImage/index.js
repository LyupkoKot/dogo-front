import React, {useState} from 'react';
import {OfferImageStyled} from "./view";

const OfferImage = ({offer}) => {
    const [animal_type, setAnimalType] = useState();
/*
    offer.animal_type === "Kot" ? setAnimalType("catbig.jpg") : setAnimalType("dogbig.jpg");
*/


    return (

            <OfferImageStyled offer={offer} animal_type={animal_type}/>

    );
};

export default OfferImage;
