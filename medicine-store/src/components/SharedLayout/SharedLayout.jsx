import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ContainerLayout, MainContainer } from "../SharedLayout/SharedLayout.styled";
import Header from "../Header/Header";


const SharedLayout = () => {
  return (
   <>
    <Header />
   <MainContainer>
    <Outlet />
   </MainContainer>
   </>
  );
};

export default SharedLayout;