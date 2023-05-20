"use client";

import StyledComponentsRegistry from "../../lib/registry";
import { SocialProfileJsonLd } from "next-seo";
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
            <SocialProfileJsonLd
              useAppDir={true}
              type="MusicGroup"
              name="BitWolfz"
              url="https://bitwolfz.com"
              mainEntityOfPage="https://bitwolfz.com/#"
              logo="https://bitwolfz.com/logo.svg"
              foundingDate="2020-08-03"
              foundingLocation="Leopoldina, Minas Gerais, Brazil"
              musicGroupMember={[
                {
                  "@type": "Person",
                  name: "Mizurath",
                  url: "https://bitwolfz.com",
                  sameAs: [
                    "https://www.instagram.com/mizu.bitwolfz",
                    "https://www.youtube.com/@mizurath",
                  ],
                },
                {
                  "@type": "Person",
                  name: "Rakan",
                  url: "https://bitwolfz.com",
                  sameAs: ["https://www.instagram.com/rakan.bitwolfz"],
                },
              ]}
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
