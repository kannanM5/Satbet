import { useDispatch } from "react-redux";
import { menuData, transactionData } from "../Utility/StaticData";
import {
  useSelectedMenu,
  useSelectedTransactionMenu,
} from "../Utility/StoreData";
import {
  StoreSelectedMenu,
  StoreSelectedTransactionMenu,
} from "../Store/Slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../Utility/Contexts";

const MenuSubHeader = () => {
  const navigate = useNavigate();
  const selectedMenu = useSelectedMenu();
  const dispatch = useDispatch();
  const selectedTransaction = useSelectedTransactionMenu();
  const { isDarkTheme, primaryColor } = useTheme();

  const themeStyles = {
    backgroundColor: isDarkTheme ? "#121212" : "rgba(1,1,1,0.5)",
    color: isDarkTheme ? "#fff" : "#000",
  };

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          background: themeStyles.backgroundColor,
          borderTop: "1px solid rgb(209, 202, 202)",
          borderBottom: "1px solid rgb(255, 255, 255)",
          overflowX: "auto",
          whiteSpace: "nowrap",
        }}
      >
        <div style={{ overflowX: "auto" }}>
          <div className="d-flex">
            {menuData?.map((ele, ind) => {
              const isSelected = ele?.id == selectedMenu;
              return (
                <div
                  onClick={() => {
                    dispatch(StoreSelectedMenu(ele?.id));
                    dispatch(StoreSelectedTransactionMenu(-1));
                    if (ele?.id !== 6) {
                      navigate(ele?.path);
                    } else {
                      dispatch(StoreSelectedTransactionMenu(1));
                      navigate(`${ele?.path}/alltransaction`);
                    }
                  }}
                  key={ind}
                  style={{
                    borderRight: "1px solid rgb(209, 202, 202)",
                    borderLeft:
                      ele?.id == 1
                        ? "1px solid rgb(209, 202, 202)"
                        : "0px solid black",
                    backgroundColor: isSelected
                      ? primaryColor
                      : themeStyles.backgroundColor,
                    // background: themeStyles.backgroundColor,
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    padding: "10px",
                  }}
                >
                  <p
                    style={{
                      color: isSelected ? "black" : "white",
                      fontSize: "13px",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    {ele?.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            background: themeStyles.backgroundColor,
            borderBottom: "1px solid rgb(209, 202, 202)",
            overflowX: "auto",
            whiteSpace: "nowrap",
          }}
        >
          <div style={{ overflowX: "auto" }}>
            <div className="d-flex">
              {selectedMenu == 6 &&
                transactionData?.map((ele, ind) => {
                  const isSelected = ele?.id == selectedTransaction;
                  return (
                    <div
                      onClick={() => {
                        dispatch(StoreSelectedTransactionMenu(ele?.id));
                        navigate(ele?.path);
                      }}
                      key={ind}
                      style={{
                        borderRight: "1px solid rgb(209, 202, 202)",
                        borderLeft:
                          ele?.id == 1
                            ? "1px solid rgb(209, 202, 202)"
                            : "0px solid black",
                        backgroundColor: isSelected
                          ? primaryColor
                          : themeStyles.backgroundColor,
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        padding: "10px",
                        // backgroundColor: themeStyles.backgroundColor,
                      }}
                    >
                      <p
                        style={{
                          color: isSelected ? "black" : "white",
                          fontSize: "11px",
                          cursor: "pointer",
                          textTransform: "uppercase",
                          fontWeight: 600,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {ele?.title}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuSubHeader;
