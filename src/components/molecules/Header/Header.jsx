import React from "react";
import Logo from "../../atoms/Logo/";
import styled from "styled-components";
import { Color } from "../../style";

function Header() {
  return (
    <Bar>
      <Logo />
    </Bar>
  );
}

const Bar = styled.div`
  background-color: ${Color.red};
  display: flex;
  justify-content: center;
  padding: 8px 0px;
`;

export default Header;
