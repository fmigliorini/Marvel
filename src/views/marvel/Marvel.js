import React from "react";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import HeaderLogo from "../../components/HeaderLogo";
import SearchInput from "../../components/SearchInput";

const Marvel = () => {
  return (
    <Wrapper>
      <Header>
        <HeaderLogo src="./images/marvel-logo.png" alt="marvel-logo" />
        <SearchInput />
      </Header>
    </Wrapper>
  );
};

export default Marvel;
