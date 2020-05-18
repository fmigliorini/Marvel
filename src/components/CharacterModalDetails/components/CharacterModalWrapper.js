import styled from "styled-components";
import { device } from "../../../constants/device";

const CharacterModalWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin-bottom: 20px;
  @media ${device.tablet} {
    // flex-direction: row;
  }
`;

export default CharacterModalWrapper;
