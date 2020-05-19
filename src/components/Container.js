import styled from "styled-components";
import { device } from "../constants/device";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;

  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 50px;

    & > div {
      margin-right: 1%;
    }
  }
`;

export default Container;
