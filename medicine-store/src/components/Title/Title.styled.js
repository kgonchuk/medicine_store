import styled from "styled-components"; 
import color from "../../global/globalColors";
export  const TittleContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`;
export const TittleText = styled.h1`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0em;
  color:${color.primaryDark};
@media (min-width: 768px) {
   
    line-height: 28px;
  }

`;