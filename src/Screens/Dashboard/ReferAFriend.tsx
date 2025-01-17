import useThemes from "../../Hooks/useThemes";

const ReferAFriend = () => {
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
      Refer A Friend
    </div>
  );
};

export default ReferAFriend;
