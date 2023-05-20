"use client";
import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";
import { Card, Logo2Linhas, ImageCard, Organizador, CardTitulo } from "./style";
import { Redes } from "../Redes";

export const Secao1 = () => {
  return (
    <>
      <Organizador>
        <CardTitulo>BitWolfz</CardTitulo>
        <Card>
          <ParallaxBanner style={{ aspectRatio: "16 / 9" }}>
            <ParallaxBannerLayer speed={-65}>
              <Logo2Linhas
                src="/images/logo-2lines.svg"
                alt="Logotipo BitWolfz"
              />
            </ParallaxBannerLayer>
            <ParallaxBannerLayer speed={0}>
              <ImageCard
                src="/images/fotos/ft1home_upper.webp"
                alt="BitWolfz"
              />
            </ParallaxBannerLayer>
          </ParallaxBanner>
        </Card>
        <Parallax speed={-50}>
          <Redes />
        </Parallax>
      </Organizador>
    </>
  );
};
