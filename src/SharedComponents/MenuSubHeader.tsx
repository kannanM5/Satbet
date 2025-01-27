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
import useThemes from "../Hooks/useThemes";
import { useEffect, useRef } from "react";

const MenuSubHeader = () => {
  const navigate = useNavigate();
  const selectedMenu = useSelectedMenu();
  const dispatch = useDispatch();
  const getThemeColors = useThemes();
  const selectedTransaction = useSelectedTransactionMenu();
  const MenuscrollContainerRef = useRef<any>(null);
  const selectedMenuscrollContainerRef = useRef<any>(null);

  // Function to handle horizontal scrolling
  const handleScroll = (event) => {
    if (MenuscrollContainerRef.current) {
      event.preventDefault(); // Prevent default vertical scroll behavior
      MenuscrollContainerRef.current.scrollLeft += event.deltaY * 0.5; // Adjust horizontal scroll
    }
  };

  useEffect(() => {
    const scrollContainer = MenuscrollContainerRef.current;

    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", handleScroll, {
        passive: false,
      });

      return () => {
        scrollContainer.removeEventListener("wheel", handleScroll);
      };
    }
  }, []);

  const handleScrollSelectedMenu = (event) => {
    if (selectedMenuscrollContainerRef.current) {
      event.preventDefault(); // Prevent default vertical scroll behavior
      selectedMenuscrollContainerRef.current.scrollLeft += event.deltaY * 0.5; // Adjust horizontal scroll
    }
  };

  useEffect(() => {
    const scrollContainer = selectedMenuscrollContainerRef.current;

    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", handleScrollSelectedMenu, {
        passive: false,
      });

      return () => {
        scrollContainer.removeEventListener("wheel", handleScrollSelectedMenu);
      };
    }
  }, []);

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          background: getThemeColors.isMode ? "white" : "#222",
          borderTop: "1px solid #565656",
          borderBottom:
            selectedMenu === 6 ? `1px solid  #565656` : "0px solid black",
          overflowX: "auto",
          whiteSpace: "nowrap",
        }}
      >
        <div style={{ overflowX: "auto" }} ref={MenuscrollContainerRef}>
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
                    borderRight: `1px solid  #565656`,
                    borderLeft:
                      ele?.id == 1 ? `1px solid #565656` : "0px solid black",
                    backgroundColor: isSelected
                      ? getThemeColors.primaryColor
                      : getThemeColors.isMode
                      ? "white"
                      : "#222",

                    textAlign: "center",
                    whiteSpace: "nowrap",
                    padding: "10px",
                  }}
                >
                  <p
                    style={{
                      color: isSelected ? "black" : getThemeColors.textColor,
                      fontSize: "13px",
                      fontWeight: 600,
                      cursor: "pointer",
                      fontFamily: "var(--regular)",
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

      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          background: getThemeColors?.isMode ? "white" : "#222",
          borderBottom: `1px solid  #565656`,
          overflowX: "auto",
          whiteSpace: "nowrap",
        }}
      >
        <div style={{ overflowX: "auto" }} ref={selectedMenuscrollContainerRef}>
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
                      borderRight: `1px solid #565656`,
                      borderLeft:
                        ele?.id == 1 ? `1px solid #565656` : "0px solid black",
                      backgroundColor: isSelected
                        ? getThemeColors.primaryColor
                        : getThemeColors?.isMode
                        ? "white"
                        : "#222",
                      textAlign: "center",
                      whiteSpace: "nowrap",
                      padding: "10px",
                    }}
                  >
                    <p
                      style={{
                        color: isSelected ? "black" : getThemeColors.textColor,
                        fontSize: "11px",
                        cursor: "pointer",
                        textTransform: "uppercase",
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                        fontFamily: "var(--regular)",
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
    </>
  );
};

export default MenuSubHeader;
