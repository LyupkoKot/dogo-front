import React from 'react';
import {ImageEditBox, ImageStyled, ImageWrapper} from "./view";

const UserImageEdit = () => {
    return (
        <ImageWrapper>
            <ImageEditBox>
                <ImageStyled>
                    <img src={"../../../../static/images/jack.jpg"} alt={"Jack"}/>
                </ImageStyled>
            </ImageEditBox>

        </ImageWrapper>
    );
};

export default UserImageEdit;
