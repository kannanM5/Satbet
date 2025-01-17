import WhatAppImage from "../Assests/Png/whatapp_white.png";
import ChatImage from "../Assests/Png/chatbot_white.png";
import MessageImage from "../Assests/Png/message_icon.png";
import classes from "./component.module.css";
import { AnimatePresence, motion } from "framer-motion";
import popImage from "../Assests/Png/Satsport-pop-up.jpg";
import CloseIcon from "../Assests/Png/close_icon.png";
import WeArehereImage from "../Assests/Png/hiring.svg";
import { useEffect, useState } from "react";
import { usePrimaryColor } from "../Utility/StoreData";

const FixedFooterContainer = () => {
  const [isShowPopup, setisShowPopup] = useState(true);
  const primaryColor = usePrimaryColor();

  useEffect(() => {
    const interval = setInterval(() => {
      setisShowPopup((prev) => !prev);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const InvertedTriangle = () => {
    return (
      <div
        style={{
          position: "absolute",
          bottom: "-18px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "0",
          height: "0",
          borderLeft: "15px solid transparent",
          borderRight: "15px solid transparent",
          borderTop: "18px solid rgb(0, 137, 35)",
          zIndex: 9999,
        }}
      />
    );
  };

  return (
    <div
      style={{
        position: "fixed",
        right: "15px",
        left: "15px",
        zIndex: 999,
        bottom: "10px",
      }}
    >
      <div className="d-flex justify-content-between align-items-end">
        <div>
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

        <div>
          <div
            className={classes.iconContainer}
            style={{
              backgroundColor: primaryColor,
              boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            <img src={MessageImage} alt="" />
          </div>
          <img src={WeArehereImage} alt="" className={`${classes.weAreHere}`} />
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <AnimatePresence>
          {isShowPopup && (
            <motion.div
              initial={{ x: "10%", y: "60%" }}
              animate={{ x: "20%", y: "-65%" }}
              exit={{ x: "10%", y: "30%", opacity: 0 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className={`${classes.animatedImage}`}
            >
              <img
                src={popImage}
                alt="Animated"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
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
