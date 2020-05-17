import React from "react";
import { Star as StarIcon } from "react-feather";

import CharacterCard from "../../components/CharacterCard/CharacterCard";
import CharacterName from "../../components/CharacterCard/CharacterName";
import CharacterFavorite from "../../components/CharacterCard/CharacterFavorite";
import Container from "../../components/Container";

const Results = (props) => {
  const { characters } = props;
  console.log(characters);
  return (
    <Container>
      {characters &&
        characters.map((character) => {
          const { name, thumbnail } = character;
          const urlImage = `${thumbnail.path}.${thumbnail.extension}`;
          return (
            <CharacterCard source={urlImage}>
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

export default Results;
