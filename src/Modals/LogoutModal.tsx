import useThemes from "../Hooks/useThemes";

type LogoutModalProps = {
  title: string;
  msg: string;
};

const LogoutModal = ({ title, msg }: LogoutModalProps) => {
  const getThemeColors = useThemes();

  return (
    <div style={{ padding: "20px 0" }}>
      <h5 style={{ color: getThemeColors.primaryColor, textAlign: "center" }}>
        {title}
      </h5>

      <p
        style={{
          textAlign: "center",
          fontSize: "17px",
          margin: "10px 0 0 0",
          color: getThemeColors.textColor,
        }}
      >
        {msg}
      </p>
    </div>
  );
};

export default LogoutModal;
