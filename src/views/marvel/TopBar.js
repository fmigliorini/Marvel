import React from "react";

import Header from "../../components/Header";
import HeaderLogo from "../../components/HeaderLogo";
import SearchInput from "../../components/SearchInput";

const TopBar = () => {
  return (
    <Header>
      <HeaderLogo src="./images/marvel-logo.png" alt="marvel-logo" />
      <SearchInput />
    </Header>
  );
};

export default TopBar;
