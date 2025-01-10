// import { useEffect, useRef, useState } from "react";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../Utility/Contexts";
import { subHeaderData } from "../Utility/StaticData";
import classes from "./SharedComponent.module.css";
import { motion, useSpring, useScroll } from "framer-motion";

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
  const { isDarkTheme, primaryColor } = useTheme();
  const scrollContainerRef = useRef(null);
  const [headerPosition, setHeaderPosition] = useState(0);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const themeStyles = {
    backgroundColor: isDarkTheme ? "#121212" : "#fff",
    color: isDarkTheme ? "#fff" : "#000",
  };

  // Function to handle mouse scroll event for horizontal movement
  const handleScroll = (event) => {
    event.preventDefault(); // Prevent the default scroll behavior
    const delta = event.deltaY; // Scroll direction (up/down)
    setHeaderPosition((prevPosition) => prevPosition + delta * 0.1); // Adjust the multiplier for speed
  };

  useEffect(() => {
    // Attach the event listener with `{ passive: false }`
    window.addEventListener("wheel", handleScroll, { passive: false });

    // Cleanup the event listener
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Parent container with horizontal scroll */}
      <div
        ref={scrollContainerRef}
        onWheel={handleScroll} // Attach wheel event to this specific container
        style={{
          // display: "flex",
          overflowX: "auto", // Enable horizontal scroll
          backgroundColor: primaryColor,
          // padding: "10px 0",
        }}
        className={`${classes.subHeader} d-flex justify-content-center align-items-center`}
      >
        {subHeaderData?.map((ele, ind) => (
          <div
            key={ind}
            className={`col-lg-3 ${classes.subHeaderElement}`}
            style={{
              // minWidth: "150px",
              // padding: "10px",
              textAlign: "center",
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
                fontWeight: 700,
                fontSize: "12px",
                // margin: "0px",
                color: themeStyles?.color,
              }}
            >
              {ele?.title}
            </p>
          </div>
        ))}
      </div>

      {/* <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#ff0088",
        }}
      /> */}
    </>
  );
};

export default SubHeader;
