import React from 'react';
import MainButton from "../../../../../UIElements/Buttons/MainButton";
import Link from 'next/link'

const AddOfferButton = () => {
    return (
      <Link href={'/offer/addOffer'}>
        <MainButton label={"Dodaj ogłoszenie"}/>
      </Link>
    );
};

export default AddOfferButton;
