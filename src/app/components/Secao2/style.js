"use client";
import { styled } from "styled-components";

export const Card2 = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 0 200px 200px 200px;
`;

export const ImageCard2 = styled.img`
  width: 100%;
  position: relative;
  top: 450px;
`;

export const Organizador2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: middle;
  overflow: hidden;
`;

export const SpotifyContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 300px;
  left: 100px;
  width: 500px;
  gap: 10px;
`;

export const SpotifyTexto = styled.span`
  background-color: rgb(176, 16, 24);
  backdrop-filter: blur(15px);
  color: rgb(255 255 255);
  width: fit-content;
  padding: 10px;
  border-radius: 0.75rem;
`;
