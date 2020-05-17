import styled from "styled-components";
import { device } from "../constants/device";

const SearchInput = styled.input`
  display: flex;
  max-width: 100%;

  padding: 10px;

  border: 1px solid;
  border-radius: 10px;
  border-color: black;

  color: black;
  font-size: 1rem;

  @media ${device.tablet} {
    width: 100%;
    padding: 0 20px;
  }
`;

export default SearchInput;
