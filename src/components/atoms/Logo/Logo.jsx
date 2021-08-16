import React from "react";
import styled from "styled-components";
import { Color } from "../../style";

function Logo() {
  return (
    <Wrapper
      onClick={() => {
        window.location.href = "/";
      }}
    >
      <LogoText>槟城庙会</LogoText>
      <LogoSub>R&D</LogoSub>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  cursor: pointer;
`;

const LogoText = styled.span`
  color: ${Color.white};
  font-size: 30px;
  margin-right: 2px;
`;

const LogoSub = styled.sub`
  color: ${Color.red};
  background-color: ${Color.white};
  padding: 1px 2px;
  border-radius: 2px;
  font-weight: bold;
`;

export default Logo;
