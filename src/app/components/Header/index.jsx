import Link from "next/link";
import { MenuContainer, MenuItem } from "./style";

export const Header = () => {
  return (
    <>
      <MenuContainer>
        <MenuItem>
          <Link href="/" title="Home">
            HOME
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/sobre" title="Sobre">
            SOBRE
          </Link>
        </MenuItem>
      </MenuContainer>
    </>
  );
};
