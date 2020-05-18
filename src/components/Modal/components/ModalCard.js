import styled from "styled-components";

const ModalCard = styled.div`
  display: flex;
  flex-direction: column;

  max-height: calc(100vh - 210px);
  width: 75%;

  padding: 10px;

  background-color: white;
  align-self: center;

  border-radius: 10px;
  overflow-y: auto;
`;

export default ModalCard;
