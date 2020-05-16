import styled from "styled-components";

const CharacterCard = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 100%;
  height: 380px;

  background: url(${(props) => props.source ?? ""});
  background-color: grey;
  background-repeat: no-repeat;
  background-size: cover;

  font-weight: 700;
`;

export default CharacterCard;
