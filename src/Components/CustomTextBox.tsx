import React, { useState } from "react";
import classes from "../Components/component.module.css";
import EyeOpen from "../Assests/Png/eyeOpen.png";
import EyeClose from "../Assests/Png/eyeClose.png";
import { useTheme } from "../Utility/Contexts";

type CustomTextBox = {
  title?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
  errorText?: string;
  placeholder?: string;
  isSecure?: boolean;
  maxLength?: number;
  isDisabled?: boolean;
  style?: React.CSSProperties;
};

const CustomTextBox = ({
  title,
  value,
  onChange,
  isRequired,
  errorText,
  placeholder,
  isSecure,
  maxLength,
  isDisabled,
  style,
}: CustomTextBox) => {
  const [isVisible, setisVisible] = useState(true);
  const { isDarkTheme } = useTheme();

  const themeStyles = {
    backgroundColor: isDarkTheme ? "#121212" : "#fff",
    color: isDarkTheme ? "#fff" : "#000",
  };

  const getType = () => {
    return isSecure ? (isVisible ? "password" : "text") : "text";
  };

  return (
    <div className="mt-4 mb-2">
      <div className="d-flex">
        {title && (
          <h6
            style={{
              fontFamily: "var(--semi-bold)",
              fontWeight: "var(--fontweight)",
              color: themeStyles.color,
            }}
          >
            {title}
          </h6>
        )}
        {isRequired && (
          <p style={{ color: "var(--danger)", margin: "-5px 5px 10px" }}>*</p>
        )}
      </div>
      <div className={`${classes.inputBoxContainer}`} style={style}>
        <input
          placeholder={placeholder}
          className={classes.inputBox}
          value={value}
          onChange={onChange}
          type={getType()}
          style={{ width: isSecure ? "87%" : "100%", color: themeStyles.color }}
          maxLength={maxLength}
          disabled={isDisabled}
        />
        {isSecure && (
          <div className="d-flex justify-content-end " style={{ width: "13%" }}>
            <img
              src={isVisible ? EyeClose : EyeOpen}
              onClick={() => {
                setisVisible((prev) => !prev);
              }}
              style={{ width: "20px", height: "20px" }}
            />
          </div>
        )}
      </div>

      {errorText && (
        <p className={classes.errorText}>{errorText?.toString()}</p>
      )}
    </div>
  );
};

export default CustomTextBox;
