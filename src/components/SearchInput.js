import styled from "styled-components";
import { device } from "../constants/device";

const SearchInput = styled.input`
  display: flex;
  box-sizing: border-box;
  max-width: 100%;
  width: 100%;
  
  padding: 12px 20px 12px 40px;
  margin-bottom: ${(props) => props.theme.defaultSpacing};
  
  border: 2px solid #ccc;
  border-radius: 4px;

  color: ${(props) => props.theme.fontColor};
  font-size: ${(props) => props.theme.fontSize};

  background-color: white;
  background: url("${(props) => props.theme.searchIconUrl}");
  background-position: 10px 10px;
  background-repeat: no-repeat;

  @media ${device.tablet} {
    width: 100%;

    margin-bottom: 0px;
  }
`;

export default SearchInput;
