import React, { useCallback, useEffect, useState, useRef } from "react";
import Wrapper from "../../components/Wrapper";
import TopBar from "./TopBar";
import Results from "./Results";
import marvelService from "../../service/MarvelService";
import queryString from "query-string";

const Marvel = (props) => {
  const [characters, setCharacters] = useState([]);
  const [serachInput, setSearchInput] = useState(null);
  const [searchUrl, setSearchUrl] = useState(null);

  const timeoutRef = useRef(null); // REF TO KEEP TRACK OF THE TIMEOUT

  const getData = useCallback(async () => {
    if (serachInput) {
      console.log("searchInput", serachInput);
      return setCharacters(await marvelService.searchByName(serachInput));
    }
    if (searchUrl) {
      console.log("searchUrl", searchUrl);
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

  return (
    <Wrapper>
      <TopBar searchInput={updateSearch} />
      <Results characters={characters} />
    </Wrapper>
  );
};

export default Marvel;
