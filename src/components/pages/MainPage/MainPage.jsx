import React from "react";
import YearGroupBox from "../../molecules/YearGroupBox";
import styled from "styled-components";

function MainPage() {
  return (
    <Wrapper>
      <YearGroupBox />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

export default MainPage;
