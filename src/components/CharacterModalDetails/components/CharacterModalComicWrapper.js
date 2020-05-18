import styled from "styled-components";
import { device } from "../../../constants/device";

const CharacterModalComicWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  @media ${device.tablet} {
    flex-direction: row;
    margin-bottom: 20px;
  }
`;

export default CharacterModalComicWrapper;
