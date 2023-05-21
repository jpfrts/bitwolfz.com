"use client";
import { styled } from "styled-components";

export const MenuContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  gap: 50px;
`;

export const MenuItem = styled.li`
  a {
    font-family: "BB Studio Headline";
    color: rgb(255, 255, 255);
  }
`;
