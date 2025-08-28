import styled from "styled-components";
import { breakpoints } from "../../global/breakPoints";

export const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 335px;
  min-width: 320px;
  padding: 24px 20px;

  @media screen and (min-width: ${breakpoints.medium}) {
    max-width: 704px;
    padding: 0 32px;
  }

  @media screen and (min-width: ${breakpoints.large}) {
    max-width: 1216px;

    padding: 0 64px;
  }
`;