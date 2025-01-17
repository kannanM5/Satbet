import TickIcon from "../Assests/Png/tick.png";
// import useThemes from "../Hooks/useThemes";
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
  // const getThemeColors = useThemes();
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
            width: "15px",
            height: "15px",
            border: "1px solid #000",
            borderRadius: "2px",
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
                width: "12px",
                height: "12px",
              }}
            />
          )}
        </div>
        <label
          style={{
            marginLeft: "10px",
            color: "white",
            fontFamily: "var(--regular)",
            fontSize: "14px",
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
