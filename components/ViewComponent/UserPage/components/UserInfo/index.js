import React from "react";
import {
  UserContact,
  UserContactsWrapper,
  UserInfoStyled,
  UserInfoTop,
  UserInfoTopLeft,
  UserLocation,
  UserName,
  UserReport
} from "./view";
import TextIcon from "../../../../UIElements/TextIcon";
import { colors, fonts } from "../../../../../themes";
import ReportButton from "../../../../UIElements/Buttons/ReportButton";

const UserInfo = ({user}) => {
  return (
    <UserInfoStyled>
      <UserInfoTop>
        <UserInfoTopLeft>
          <UserName>{user.name}</UserName>
          <UserContactsWrapper>
            <UserContact>
              <TextIcon icon={"phone"} iconSize={14} text={user.phone_number} />
            </UserContact>
            <UserContact>
              <TextIcon icon={"mail"} text={user.email} />
            </UserContact>
            <UserContact>
              <TextIcon
                icon={"social"}
                text={user.facebook}
                textColor={colors.orange}
              />
            </UserContact>
          </UserContactsWrapper>
        </UserInfoTopLeft>
        <UserReport>
          <ReportButton label={"Zgłoś naruszenie"} />
        </UserReport>
      </UserInfoTop>
      <UserLocation>
        <TextIcon
          icon={"location"}
          text={user.city}
          textSize={12}
          textFont={fonts.normal}
        />
      </UserLocation>
    </UserInfoStyled>
  );
};

export default UserInfo;
