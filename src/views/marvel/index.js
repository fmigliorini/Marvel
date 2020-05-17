import React, { useCallback, useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper";
import TopBar from "./TopBar";
import Results from "./Results";
import marvelService from "../../service/MarvelService";

const Marvel = () => {
  const [characters, setCharacters] = useState([]);
  const getData = useCallback(async () => {
    const data = await marvelService.getOne();
    setCharacters(data);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Wrapper>
      <TopBar />
      <Results characters={characters} />
    </Wrapper>
  );
};

export default Marvel;
