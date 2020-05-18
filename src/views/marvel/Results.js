import React from "react";
import PropTypes from "prop-types";

import { Star as StarIcon } from "react-feather";

import CharacterCard from "../../components/CharacterCard/CharacterCard";
import CharacterName from "../../components/CharacterCard/CharacterName";
import CharacterFavorite from "../../components/CharacterCard/CharacterFavorite";
import Container from "../../components/Container";

const Results = (props) => {
  const { characters, onSelect } = props;

  return (
    <Container>
      {characters &&
        characters.map((character) => {
          const { id, name, thumbnail } = character;
          const urlImage = `${thumbnail.path}.${thumbnail.extension}`;
          return (
            <CharacterCard
              key={id}
              source={urlImage}
              onClick={() => {
                onSelect(id);
              }}
            >
              <CharacterName>{name}</CharacterName>
              <CharacterFavorite>
                <StarIcon />
              </CharacterFavorite>
            </CharacterCard>
          );
        })}
    </Container>
  );
};

Results.propTypes = {
  characters: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Results;
