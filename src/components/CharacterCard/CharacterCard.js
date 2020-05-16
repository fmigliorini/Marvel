import styled from "styled-components";

const CharacterCard = styled.div`
  display: flex;
  max-width: 100%;
  height: 380px;
  background: url(${(props) => props.source ?? ""});
  background-color: grey;
  font-weight: 700;
`;

export default CharacterCard;
