import React from "react";
import styled from "styled-components";
import { Color } from "../../style";

function Footer() {
  return (
    <Bar>
      <p>
        [ PGCNY <RDTag>R&D</RDTag> Team ]
      </p>
    </Bar>
  );
}

function HeartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      fill="currentColor"
      class="bi bi-heart-fill"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
      />
    </svg>
  );
}

const Bar = styled.div`
  background-color: ${Color.red};
  color: ${Color.white};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0px;
  font-size: 12px;
`;

const RDTag = styled.span`
  background-color: ${Color.white};
  color: ${Color.red};
  padding: 1px 2px;
  border-radius: 2px;
`;

export default Footer;
