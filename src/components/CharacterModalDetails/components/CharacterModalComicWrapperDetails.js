import styled from "styled-components";
import { device } from "../../../constants/device";

const CharacterModalComicWrapperDetails = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;

  @media ${device.tablet} {
    flex-direction: column;
    padding: 0 20px;
  }
`;

export default CharacterModalComicWrapperDetails;
