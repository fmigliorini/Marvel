import React from "react";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import HeaderLogo from "../../components/HeaderLogo";
import SearchInput from "../../components/SearchInput";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import CharacterName from "../../components/CharacterCard/CharacterName";

const Marvel = () => {
  return (
    <Wrapper>
      <Header>
        <HeaderLogo src="./images/marvel-logo.png" alt="marvel-logo" />
        <SearchInput />
      </Header>
      <CharacterCard source="https://media.ambito.com/adjuntos/239/imagenes/036/917/0036917742.jpg">
        <CharacterName>Spider Man</CharacterName>
      </CharacterCard>
    </Wrapper>
  );
};

export default Marvel;
