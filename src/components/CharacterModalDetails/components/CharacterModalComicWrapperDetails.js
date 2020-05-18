import styled from "styled-components";
import { device } from "../../../constants/device";

const CharacterModalComicWrapperDetails = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  @media ${device.tablet} {
    padding: 0 20px;
  }
`;

export default CharacterModalComicWrapperDetails;
