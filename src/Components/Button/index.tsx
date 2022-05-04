import React from "react";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { IButtonVariants } from "../../Theme";

export interface IStyledButtonProps {
  colortype: IButtonVariants;
}

const StyledButton = styled.button<IStyledButtonProps>((props) => ({
  backgroundColor:
    props.theme.button.variants[props.colortype].base.backgroundColor,
  ":hover": {
    cursor: "pointer",
    backgroundColor:
      props.theme.button.variants[props.colortype].hover.backgroundColor,
  },
  ":focus": {
    cursor: "pointer",
    backgroundColor:
      props.theme.button.variants[props.colortype].focus.backgroundColor,
  },
}));

interface IButtonProps extends IStyledButtonProps {
  label: string;
}

export const Button = (props: IButtonProps) => {
  return <StyledButton colortype={props.colortype}>{props.label}</StyledButton>;
};
