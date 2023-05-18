import { RedesContainer, RodapeContainer, RodapeCopyright } from "./style";
import Link from "next/link";
import {
  FaInstagram,
  FaSoundcloud,
  FaYoutube,
  FaSpotify,
} from "react-icons/fa";

export const Redes = () => {
  return (
    <>
      <RedesContainer>
        <Link
          href="https://instagram.com/bitwolfz"
          title="Instagram"
          alt="Instagram"
        >
          <FaInstagram />
        </Link>
        <Link
          href="https://soundcloud.com/bitwolfz"
          title="Soundcloud"
          alt="Soundcloud"
        >
          <FaSoundcloud />
        </Link>
        <Link
          href="https://youtube.com/@bitwolfz"
          title="YouTube"
          alt="YouTube"
        >
          <FaYoutube />
        </Link>
        <Link
          href="https://open.spotify.com/artist/5MHGqH2fgpXiJCpBeYJYc8"
          title="Spotify"
          alt="Spotify"
        >
          <FaSpotify />
        </Link>
      </RedesContainer>
    </>
  );
};
