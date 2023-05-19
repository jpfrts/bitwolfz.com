"use client";
import { styled } from "styled-components";

export const RedesContainer = styled.div`
  background: rgb(144 226 100);
  padding: 40px;
  display: inline-flex;
  gap: 50px;
  position: relative;
  top: 275px;

  a {
    color: rgb(0 0 0);
    font-size: 42px;
    transition: 0.4s cubic-bezier(0.8, 0, 0, 1);
  }

  a:hover {
    scale: 1.2;
    color: rgb(0 33 151);
  }
`;
