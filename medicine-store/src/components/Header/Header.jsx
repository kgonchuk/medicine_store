import Logo from "../Logo/Logo";
import { LogOutBtn } from "../LogOutBtn/LogOutBtn";
import { SubTitle } from "../SubTitle/SubTitle";
import { Title } from "../Title/Title";
import { HeaderStyled, HeaderTitle, HeaderWrapper, LogOutContainer, MenuMibileBtn, MenuMobileBtn, MobileMenuIcon } from "./Header.styled";
import  sprite  from "../../assets/sprite-2.svg";
import { useState } from "react";
import { SideBar } from "../SideBar/SideBar";

const Header = ({onOpenSidebar}) => {
   
   
  return (
    
    <HeaderStyled>
 
     

     <Logo />
     <HeaderTitle> 
      <Title />
      <SubTitle/>
     </HeaderTitle>
    
    <LogOutContainer><LogOutBtn/></LogOutContainer>
     


    </HeaderStyled>
    
  )
}
export default Header;