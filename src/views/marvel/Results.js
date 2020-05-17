import React from "react";
import { Star as StarIcon } from "react-feather";

import CharacterCard from "../../components/CharacterCard/CharacterCard";
import CharacterName from "../../components/CharacterCard/CharacterName";
import CharacterFavorite from "../../components/CharacterCard/CharacterFavorite";
import CharacterModalDetails from "../../components/CharacterModalDetails";
import Container from "../../components/Container";

const Results = (props) => {
  const { characters } = props;
  console.log(characters);
  return (
    <Container>
      <CharacterCard source="https://media.ambito.com/adjuntos/239/imagenes/036/917/0036917742.jpg">
        <CharacterName>Spider Man</CharacterName>
        <CharacterFavorite>
          <StarIcon />
        </CharacterFavorite>
      </CharacterCard>
      <CharacterModalDetails
        isOpen={true}
        title={`Title`}
        description={`Description`}
        imageSource="https://media.ambito.com/adjuntos/239/imagenes/036/917/0036917742.jpg"
      />
    </Container>
  );
};

export default Results;
