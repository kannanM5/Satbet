import useThemes from "../../../Hooks/useThemes";

const AllTransaction = () => {
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
      All Transaction
    </div>
  );
};

export default AllTransaction;
