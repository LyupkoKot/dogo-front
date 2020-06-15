import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import GlobalStyle from "../libs/globalStyles";
import LoginSection from "../components/UIElements/Sections/LoginSection";
import UserContextProvider, {
  UserContext
} from "../contextProviders/UserContextProvider";

const Login = () => {
  return (
    <MainLayout>
      <GlobalStyle />
      <UserContextProvider>
        <LoginSection />
      </UserContextProvider>
    </MainLayout>
  );
};

export default Login;
