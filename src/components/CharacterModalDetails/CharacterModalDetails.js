import React, { useEffect, useCallback, useState } from "react";
import PropTypes from "prop-types";

import Modal from "../Modal";
import CharacterModalWrapper from "./components/CharacterModalWrapper";
import CharacterModalComicWrapper from "./components/CharacterModalComicWrapper";
import CharacterModalComicImage from "./components/CharacterModalComicImage";
import CharacterModalComicTitle from "./components/CharacterModalComicTitle";
import CharacterModalComicDescription from "./components/CharacterModalComicDescription";
import marvelService from "../../service/MarvelService";
import CharacterModalComicWrapperDetails from "./components/CharacterModalComicWrapperDetails";

const CharacterModalDetails = (props) => {
  const [comics, setComics] = useState([]);

  const { isOpen, characterName, characterId, close } = props;

  const getComics = useCallback(async () => {
    const data = await marvelService.getCommicsByCharacterId(characterId);
    setComics(data);
  }, [characterId]);

  useEffect(() => {
    getComics();
  }, [getComics, characterId]);

  return (
    <Modal isOpen={isOpen} title={characterName} close={close}>
      <CharacterModalWrapper>
        {comics &&
          comics.map((comic) => {
            const { title, thumbnail, description } = comic;
            const imageSource = `${thumbnail.path}.${thumbnail.extension}`;
            return (
              <>
                <CharacterModalComicWrapper>
                  <CharacterModalComicImage source={imageSource} />
                  <CharacterModalComicWrapperDetails>
                    <CharacterModalComicTitle>{title}</CharacterModalComicTitle>
                    <CharacterModalComicDescription>
                      {description}
                    </CharacterModalComicDescription>
                  </CharacterModalComicWrapperDetails>
                </CharacterModalComicWrapper>
              </>
            );
          })}
      </CharacterModalWrapper>
    </Modal>
  );
};

CharacterModalDetails.propTypes = {
  characterId: PropTypes.number.isRequired,
  characterName: PropTypes.number.isRequired,
  isOpen: PropTypes.bool,
  close: PropTypes.func.isRequired,
};

CharacterModalDetails.defaultProps = {
  isOpen: false,
  name: "spder",
};

export default CharacterModalDetails;
