"use client";
import { styled } from "styled-components";

export const Card1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
  padding: 5vw;
`;

export const Foto1 = styled.img`
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
`;

export const Logo2Linhas = styled.img`
  position: absolute;
  width: 35vh;
`;
