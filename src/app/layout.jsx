"use client";

import StyledComponentsRegistry from "../../lib/registry";
import { SocialProfileJsonLd } from "next-seo";
import { Rodape } from "./components/Rodape";
import { ParallaxProvider } from "react-scroll-parallax";

import "./globals.css";
import { Header } from "./components/Header";

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
                "https://twitch.tv/bitwolfz",
                "https://instagram.com/bitwolfz",
                "https://twitter.com/bitwolfz",
                "https://youtube.com/@bitwolfz",
                "https://open.spotify.com/artist/5MHGqH2fgpXiJCpBeYJYc8",
              ]}
            />
          </ParallaxProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
