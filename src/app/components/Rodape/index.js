import { RodapeContainer, RodapeCopyright } from "./style";

export const Rodape = () => {
  const data = new Date();

  return (
    <RodapeContainer>
      <RodapeCopyright>© {data.getFullYear()} BitWolfz </RodapeCopyright>
    </RodapeContainer>
  );
};
