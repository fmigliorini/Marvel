import styled from "styled-components";
import { device } from "../../../constants/device";

const ComicModalWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export default ComicModalWrapper;
