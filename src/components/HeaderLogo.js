import styled from "styled-components";
import { device } from "../constants/device";

const HeaderLogo = styled.img`
  width: 100%;
  margin-bottom: 20px;
  align-self: center;

  @media ${device.tablet} {
    width: auto;
    height: 100%;
    margin-bottom: auto;
    margin-right: 20px;
  }
`;

export default HeaderLogo;
