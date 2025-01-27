import WhatAppImage from "../Assests/Png/whatapp_white.png";
import ChatImage from "../Assests/Png/chatbot_white.png";
import MessageImage from "../Assests/Png/message_icon.png";
import classes from "./component.module.css";
import { AnimatePresence, motion } from "framer-motion";
import popImage from "../Assests/Png/Satsport-pop-up.jpg";
import CloseIcon from "../Assests/Png/close_icon.png";
import WeArehereImage from "../Assests/Png/hiring.svg";
import { useEffect, useState } from "react";
// import { usePrimaryColor } from "../Utility/StoreData";

const FixedFooterContainer = () => {
  const [isShowPopup, setisShowPopup] = useState(true);
  // const primaryColor = usePrimaryColor();

  useEffect(() => {
    const interval = setInterval(() => {
      setisShowPopup((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const InvertedTriangle = () => {
    return <div className={classes.invertedtriangele} />;
  };

  return (
    <div>
      <div
        style={{ position: "fixed", left: "15px", bottom: "15px", zIndex: 999 }}
      >
        <div
          className={`d-flex align-items-center ${classes.iconParentContainer}`}
        >
          <div className={`${classes.iconContainer}`}>
            <img
              src={WhatAppImage}
              alt=""
              style={{ width: "25px", height: "auto" }}
            />
          </div>
          <div>
            <p style={{ fontSize: "14px", fontFamily: "var(--regular)" }}>
              Contact us
            </p>
          </div>
        </div>

        <div
          className={`d-flex align-items-center ${classes.iconParentContainer}`}
        >
          <div className={`${classes.iconContainer}`}>
            <img src={ChatImage} alt="" />
          </div>
          <div>
            <p style={{ fontSize: "14px", fontFamily: "var(--regular)" }}>
              Get Support
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          right: "15px",
          bottom: "15px",
          zIndex: 999,
        }}
      >
        <div className={classes.iconContainerRight} style={{}}>
          <img src={MessageImage} alt="" />
        </div>
        <img src={WeArehereImage} alt="" className={`${classes.weAreHere}`} />
      </div>
      <div style={{ position: "fixed", bottom: "0px" }}>
        <AnimatePresence>
          {isShowPopup && (
            <motion.div
              initial={{ opacity: 0, x: "-20%", y: "-25%" }} // Starting point
              animate={{
                opacity: 1,
                x: ["-20%", "10%", "20%"], // Moves left to right step by step
                y: ["-45%", "-45%", "-75%"], // Stays at the same Y for horizontal movement, then moves up
              }}
              exit={{
                x: "30%", // Moves left to right step by step
                y: "-55%",
                opacity: 0,
              }} // Exit animation
              style={{
                width: "200px",
                height: "auto",
              }}
              // transition={{
              //   duration: 3, // Total duration
              //   ease: "easeInOut", // Easing function
              //   times: [0, 1, 1], // Defines timing for keyframes
              // }}
              className={classes.animatedImage}
            >
              <img
                src={popImage}
                alt="Animated"
                style={{
                  borderRadius: "5px",
                  width: "100%",
                  height: "auto",
                }}
              />

              <img
                src={CloseIcon}
                alt="close_icon"
                className={classes.closeIon}
                onClick={() => setisShowPopup(false)}
                style={{
                  position: "absolute",
                  width: "15px",
                  height: "auto",
                  top: "5px",
                  left: "5px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              />

              <InvertedTriangle />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FixedFooterContainer;
