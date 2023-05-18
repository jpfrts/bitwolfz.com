import { Secao1 } from "./components/Secao1";
import { Secao2 } from "./components/Secao2";

import { FundoAzul, HomeContainer } from "./style";

export const metadata = {
  title: "BitWolfz",
  description: "Site oficial do duo BitWolfz",
};

export default function Home() {
  return (
    <HomeContainer>
      <FundoAzul>
        <Secao1 />
        <Secao2 />
      </FundoAzul>
    </HomeContainer>
  );
}
