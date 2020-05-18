import styled from "styled-components";
import { device } from "../constants/device";

const Header = styled.div`
  display: flex;
  width: 100%;

  margin-bottom: 20px;

  justify-content: center;
  flex-flow: column;

  //justify-content: space-between;
  @media ${device.tablet} {
    padding-top: 10px;
    flex-direction: row;
    height: 50px;

    justify-content: space-around;
  }
`;

export default Header;
