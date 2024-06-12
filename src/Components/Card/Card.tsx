import { FC, ReactNode } from "react";
import { Container } from "./styles";

const Card: FC<{ children?: ReactNode }> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Card;
