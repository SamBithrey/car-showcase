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
  rightIcon?: string;
  isDisabled?: boolean;
  textStyles?: string;
};

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  rightIcon,
  isDisabled,
  textStyles,
}: Props) => {
  return (
    <button
      disabled={isDisabled}
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <Image
          src={rightIcon}
          alt="right icon"
          width={30}
          height={30}
          className="object-contain"
        />
      )}
    </button>
  );
};

export default CustomButton;
