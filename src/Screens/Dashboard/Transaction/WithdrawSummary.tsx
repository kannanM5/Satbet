import useThemes from "../../../Hooks/useThemes";

const WithdrawSummary = () => {
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
      Withdraw Summary
    </div>
  );
};

export default WithdrawSummary;
