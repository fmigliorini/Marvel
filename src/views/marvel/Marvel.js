import React from "react";
import { Star as StarIcon } from "react-feather";

import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import HeaderLogo from "../../components/HeaderLogo";
import SearchInput from "../../components/SearchInput";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import CharacterName from "../../components/CharacterCard/CharacterName";
import CharacterFavorite from "../../components/CharacterCard/CharacterFavorite";
import Modal from "../../components/Modal/Modal";

const Marvel = () => {
  return (
    <>
      <Wrapper>
        <Header>
          <HeaderLogo src="./images/marvel-logo.png" alt="marvel-logo" />
          <SearchInput />
        </Header>
        <CharacterCard source="https://media.ambito.com/adjuntos/239/imagenes/036/917/0036917742.jpg">
          <CharacterName>Spider Man</CharacterName>
          <CharacterFavorite>
            <StarIcon />
          </CharacterFavorite>
        </CharacterCard>
      </Wrapper>
      <Modal />
    </>
  );
};

export default Marvel;
