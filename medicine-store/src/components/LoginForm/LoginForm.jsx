import { FormContainer, HeadBlock, HeadLogo, IconLogin } from "./LoginForm.styled";
import icon from '../../assets/sprite.svg'

const LoginForm = () => {return (
<FormContainer>
    <HeadBlock>
  <img src={require('../../images/loginForm.svg').default} alt='mySvgImage' width={44} height={44} />
  {/* <svg className="icon-login" width="17" height="17"> <use href={`${sprite}#icon-account-group`} /></svg> */}
   <use href={`${icon}#icon-burger-menu`} />
 <IconLogin><use href=""/></IconLogin>
</HeadBlock>
</FormContainer>);};
export default LoginForm;

