import styled from "styled-components";
import { device } from "../constants/device";

const IconContainer = styled.div`
  display: flex;
  cursor: pointer;

  @media ${device.tablet} {
    border: none;
  }
`;

export default IconContainer;
