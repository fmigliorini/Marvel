import styled from "styled-components";
import { device } from "../constants/device";

const FavoriteButton = styled.button`
  display: inline-flex;
  margin-bottom: ${(props) => props.theme.defaultSpacing};
  padding: 0.25em 1em;
  border: none;
  height: 36px;
  font-size: ${(props) => props.theme.fontSize};
  font-family: ${(props) => props.theme.fontFamily};
  cursor: pointer;
  background-color: #6200ee;
  color: white;

  position: relative;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border-radius: 4px;
}
  @media ${device.tablet} {
    height: 100%;
    width: 200px;
    padding: 0 20px;
    box-sizing: border-box;
    margin-left: ${(props) => props.theme.defaultSpacing};
    margin-bottom: 0px;
  }
`;

export default FavoriteButton;
