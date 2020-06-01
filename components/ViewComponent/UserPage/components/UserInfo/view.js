import styled from "styled-components";
import { fonts, colors } from "../../../../../themes";

const UserInfoStyled = styled("div")`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  flex-direction: column;
  background: #ffffff;
  border-radius: 4px;
  padding: 20px 30px 20px 30px;
`;
const UserInfoTop = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const UserName = styled("div")`
  font-size: 24px;
  color: ${colors.black};
  font-family: ${fonts.bold};
`;
const UserInfoTopLeft = styled("div")`
  display: flex;
  flex-direction: column;
`;
const UserContactsWrapper = styled("div")`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`;
const UserContact = styled("div")`
  margin-bottom: 10px;
`;
const UserLocation = styled("div")`
`;
const UserReport = styled("div")`
  display: block;
`;
export {
  UserInfoStyled,
  UserInfoTop,
  UserInfoTopLeft,
  UserName,
  UserContact,
  UserContactsWrapper,
  UserLocation,
  UserReport
};
