import styled from "styled-components";
import { device } from "../../../constants/device";

const DescriptionSection = styled.div`
  width: 100%;
  margin-bottom: 20px;
  align-self: center;

  @media ${device.tablet} {
    align-self: flex-start;
    box-sizing: border-box;
    padding: 0px 10px;
  }
`;

export default DescriptionSection;
