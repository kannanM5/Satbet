import { themeColorProps } from "../Utility/StaticData";

type ThemeModalProsp = {
  data: themeColorProps[];
  onClickTheme: (val: themeColorProps) => void;
};

const ThemeModal = ({ data, onClickTheme }: ThemeModalProsp) => {
  return (
    <div>
      {data?.map((ele, ind) => {
        const isLastIndex = ind !== data?.length - 1;

        return (
          <div key={ind}>
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
            {isLastIndex && <div style={{ border: "0.5px solid #222" }} />}
          </div>
        );
      })}
    </div>
  );
};

export default ThemeModal;
