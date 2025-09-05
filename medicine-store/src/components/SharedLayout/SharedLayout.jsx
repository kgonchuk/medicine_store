import React, { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { ContainerLayout, MainContainer } from "../SharedLayout/SharedLayout.styled";
import Header from "../Header/Header";
import { SideBar } from "../SideBar/SideBar";



const SharedLayout = () => {

  return (
   <>
    <Header />
    
<SideBar />
   <MainContainer>
    <Outlet />
   </MainContainer>
   </>
  );
};

export default SharedLayout;