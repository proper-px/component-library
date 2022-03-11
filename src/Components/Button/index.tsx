import * as React from "react";

interface IButtonProps {
  label: string;
}

export const Button = ({ label }: IButtonProps) => {
  return <button>{label}</button>;
};
