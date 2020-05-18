import React, { useEffect, useCallback, useState } from "react";
import PropTypes from "prop-types";

import Modal from "../Modal";
import CharacterModalWrapper from "./components/CharacterModalWrapper";
import CharacterModalTitle from "./components/CharacterModalTitle";
import CharacterModalComicWrapper from "./components/CharacterModalComicWrapper";
import CharacterModalComicImage from "./components/CharacterModalComicImage";
import CharacterModalComicTitle from "./components/CharacterModalComicTitle";
import CharacterModalComicDescription from "./components/CharacterModalComicDescription";
import marvelService from "../../service/MarvelService";

const CharacterModalDetails = (props) => {
  const [comics, setComics] = useState([]);

  const { isOpen, name, characterId } = props;

  const getComics = useCallback(async () => {
    const data = await marvelService.getCommicsByCharacterId(characterId);
    setComics(data);
  }, [characterId]);

  useEffect(() => {
    getComics();
  }, [getComics, characterId]);

  return (
    <Modal isOpen={isOpen}>
      <CharacterModalWrapper>
        <CharacterModalTitle>{name}</CharacterModalTitle>
        <CharacterModalComicWrapper>
          {comics &&
            comics.map((comic) => {
              console.log(comic);
              const { title, thumbnail, description } = comic;
              const imageSource = `${thumbnail.path}.${thumbnail.extension}`;
              return (
                <>
                  <CharacterModalComicImage source={imageSource} />
                  <CharacterModalComicTitle>{title}</CharacterModalComicTitle>
                  <CharacterModalComicDescription>
                    {description}
                  </CharacterModalComicDescription>
                </>
              );
            })}
        </CharacterModalComicWrapper>
      </CharacterModalWrapper>
    </Modal>
  );
};

CharacterModalDetails.propTypes = {
  characterId: PropTypes.number.isRequired,
  isOpen: PropTypes.bool,
};

CharacterModalDetails.defaultProps = {
  isOpen: false,
  name: "spder",
};

export default CharacterModalDetails;
