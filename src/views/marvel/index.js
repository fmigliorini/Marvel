import React, { useCallback, useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper";
import TopBar from "./TopBar";
import Results from "./Results";
import marvelService from "../../service/MarvelService";
import queryString from "query-string";

const Marvel = (props) => {
  const [characters, setCharacters] = useState([]);

  const getData = useCallback(async (characterSearchName) => {
    if (characterSearchName) {
      setCharacters(await marvelService.searchByName(characterSearchName));
    } else {
      setCharacters(await marvelService.getOne());
    }
  }, []);

  useEffect(() => {
    const { character } = queryString.parse(props.location.search);
    getData(character);
  }, [getData, props.location.search]);

  return (
    <Wrapper>
      <TopBar />
      <Results characters={characters} />
    </Wrapper>
  );
};

export default Marvel;
