import { RedesContainer, RodapeContainer, RodapeCopyright } from "./style";
import Link from "next/link";
import {
  FaInstagram,
  FaSoundcloud,
  FaYoutube,
  FaSpotify,
  FaAmazon,
  FaTwitch,
} from "react-icons/fa";
import { SiApplemusic, SiTidal } from "react-icons/si";
export const Redes = () => {
  return (
    <>
      <RedesContainer>
        <Link
          href="https://instagram.com/bitwolfz"
          title="Instagram"
          alt="Instagram"
          target="_blank"
        >
          <FaInstagram />
        </Link>
        <Link
          href="https://youtube.com/@bitwolfz"
          title="YouTube"
          alt="YouTube"
          target="_blank"
        >
          <FaYoutube />
        </Link>
        <Link
          href="https://soundcloud.com/bitwolfz"
          title="Soundcloud"
          alt="Soundcloud"
          target="_blank"
        >
          <FaSoundcloud />
        </Link>
        <Link
          href="https://twitch.tv/bitwolfz"
          title="Twitch"
          alt="Twitch"
          target="_blank"
        >
          <FaTwitch />
        </Link>
        <Link
          href="https://open.spotify.com/artist/5MHGqH2fgpXiJCpBeYJYc8"
          title="Spotify"
          alt="Spotify"
          target="_blank"
        >
          <FaSpotify />
        </Link>
        <Link
          href="https://music.apple.com/artist/bitwolfz/1564026300"
          title="Apple Music"
          alt="Apple Music"
          target="_blank"
        >
          <SiApplemusic />
        </Link>
        <Link
          href="https://tidal.com/browse/artist/24492091"
          title="Tidal"
          alt="Tidal"
          target="_blank"
        >
          <SiTidal />
        </Link>
        <Link
          href="https://music.amazon.com/artists/B093CN9FK6/bitwolfz"
          title="Amazon Music"
          alt="Amazon Music"
          target="_blank"
        >
          <FaAmazon />
        </Link>
      </RedesContainer>
    </>
  );
};
