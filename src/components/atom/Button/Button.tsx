import { MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";

const ButtonStyled = styled.button<IButton>`
  font-size: var(--step-0);
  border-radius: 4px;
  padding: 0.5rem 0.8rem;
  background: ${(props) => (props.variant === "primary" ? "white" : "none")};
  color: ${(props) => (props.variant === "primary" ? "" : "white")};
  cursor: pointer;
`;
interface IButton {
  children: ReactNode;
  variant: "primary" | "secondary";
  onClick?: MouseEventHandler;
  type: "button" | "submit";
}

const Button = ({ children, onClick, variant, type }: IButton) => {
  return (
    <ButtonStyled type={type} variant={variant} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
