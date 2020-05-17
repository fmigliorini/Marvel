import styled from "styled-components";
import { device } from "../../constants/device";

const CharacterCard = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 100%;
  height: 380px;

  margin-bottom: 20px;

  background: url(${(props) => props.source ?? ""});
  background-color: grey;
  background-repeat: no-repeat;
  background-size: cover;

  font-weight: 700;

  @media ${device.tablet} {
    width: 49%;
    border-radius: 10px;

    -webkit-box-shadow: inset 0px 0px 248px -41px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: inset 0px 0px 248px -41px rgba(0, 0, 0, 0.75);
    box-shadow: inset 0px 0px 248px -41px rgba(0, 0, 0, 0.75);
  }
`;

export default CharacterCard;
