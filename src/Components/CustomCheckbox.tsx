import TickIcon from "../Assests/Png/tick.png";
import { useTheme } from "../Utility/Contexts";
import classes from "./component.module.css";

type CustomCheckBoxProps = {
  checked: boolean;
  onChange: () => void;
  label: string;
  disabled?: boolean;
  errorText?: string;
};

const CustomCheckBox = ({
  checked,
  onChange,
  label,
  disabled,
  errorText,
}: CustomCheckBoxProps) => {
  const { isDarkTheme } = useTheme();

  const themeStyles = {
    backgroundColor: isDarkTheme ? "#121212" : "#fff",
    color: isDarkTheme ? "#fff" : "#000",
  };
  return (
    <>
      <div
        className="mb-2 mt-3"
        style={{
          display: "flex",
          alignItems: "center",
          cursor: disabled ? "not-allowed" : "pointer",
        }}
      >
        <div
          onClick={!disabled ? onChange : undefined}
          style={{
            width: "20px",
            height: "20px",
            border: "1px solid #000",
            borderRadius: "5px",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: disabled ? "not-allowed" : "pointer",
          }}
        >
          {checked && (
            <img
              src={TickIcon}
              alt="tick"
              style={{
                width: "15px",
                height: "15px",
              }}
            />
          )}
        </div>
        <label
          style={{
            marginLeft: "10px",
            color: themeStyles.color,
          }}
        >
          {label}
        </label>
      </div>
      {errorText && <p className={classes.errorText}>{errorText}</p>}
    </>
  );
};

export default CustomCheckBox;
