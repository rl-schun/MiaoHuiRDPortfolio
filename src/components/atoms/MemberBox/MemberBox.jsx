import React from "react";
import styled from "styled-components";
import { Color } from "../../style";

function MemberBox({ name, color }) {
  return <MemberName color={color}>{name}</MemberName>;
}

const MemberName = styled.p`
  background-color: ${Color.red};
  border: solid 3px ${(props) => (props.color ? props.color : Color.red)};
  color: ${Color.white};
  padding: 10px 15px;
  border-radius: 8px;
  transition: 250ms;
  text-align: center;

  &:hover {
    color: ${Color.yellow};
  }
`;

export default MemberBox;
