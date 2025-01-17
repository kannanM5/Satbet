// import { useEffect, useRef, useState } from "react";
import { useState } from "react";
import { subHeaderData } from "../Utility/StaticData";
import classes from "./SharedComponent.module.css";
// import { motion, useSpring, useScroll } from "framer-motion";s
import useThemes from "../Hooks/useThemes";

// const SubHeader = () => {
//   const { primaryColor, modeColor } = useTheme();

//   return (
//     <div
//       style={{ backgroundColor: primaryColor }}
//       className={`${classes.subHeader}  d-flex justify-content-center align-items-center`}
//     >
//       <div
//         className={`${classes.subHeaderContainer}`}
//         // style={{ backgroundColor: primaryColor }}
//       >
//         <div className="d-flex">
//           {subHeaderData?.map((ele, ind) => {
//             return (
//               <div key={ind} className={`col-lg-3 ${classes.subHeaderElement}`}>
//                 <img
//                   src={ele?.image}
//                   alt="icons"
//                   style={{ width: "25px", height: "25px" }}
//                 />
//                 <p
//                   style={{
//                     textTransform: "uppercase",
//                     fontWeight: 700,
//                     fontSize: "12px",
//                     margin: "0px",
//                     color: modeColor,
//                   }}
//                 >
//                   {ele?.title}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

const SubHeader = () => {
  const getThemeColors = useThemes();
  const [selectedSubMenu, setselectedSubMenu] = useState(-1);

  // const [headerPosition, setHeaderPosition] = useState(0);

  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // });

  // Function to handle mouse scroll event for horizontal movement
  // const handleScroll = (event) => {
  //   event.preventDefault(); // Prevent the default scroll behavior
  //   const delta = event.deltaY; // Scroll direction (up/down)
  //   setHeaderPosition((prevPosition) => prevPosition + delta * 0.1); // Adjust the multiplier for speed
  // };

  // useEffect(() => {
  //   // Attach the event listener with `{ passive: false }`
  //   window.addEventListener("wheel", handleScroll, { passive: false });

  //   // Cleanup the event listener
  //   return () => {
  //     window.removeEventListener("wheel", handleScroll);
  //   };
  // }, []);

  return (
    <div
      style={{
        backgroundColor: getThemeColors.primaryColor,
      }}
      className={`d-flex justify-content-center align-items-center${classes.subHeader}`}
    >
      <div
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
