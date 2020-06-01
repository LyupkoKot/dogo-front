import React from "react";
import MainLayout from "../../layouts/MainLayout";
import GlobalStyle from '../../libs/globalStyles'
import UserPageEdit from "../../components/ViewComponent/UserPageEdit";

const Edit = () => (
    <MainLayout>
        <GlobalStyle/>
        <UserPageEdit/>
    </MainLayout>
);

export default Edit;
