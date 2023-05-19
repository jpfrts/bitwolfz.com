"use client";

import StyledComponentsRegistry from "../../lib/registry";
import { SocialProfileJsonLd } from "next-seo";
import { Rodape } from "./components/Rodape";
import { ParallaxProvider } from "react-scroll-parallax";

import "./globals.css";
import { Header } from "./components/Header";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <ParallaxProvider>
            <Header />
            {children}
            <Rodape />
            <SocialProfileJsonLd
              useAppDir={true}
              type="MusicGroup"
              name="BitWolfz"
              url="https://bitwolfz.com"
              sameAs={[
                "https://instagram.com/bitwolfz",
                "https://youtube.com/@bitwolfz",
                "https://twitter.com/bitwolfz",
                "https://twitch.tv/bitwolfz",
                "https://www.tiktok.com/@bitwolfz",
                "https://soundcloud.com/bitwolfz",
                "https://open.spotify.com/artist/5MHGqH2fgpXiJCpBeYJYc8",
                "https://music.apple.com/artist/bitwolfz/1564026300",
                "https://music.amazon.com/artists/B093CN9FK6/bitwolfz",
                "https://tidal.com/browse/artist/24492091",
              ]}
            />
            <GoogleAnalytics trackPageViews />
          </ParallaxProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
