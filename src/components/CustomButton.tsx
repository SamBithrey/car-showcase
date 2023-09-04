"use client";

import Image from "next/image";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEventHandler,
} from "react";

type Props = {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
};

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: Props) => {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-auto`}>{title}</span>
    </button>
  );
};

export default CustomButton;
