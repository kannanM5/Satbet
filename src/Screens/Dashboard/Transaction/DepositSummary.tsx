import useThemes from "../../../Hooks/useThemes";

const DepositSummary = () => {
  const getThemeColors = useThemes();
  return (
    <div
      style={{
        color: getThemeColors.textColor,
        padding: "50px",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        fontSize: "20px",
        borderBottom: `1px solid ${getThemeColors.textColor}`,
      }}
    >
      Deposit Summary
    </div>
  );
};

export default DepositSummary;
