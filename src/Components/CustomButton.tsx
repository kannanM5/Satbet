import React from "react";
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
}: CustomButtonProps) => {
  return (
    <button
      type="button"
      style={style}
      className={`${className} ${classes.customButton}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {isImage && (
        <img
          src={isImage}
          alt="dollar"
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
          // style={{ width: "9px", height: "auto", marginLeft: "6px" }}
        />
      )}
    </button>
  );
};

export default CustomButton;
