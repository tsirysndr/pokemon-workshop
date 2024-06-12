import { FC, ReactNode } from "react";
import { Container } from "./styles";

export type ButtonProps = {
  onClick?: () => void;
  children: ReactNode;
};

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return <Container onClick={onClick}>{children}</Container>;
};

export default Button;
