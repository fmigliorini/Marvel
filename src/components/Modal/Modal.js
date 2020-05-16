import React from "react";
import PropTypes from "prop-types";
import ModalWrapper from "./components/ModalWrapper";
import ModalCard from "./components/ModalCard";

const Modal = (props) => {
  const { isOpen } = props;

  return !isOpen ? null : (
    <ModalWrapper>
      <ModalCard>{props.children}</ModalCard>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
};

Modal.defaultProps = {
  isOpen: false,
};

export default Modal;
