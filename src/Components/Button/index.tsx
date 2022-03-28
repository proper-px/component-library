import React, { useState } from "react";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { IButtonVariants } from "../../Theme";
import { IButtonTheme } from "../../Theme/styled";

interface IStyledButtonProps {
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

export const ButtonTheme: { button: IButtonTheme } = {
  button: {
    padding: "6px 10px",
    borderWidth: "1px",
    borderRadius: "4px",
    borderStyle: "solid",
    variants: {
      primary: {
        base: {
          backgroundColor: "orange",
          foregroundColor: "black",
          borderColor: "teal",
        },
        hover: {
          backgroundColor: "teal",
          foregroundColor: "yellow",
          borderColor: "white",
        },
        active: {
          backgroundColor: "red",
          foregroundColor: "yellow",
          borderColor: "white",
        },
        focus: {
          backgroundColor: "yellow",
          foregroundColor: "yellow",
          borderColor: "white",
        },
      },
      secondary: {
        base: {
          backgroundColor: "dodgerblue",
          foregroundColor: "yellow",
          borderColor: "white",
        },
        hover: {
          backgroundColor: "orange",
          foregroundColor: "yellow",
          borderColor: "white",
        },
        active: {
          backgroundColor: "orange",
          foregroundColor: "yellow",
          borderColor: "white",
        },
        focus: {
          backgroundColor: "orange",
          foregroundColor: "yellow",
          borderColor: "white",
        },
      },
    },
  },
};

export const Button = (props: IButtonProps) => {
  const styledTheme = useTheme();

  return (
    <ThemeProvider theme={styledTheme || ButtonTheme}>
      <StyledButton colortype={props.colortype}>{props.label}</StyledButton>
    </ThemeProvider>
  );
};
