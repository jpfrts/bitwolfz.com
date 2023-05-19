"use client";
import { styled } from "styled-components";

export const Logo2Linhas = styled.img`
  max-width: 400px;
  position: absolute;
  right: 150px;
  top: 33%;
`;

export const ImageCard = styled.img`
  width: 100%;
  z-index: 1;
`;

export const Redes = styled.div`
  position: relative;
  top: 0;
`;

export const Card = styled.div`
  -webkit-mask-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 70%,
    rgba(0, 0, 0, 0) 100%
  );
  mask-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 70%,
    rgba(0, 0, 0, 0) 100%
  );
  mask-type: alpha;
  width: 100%;
`;

export const Organizador = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
