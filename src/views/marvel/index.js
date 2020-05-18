import React, { useCallback, useEffect, useState, useRef } from "react";
import Wrapper from "../../components/Wrapper";
import TopBar from "./TopBar";
import Results from "./Results";
import marvelService from "../../service/MarvelService";
import queryString from "query-string";

import CharacterModalDetails from "../../components/CharacterModalDetails";

const Marvel = (props) => {
  const [characters, setCharacters] = useState([]);
  const [serachInput, setSearchInput] = useState(null);
  const [searchUrl, setSearchUrl] = useState(null);

  const [characterSelected, setCharacterSelected] = useState(null);
  const [showMoreInfo, setShowMoreInfo] = useState(true);

  const timeoutRef = useRef(null); // REF TO KEEP TRACK OF THE TIMEOUT

  const getData = useCallback(async () => {
    if (serachInput) {
      return setCharacters(await marvelService.searchByName(serachInput));
    }
    if (searchUrl) {
      setCharacters(await marvelService.searchByName(searchUrl));
    } else {
      setCharacters(await marvelService.getOne());
    }
  }, [serachInput, searchUrl]);

  // only the firstTime
  useEffect(() => {
    const { character } = queryString.parse(props.location.search);
    setSearchUrl(character);
  }, [props.location.search]);

  // on input change
  useEffect(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      getData(serachInput);
    }, 600);
  }, [getData, serachInput]);

  const updateSearch = (value) => {
    setSearchInput(value);
  };

  const selectCharacter = (id) => {
    setCharacterSelected(id);
    setShowMoreInfo(true);
  };

  return (
    <>
      <Wrapper>
        <TopBar searchInput={updateSearch} />
        <Results onSelect={selectCharacter} characters={characters} />
      </Wrapper>
      {characterSelected && (
        <CharacterModalDetails
          isOpen={showMoreInfo}
          characterId={characterSelected}
        />
      )}
    </>
  );
};

export default Marvel;
