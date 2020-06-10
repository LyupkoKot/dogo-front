import React from 'react';
import {OwnerInfoWrapper} from "./view";
import TextIcon from "../../../../../../UIElements/TextIcon";
import {colors, fonts} from "../../../../../../../themes";

const OwnerInfo = () => {

    return (
        <OwnerInfoWrapper>
            <TextIcon
                icon={"phone"}
                iconSize={14}
                text={"lox"}
                textSize={14}
                textFont={fonts.normal}
                textColor={colors.black}

            />
            <TextIcon
                icon={"mail"}
                iconSize={14}
                text={"lox"}
                textSize={14}
                textFont={fonts.normal}
                textColor={colors.black}

            />
            <TextIcon
                icon={"world"}
                iconSize={13}
                text={"lox"}
                textSize={12}
                textFont={fonts.normal}
                textColor={colors.orange}

            />

        </OwnerInfoWrapper>
    );
};

export default OwnerInfo;
