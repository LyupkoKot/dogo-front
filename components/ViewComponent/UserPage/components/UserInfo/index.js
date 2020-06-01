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

const UserInfo = () => {
  return (
    <UserInfoStyled>
      <UserInfoTop>
        <UserInfoTopLeft>
          <UserName>Bob</UserName>
          <UserContactsWrapper>
            <UserContact>
              <TextIcon icon={"phone"} iconSize={14} text={"+483421422888"} />
            </UserContact>
            <UserContact>
              <TextIcon icon={"mail"} text={"jakub@mail.com"} />
            </UserContact>
            <UserContact>
              <TextIcon
                icon={"social"}
                text={"www.facebook.com/jakub"}
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
          text={"Wroclaw"}
          textSize={12}
          textFont={fonts.normal}
        />
      </UserLocation>
    </UserInfoStyled>
  );
};

export default UserInfo;
