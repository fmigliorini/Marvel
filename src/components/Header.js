import styled from "styled-components";
import { device } from "../constants/device";

const Header = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: ${(props) => props.theme.defaultSpacing};
  justify-content: center;
  flex-flow: column;

  @media ${device.tablet} {
    padding-top: 10px;
    flex-direction: row;
    height: 50px;
    justify-content: space-around;
  }
`;

export default Header;
