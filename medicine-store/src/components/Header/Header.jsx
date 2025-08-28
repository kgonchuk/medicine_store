import Logo from "../Logo/Logo";
import { SubTitle } from "../SubTitle/SubTitle";
import { Title } from "../Title/Title";

const Header = () => {
  return (
    <header>
     <Logo />
     <Title />
     <SubTitle/>
    </header>
  );
}
export default Header;