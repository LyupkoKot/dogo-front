import React from "react";
import MainLayout from "../../layouts/MainLayout";
import GlobalStyle from "../../libs/globalStyles";
import UserPageEdit from "../../components/ViewComponent/UserPageEdit";
import UserContextProvider, { UserContext } from "../../contextProviders/UserContextProvider";

const Edit = () => (
  <MainLayout>
    <GlobalStyle />
    <UserContextProvider>
      <UserPageEdit />
    </UserContextProvider>
  </MainLayout>
);

export default Edit;
