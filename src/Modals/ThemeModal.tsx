// import { useTheme } from "../Utility/Contexts";
import { themeColorProps } from "../Utility/StaticData";

type ThemeModalProsp = {
  data: themeColorProps[];
  onClickTheme: (val: themeColorProps) => void;
};

const ThemeModal = ({ data, onClickTheme }: ThemeModalProsp) => {
  //   const { isDarkTheme, primaryColor } = useTheme();

  //   const themeStyles = {
  //     backgroundColor: isDarkTheme ? "#121212" : "#fff",
  //     color: isDarkTheme ? "#fff" : "#000",
  //   };

  return (
    <div>
      {data?.map((ele, ind) => {
        const isLastIndex = ind !== data?.length - 1;

        return (
          <>
            <div
              onClick={() => onClickTheme(ele)}
              className="d-flex justify-content-between align-items-center m-2"
            >
              <p key={ind} style={{ color: "white" }}>
                {ele?.name}
              </p>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: ele?.color,
                }}
              />
            </div>
            {isLastIndex && (
              <div style={{ height: "1px", backgroundColor: "white" }} />
            )}
          </>
        );
      })}
    </div>
  );
};

export default ThemeModal;
