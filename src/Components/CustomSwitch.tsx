// import Form from "react-bootstrap/Form";

import * as motion from "motion/react-client";
import useThemes from "../Hooks/useThemes";
import DarkMode from "../Assests/Png/darkmode.png";
import LightMode from "../Assests/Png/lightMode.png";

type CustomSwitchProps = {
  isChecked: boolean;
  toggleSwitch: () => void;
  label?: string;
};

const CustomSwitch = ({ isChecked, toggleSwitch }: CustomSwitchProps) => {
  const getThemeColors = useThemes();
  return (
    <button
      className="toggle-container"
      style={{
        width: "40px",
        height: "25px",
        backgroundColor: "white",
        borderRadius: "50px",
        borderColor: getThemeColors.isMode ? "black" : "white",
        cursor: "pointer",
        display: "flex",
        padding: "5px",
        justifyContent: "flex-" + (isChecked ? "start" : "end"),
        alignItems: "center",
        boxShadow: "var(--shadowBtn)",
      }}
      onClick={toggleSwitch}
    >
      <motion.img
        className="toggle-handle"
        src={isChecked ? DarkMode : LightMode}
        style={{
          width: "14px",
          height: "14px",
          // backgroundColor: getThemeColors.primaryColor,
          borderRadius: "50%",
        }}
        layout
        transition={{
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.2,
        }}
      ></motion.img>
    </button>
  );
};

export default CustomSwitch;
