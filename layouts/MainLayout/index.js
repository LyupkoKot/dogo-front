import React from "react";
import Header from "../../components/ViewComponent/Header";
import { ContentWrapper } from "../../themes/views/Layout/views";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
