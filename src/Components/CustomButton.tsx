import React, { ComponentProps } from "react";
import classes from "../Components/component.module.css";

type CustomButtonProps = {
  onClick: () => void;
  title: string;
  style?: React.CSSProperties;
  isDisabled?: boolean;
  isImage?: string;
  isRightImage?: string;
  className?: string;
  rightImageStyle?: React.CSSProperties;
  buttonProps?: ComponentProps<"button">;
};

const CustomButton = ({
  onClick,
  title,
  style,
  isDisabled = false,
  isImage,
  isRightImage,
  className,
  rightImageStyle,
  buttonProps,
}: CustomButtonProps) => {
  return (
    <button
      type="button"
      style={style}
      className={`${className} ${classes.customButton}`}
      disabled={isDisabled}
      onClick={onClick}
      {...buttonProps}
    >
      {isImage && (
        <img
          src={isImage}
          alt="dollar"
          className={classes.leftImageBtn}
          style={{
            width: isRightImage ? "12px" : "8px",
            height: "auto",
            marginRight: "6px",
          }}
        />
      )}
      {title}

      {isRightImage && (
        <img
          src={isRightImage}
          className={classes.rightImageBtn}
          alt="Account"
          style={rightImageStyle}
        />
      )}
    </button>
  );
};

export default CustomButton;
