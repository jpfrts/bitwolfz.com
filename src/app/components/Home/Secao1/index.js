"use client";
import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
  ParallaxProvider,
} from "react-scroll-parallax";
import { Card1, Foto1, Logo2Linhas } from "./style";

export const Secao1 = () => {
  return (
    <>
      <ParallaxProvider>
        <Card1>
          <ParallaxBanner
            layers={[
              {
                image: "/images/fotos/ft1home.webp",
                speed: -20,
              },
            ]}
            style={{ aspectRatio: "2 / 1" }}
          />
          <Logo2Linhas src="/images/logo-2lines.svg" />
        </Card1>
      </ParallaxProvider>
    </>
  );
};
