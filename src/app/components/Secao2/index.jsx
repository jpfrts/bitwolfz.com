"use client";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import {
  Card2,
  ImageCard2,
  ImageCard2Ajuste,
  Organizador2,
  SpotifyContainer,
  SpotifyTexto,
} from "./style";
import { Spotify } from "react-spotify-embed";

export const Secao2 = () => {
  return (
    <>
      <Organizador2>
        <Card2>
          <ParallaxBanner style={{ aspectRatio: "16 / 9" }}>
            <ParallaxBannerLayer speed={-50}>
              <ImageCard2 src="/images/fotos/ft2home.webp" alt="BitWolfz" />
            </ParallaxBannerLayer>
            <ParallaxBannerLayer speed={20}>
              <SpotifyContainer>
                <SpotifyTexto>último lançamento</SpotifyTexto>
                <Spotify link="https://open.spotify.com/track/1dK9Gwt847P1fZrm9uGKZx" />
              </SpotifyContainer>
            </ParallaxBannerLayer>
          </ParallaxBanner>
        </Card2>
      </Organizador2>
    </>
  );
};
