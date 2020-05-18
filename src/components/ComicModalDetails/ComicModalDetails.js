import React from "react";
import PropTypes from "prop-types";
import ImageSection from "./components/ImageSection";
import DescriptionSection from "./components/DescriptionSection";
import Modal from "../Modal";
import ComicModalWrapper from "./components/ComicModalWrapper";

const ComicModalDetails = (props) => {
  const { isOpen, imageSource, title, description } = props;

  return (
    <Modal isOpen={isOpen}>
      <ComicModalWrapper>
        <ImageSection source={imageSource}></ImageSection>
        <DescriptionSection>
          {`Title: ${title}`}
          {`Description: ${description}`}
        </DescriptionSection>
      </ComicModalWrapper>
    </Modal>
  );
};

ComicModalDetails.propTypes = {
  imageSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
};

ComicModalDetails.defaultProps = {
  isOpen: false,
};

export default ComicModalDetails;
