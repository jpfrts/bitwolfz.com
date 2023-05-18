"use client";
import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";
import { Card, Logo2Linhas, ImageCard, Organizador } from "./style";
import { Redes } from "../Redes";

export const Secao1 = () => {
  return (
    <>
      <Organizador>
        <Card>
          <ParallaxBanner style={{ aspectRatio: "16 / 9" }}>
            <ParallaxBannerLayer speed={0}>
              <ImageCard src="/images/fotos/ft1home_bg.webp" alt="" />
            </ParallaxBannerLayer>
            <ParallaxBannerLayer speed={-65}>
              <Logo2Linhas src="/images/logo-2lines.svg" />
            </ParallaxBannerLayer>
            <ParallaxBannerLayer speed={0}>
              <ImageCard src="/images/fotos/ft1home_upper.webp" alt="" />
            </ParallaxBannerLayer>
          </ParallaxBanner>
        </Card>
        <Parallax speed={-10}>
          <Redes />
        </Parallax>
      </Organizador>
    </>
  );
};
