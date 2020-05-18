import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Star as StarIcon } from "react-feather";

import { FavoriteContext } from "../../context/FavoriteContext";
import Header from "../../components/Header";
import HeaderLogo from "../../components/HeaderLogo";
import SearchInput from "../../components/SearchInput";
import IconContainer from "../../components/IconContainer";
import FavoriteButton from "../../components/FavoriteButton";

const TopBar = (props) => {
  const { searchInput } = props;
  const [search, setSearch] = useState("");
  const [favorite, updateFavorite] = useContext(FavoriteContext);

  return (
    <Header>
      <HeaderLogo src="./images/marvel-logo.png" alt="marvel-logo" />
      <SearchInput
        value={search}
        onChange={(event) => {
          searchInput(event.target.value);
          setSearch(event.target.value);
        }}
      />
      <IconContainer>
        <StarIcon
          onClick={() => {
            if (search && search !== +"") updateFavorite(search);
          }}
        />
      </IconContainer>
      <FavoriteButton
        onClick={() => {
          setSearch(favorite);
          searchInput(favorite);
        }}
      >
        {"Favorite"}
      </FavoriteButton>
    </Header>
  );
};

TopBar.propTypes = {
  searchInput: PropTypes.func.isRequired,
};

export default TopBar;
