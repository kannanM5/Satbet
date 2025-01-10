import { useTheme } from "../Utility/Contexts";

type LogoutModalProps = {
  title: string;
  msg: string;
};

const LogoutModal = ({ title, msg }: LogoutModalProps) => {
  const { isDarkTheme, primaryColor } = useTheme();

  const themeStyles = {
    backgroundColor: isDarkTheme ? "#121212" : "#fff",
    color: isDarkTheme ? "#fff" : "#000",
  };

  return (
    <div style={{ background: themeStyles.backgroundColor, padding: "20px 0" }}>
      <h5 style={{ color: primaryColor, textAlign: "center" }}>{title}</h5>

      <p
        style={{
          textAlign: "center",
          fontSize: "17px",
          margin: "10px 0 0 0",
          color: themeStyles.color,
        }}
      >
        {msg}
      </p>
    </div>
  );
};

export default LogoutModal;
