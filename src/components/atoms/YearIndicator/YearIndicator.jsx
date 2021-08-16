import React from "react";
import styled from "styled-components";
import { Color } from "../../style";

function YearIndicator({ numberText, chineseText, themeText }) {
  return (
    <Wrapper>
      <NumberText>{numberText}</NumberText>
      <ChineseText>{chineseText}</ChineseText>
      <ThemeText>{themeText}</ThemeText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 300px;
  min-width: 300px;
  display: flex;
`;

const NumberText = styled.span`
  color: ${Color.red};
  border: solid 2px ${Color.red};
  padding: 2px 8px;
  font-weight: bold;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  text-align: center;
  width: 33.33%;
`;

const ChineseText = styled.span`
  color: ${Color.white};
  background-color: ${Color.red};
  border: solid 2px ${Color.red};
  padding: 2px 8px;
  font-weight: bold;
  text-align: center;
  width: 33.33%;
`;

const ThemeText = styled.span`
  color: ${Color.red};
  border: solid 2px ${Color.red};
  padding: 2px 8px;
  font-weight: bold;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  text-align: center;
  width: 33.33%;
`;
export default YearIndicator;
