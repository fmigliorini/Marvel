import styled from "styled-components";
import { device } from "../constants/device";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 10px;

  @media ${device.tablet} {
    // flex-direction: row;
  }
`;

export default Wrapper;
