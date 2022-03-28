import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: ${(props) => props.theme.button.borderRadius};
  border: ${(props) => props.theme.button.borderWidth}
    ${(props) => props.theme.button.borderStyle};
  padding: ${(props) => props.theme.button.padding};
  &:hover {
    cursor: pointer;
  }
`;

interface IButtonProps {
  label: string;
}

export const Button = ({ label }: IButtonProps) => {
  return <StyledButton>{label}</StyledButton>;
};
