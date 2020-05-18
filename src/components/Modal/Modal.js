import React from "react";
import PropTypes from "prop-types";
import { X as CloseIcon } from "react-feather";

import ModalWrapper from "./components/ModalWrapper";
import ModalCard from "./components/ModalCard";
import ModalHeader from "./components/ModalHeader";
import ModalTitle from "./components/ModalTitle";
import IconContainer from "../IconContainer";

const Modal = (props) => {
  const { isOpen, title, close } = props;

  return !isOpen ? null : (
    <ModalWrapper>
      <ModalCard>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <IconContainer>
            <CloseIcon
              onClick={() => {
                close();
              }}
            />
          </IconContainer>
        </ModalHeader>
        {props.children}
      </ModalCard>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
};

Modal.defaultProps = {
  isOpen: false,
};

export default Modal;
