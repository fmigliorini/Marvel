import styled from "styled-components";
import { device } from "../constants/device";

const IconContainer = styled.div`
  display: flex;
  heigth: 100%;
  width: 100%;
  align-items: center;

  border: 1px solid black;
  border-radius: 10px;

  margin: 10px 0;
  justify-content: center;

  @media ${device.tablet} {
    border: none;
    width: 50px;
    margin: auto;
  }
`;

export default IconContainer;
