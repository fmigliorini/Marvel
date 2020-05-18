import styled from "styled-components";

const CharacterModalComicImage = styled.div`
  min-height: 300px;
  width: 100%;
  height: auto;

  background-color: grey;
  background: url(${(props) => props.source ?? ""});
  background-repeat: no-repeat;
  background-size: cover;
`;

export default CharacterModalComicImage;
