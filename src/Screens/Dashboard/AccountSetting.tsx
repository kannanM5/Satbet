import useThemes from "../../Hooks/useThemes";

const AccountSetting = () => {
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
      Account Setting
    </div>
  );
};

export default AccountSetting;
