import styled from "styled-components";

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  height: 100%;
  width: 100%;
  bottom: 0;
  left: 0;

  position: fixed;

  background-color: rgba(0, 0, 0, 0.5) !important;
`;

export default ModalWrapper;
