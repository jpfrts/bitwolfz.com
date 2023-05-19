"use client";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { Card2, ImageCard2, Organizador2, SpotifyContainer } from "./style";
import { Spotify } from "react-spotify-embed";

export const Secao2 = () => {
  return (
    <>
      <Organizador2>
        <Card2>
          <ParallaxBanner style={{ aspectRatio: "16 / 9" }}>
            <ParallaxBannerLayer speed={0}>
              <ImageCard2 src="/images/fotos/ft2home.webp" alt="BitWolfz" />
            </ParallaxBannerLayer>
            <ParallaxBannerLayer speed={20}>
              <SpotifyContainer>
                <Spotify link="https://open.spotify.com/track/1dK9Gwt847P1fZrm9uGKZx" />
              </SpotifyContainer>
            </ParallaxBannerLayer>
          </ParallaxBanner>
        </Card2>
      </Organizador2>
    </>
  );
};
