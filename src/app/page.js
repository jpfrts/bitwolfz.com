import { SocialProfileJsonLd } from "next-seo";
import { Layout } from "./components/layout";

export default function Home() {
  return (
    <>
      <Layout />;
      <SocialProfileJsonLd
        useAppDir={true}
        type="Person"
        name="BitWolfz"
        url="https://bitwolfz.com"
        sameAs={[
          "https://twitch.tv/bitwolfz",
          "https://instagram.com/bitwolfz",
          "https://twitter.com/@bitwolfz",
        ]}
      />
    </>
  );
}
