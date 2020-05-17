import React from "react";
import Wrapper from "../../components/Wrapper";
import Loading from "../../components/Loading";
import HeaderTitle from "../../components/HeaderTitle";

const Error = () => (
  <Wrapper>
    <Loading>
      <HeaderTitle>Loading</HeaderTitle>
    </Loading>
  </Wrapper>
);

export default Error;
