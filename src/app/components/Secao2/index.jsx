"use client";
import {
  ParallaxBanner,
  ParallaxProvider,
  ParallaxBannerLayer,
  Parallax,
} from "react-scroll-parallax";
import { Card2, Logo2Linhas, ImageCard } from "./style";

export const Secao2 = () => {
  return (
    <>
      <Card2>
        <ParallaxBanner style={{ aspectRatio: "16 / 9" }}>
          <ParallaxBannerLayer speed={0}>
            <ImageCard src="/images/fotos/ft2home.webp" alt="" />
          </ParallaxBannerLayer>
          <ParallaxBannerLayer speed={-65}>
            <Logo2Linhas src="/images/logo-2lines.svg" />
          </ParallaxBannerLayer>
        </ParallaxBanner>
      </Card2>
    </>
  );
};
