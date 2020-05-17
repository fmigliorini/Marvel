import React from "react";
import PropTypes from "prop-types";
import ImageSection from "./components/ImageSection";
import DescriptionSection from "./components/DescriptionSection";
import Modal from "../Modal";
import CharacterModalWrapper from "./components/CharacterModalWrapper";

const CharacterModalDetails = (props) => {
  const { isOpen, imageSource, title, description } = props;

  return (
    <Modal isOpen={isOpen}>
      <CharacterModalWrapper>
        <ImageSection source={imageSource}></ImageSection>
        <DescriptionSection>
          {`Title: ${title}`}
          {`Description: ${description}`}
        </DescriptionSection>
      </CharacterModalWrapper>
    </Modal>
  );
};

CharacterModalDetails.propTypes = {
  imageSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
};

CharacterModalDetails.defaultProps = {
  isOpen: false,
};

export default CharacterModalDetails;
