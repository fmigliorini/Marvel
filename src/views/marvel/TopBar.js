import React from "react";
import PropTypes from "prop-types";

import Header from "../../components/Header";
import HeaderLogo from "../../components/HeaderLogo";
import SearchInput from "../../components/SearchInput";

const TopBar = (props) => {
  const { searchInput } = props;
  return (
    <Header>
      <HeaderLogo src="./images/marvel-logo.png" alt="marvel-logo" />
      <SearchInput
        onChange={(event) => {
          searchInput(event.target.value);
        }}
      />
    </Header>
  );
};

TopBar.propTypes = {
  searchInput: PropTypes.func.isRequired,
};

export default TopBar;
