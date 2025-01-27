import { useEffect, useRef, useState } from "react";
import { subHeaderData } from "../Utility/StaticData";
import classes from "./SharedComponent.module.css";
import useThemes from "../Hooks/useThemes";

const SubHeader = () => {
  const getThemeColors = useThemes();
  const [selectedSubMenu, setselectedSubMenu] = useState(-1);

  const scrollContainerRef = useRef<any>(null);

  // Function to handle horizontal scrolling
  const handleScroll = (event) => {
    if (scrollContainerRef.current) {
      event.preventDefault(); // Prevent default vertical scroll behavior
      scrollContainerRef.current.scrollLeft += event.deltaY * 0.5; // Adjust horizontal scroll
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", handleScroll, {
        passive: false,
      });

      return () => {
        scrollContainer.removeEventListener("wheel", handleScroll);
      };
    }
  }, []);

  return (
    <div
      style={{
        backgroundColor: getThemeColors.primaryColor,
      }}
      className={`d-flex justify-content-center align-items-center${classes.subHeader}`}
    >
      <div
        ref={scrollContainerRef}
        style={{
          overflowX: "auto",
          height: "45px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="d-flex">
          {subHeaderData?.map((ele, ind) => {
            const selectedmenu = selectedSubMenu === ele?.id;
            return (
              <div
                key={ind}
                className={`${classes.subHeaderElement}`}
                style={{
                  padding: "3px 5px",
                  borderRadius: "5px",
                  background: selectedmenu
                    ? "linear-gradient(180deg, #333 0%, rgba(17, 17, 17, 0.35) 100%)"
                    : getThemeColors.primaryColor,
                }}
                onClick={() => {
                  setselectedSubMenu(ele?.id);
                }}
              >
                <img
                  src={ele?.image}
                  alt="icons"
                  style={{ width: "25px", height: "25px" }}
                />
                <p
                  style={{
                    textTransform: "uppercase",
                    fontWeight: "var(--weightExtrabold)",
                    fontSize: "13px",
                    color: getThemeColors.isMode
                      ? selectedmenu
                        ? "black"
                        : "white"
                      : selectedmenu
                      ? "white"
                      : "black",
                    fontFamily: "var(--regular)",
                    letterSpacing: "1px",
                    padding: "0 5px",
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
  );
};

export default SubHeader;
