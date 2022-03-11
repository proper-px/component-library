import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: ${(props) => props.theme.borderRadius};
  border: ${(props) => props.theme.border};
`;

interface IButtonProps {
  label: string;
}

export const Button = ({ label }: IButtonProps) => {
  return <StyledButton>{label}</StyledButton>;
};
