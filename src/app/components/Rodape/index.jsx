import { RodapeContainer, RodapeCopyright } from "./style";
import Link from "next/link";

export const Rodape = () => {
  const data = new Date();

  return (
    <RodapeContainer>
      <RodapeCopyright>© {data.getFullYear()} BitWolfz </RodapeCopyright>
    </RodapeContainer>
  );
};
