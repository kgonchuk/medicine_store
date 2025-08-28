import { LogoContainer, LogoImg } from "./Logo.styled";
import logo from "../../images/loginForm.svg";

const Logo = () => {
  return <LogoContainer><LogoImg src={logo} alt="logo"/></LogoContainer>;
}
export default Logo;