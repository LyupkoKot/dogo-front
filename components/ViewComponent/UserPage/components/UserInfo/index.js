import React, {useContext} from "react";
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
import EditButton from "../../../../UIElements/Buttons/TextButton";
import Link from "next/link";
import {UserContext} from "../../../../../contextProviders/UserContextProvider";

const UserInfo = ({ user }) => {
  const {setUserData} = useContext(UserContext);
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
          <Link href="/user/edit">
            <EditButton label={"Edytuj"}  icon={"edit"} iconColor={colors.orange} onClick={()=>setUserData(user)}/>
          </Link>
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
