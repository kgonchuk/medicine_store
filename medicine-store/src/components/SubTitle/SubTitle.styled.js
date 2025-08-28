import styled from "styled-components";
import color from "../../global/globalColors";
export const SubTitleContainer = styled.div`
  text-align: center;
  margin: 10px 0;
`;
export const SubTitltLink = styled.a`
 font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0em;
  text-decoration: none;
  color: ${color.blackLight};
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
export const SubTitleText = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0em;
  color:${color.blackLight}
@media (min-width: 768px) {
    font-size: 22px;
    line-height: 24px;
  }     `;