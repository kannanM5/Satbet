import { useTheme } from "../../Utility/Contexts";

const Withdraw = () => {
  const { modeColor } = useTheme();
  return (
    <div
      style={{
        color: modeColor,
        padding: "50px",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        fontSize: "20px",
        borderBottom: `1px solid ${modeColor}`,
      }}
    >
      Withdraw
    </div>
  );
};

export default Withdraw;
