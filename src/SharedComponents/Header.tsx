import { useNavigate } from "react-router-dom";
import classes from "./SharedComponent.module.css";
import logo from "../Assests/Png/saibet_logo.png";
import CustomButton from "../Components/CustomButton";
import { useIsDarkMode, useUserData } from "../Utility/StoreData";
import { useState } from "react";
import MenuModal from "../Modals/MenuModal";
import Dollar from "../Assests/Png/dollar.png";
import Account from "../Assests/Png/account_circle.png";
import DropIcon from "../Assests/Png/expand_more.png";
import MessageIcon from "../Assests/Png/message.png";
import { useDispatch } from "react-redux";
import { StoreSelectedMenu, StoreUserData } from "../Store/Slices/AuthSlice";
import { deleteCookie } from "../GeneralUtilities/Cookie";
import LogoutModal from "../Modals/LogoutModal";
import CustomModal from "../Components/CustomModal";
import { getSubStringText } from "../Utility/GeneralUtilities";
import ThemeModal from "../Modals/ThemeModal";
import {
  StoreDarkThemeColor,
  StoreIsDarkMode,
  StorePrimaryColor,
} from "../Store/Slices/ThemeSlice";
import { themeColorData } from "../Utility/StaticData";
import useThemes from "../Hooks/useThemes";

type HeaderProps = {
  onClickLogin: () => void;
  onClickRegister: () => void;
};

const Header = ({ onClickLogin, onClickRegister }: HeaderProps) => {
  const token = useUserData();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useUserData();
  const isDarkMode = useIsDarkMode();
  const getThemeColors = useThemes();
  const [menuModal, setmenuModal] = useState(false);
  const [logoutModal, setlogoutModal] = useState(false);
  const [isOpenThemeModal, setisOpenThemeModal] = useState(false);

  const handleDarkTheme = () => {
    const newTheme = isDarkMode ? false : true;
    dispatch(StoreIsDarkMode(newTheme));
    dispatch(StoreDarkThemeColor(newTheme ? "white" : "black"));
    localStorage.setItem("theme", newTheme ? "white" : "black");
    localStorage.setItem("mode", JSON.stringify(newTheme));
  };

  return (
    <>
      <div
        className={`${classes.header}`}
        style={{ backgroundColor: getThemeColors.bgColor }}
      >
        <div
          className={` ${classes.leftHeader}`}
          style={{ backgroundColor: getThemeColors.primaryColor }}
        >
          <div
            className={classes.imageContainer}
            style={{ backgroundColor: getThemeColors.primaryColor }}
          >
            <img
              src={logo}
              alt="logo"
              className={classes.headerImage}
              style={{ width: "150px", height: "100px", objectFit: "contain" }}
            />
          </div>
        </div>

        <div
          className={`d-flex align-items-center ${classes.middleContainer}`}
          // style={{ width: "220px" }}
        >
          <CustomButton
            title={getThemeColors.isMode ? "Dark" : "Light"}
            onClick={() => {
              handleDarkTheme();
            }}
            style={{
              // color: getThemeColors.textColor,
              height: "30px",
              width: "60px",
              marginRight: "10px",
              backgroundColor: getThemeColors.primaryColor,
              boxShadow: "var(--shadowBtn)",
            }}
          />

          <CustomButton
            title={"Themes"}
            onClick={() => setisOpenThemeModal(true)}
            style={{
              height: "35px",
              width: "75px",
              // color: getThemeColors.textColor,
              backgroundColor: getThemeColors.primaryColor,
              boxShadow: "var(--shadowBtn)",
              marginRight: "10px",
            }}
          />

          {/* <CustomSwitch
            isChecked={isToggleMode}
            toggleSwitch={() => {
              setisToggleMode((prev) => !prev);
              handleDarkTheme();
            }}
          /> */}
        </div>

        <div className={`${classes.rightHeader}`}>
          {token ? (
            <>
              <div
                className={classes.messageCount}
                style={{
                  position: "relative",
                  display: "inline-block",
                  marginRight: "15px",
                }}
              >
                <img
                  src={MessageIcon}
                  alt="Message"
                  style={{ boxShadow: "var(--shadowBtn)" }}
                />
                <div
                  style={{
                    width: "15px",
                    height: "15px",
                    borderRadius: "10px",
                    backgroundColor: getThemeColors.primaryColor,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    top: 0,
                    right: -10,
                  }}
                >
                  <p
                    style={{
                      fontSize: "10px",
                      margin: "0px",
                      color: getThemeColors.textColor,
                    }}
                  >
                    3
                  </p>
                </div>
              </div>

              <CustomButton
                title="DEPOSIT"
                onClick={onClickLogin}
                className={classes.depositBtn}
                isImage={Dollar}
                style={{
                  width: "90px",
                  height: "35px",
                  marginRight: "10px",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "white",
                  boxShadow: "var(--shadowBtn)",
                  background:
                    "linear-gradient(rgb(73, 72, 72) 0%, rgb(17, 17, 17) 100%)",
                }}
              />
              <CustomButton
                title={getSubStringText(userData?.userName, 6) || "User"}
                onClick={() => setmenuModal((prev) => !prev)}
                isImage={Account}
                isRightImage={DropIcon}
                className={classes.userBtn}
                rightImageStyle={{
                  transform: menuModal ? "rotate(180deg)" : "",
                  transition: "transform 0.3s ease",
                }}
                style={{
                  width: "100px",
                  height: "35px",
                  color: "black",
                  background: getThemeColors.primaryColor,
                  boxShadow: "var(--shadowBtn)",
                  // "linear-gradient(180deg,rgb(244, 210, 132) 0%, #BA8B00 100%)",
                  position: "relative",
                  fontSize: "13px",
                }}
              />
            </>
          ) : (
            <>
              <CustomButton
                title="LOGIN"
                onClick={onClickLogin}
                className={classes.loginBtn}
                style={{
                  width: "65px",
                  height: "35px",
                  marginRight: "10px",
                  fontWeight: 600,
                  color: getThemeColors.textColor,
                  fontSize: "14px",
                  boxShadow: "0px 4px 4px 0px rgba(255, 255, 255, 0.15) inset",
                  background: "linear-gradient(180deg, #333 0%, #111 100%)",
                  // "linear-gradient(rgb(73, 72, 72) 0%, rgb(17, 17, 17) 100%)",
                }}
              />
              <CustomButton
                title="REGISTER"
                onClick={onClickRegister}
                className={classes.registerBtn}
                style={{
                  width: "85px",
                  height: "35px",
                  fontSize: "14px",
                  color: getThemeColors.isMode ? "white" : "black",
                  backgroundColor: getThemeColors.primaryColor,
                  boxShadow: "0px 4px 4px 0px rgba(255, 255, 255, 0.30) inset",
                  // background:
                  //   "linear-gradient(180deg,rgb(244, 210, 132) 0%, #BA8B00 100%)",
                }}
              />
            </>
          )}
        </div>
      </div>

      {menuModal && (
        <div
          onClick={() => setmenuModal(false)}
          style={{
            position: "absolute",
            top: 60,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <div className={classes.menuModal}>
            <MenuModal
              onCloseMenuModal={() => setmenuModal(false)}
              onClickLogout={() => {
                setmenuModal(false);
                setlogoutModal(true);

                deleteCookie("login");
                dispatch(StoreSelectedMenu(-1));
                dispatch(StoreUserData(""));

                setTimeout(() => {
                  navigate("/");
                  setlogoutModal(false);
                }, 2000);
              }}
              onClickItem={() => {
                setmenuModal(false);
              }}
            />
          </div>
        </div>
      )}

      {isOpenThemeModal && (
        <CustomModal
          showModal={isOpenThemeModal}
          onClose={() => setisOpenThemeModal(false)}
          size="sm"
        >
          {/* <CustomColorPicker
            value={""}
            defaultValue={"#ebba48"}
            onChange={(color) => {
              console.log("bf", color);
              // setisOpenThemeModal(false);
            }}
          /> */}

          <ThemeModal
            data={themeColorData}
            onClickTheme={(ele) => {
              console.log(ele, "ele");

              localStorage.setItem("primaryColor", ele?.color);
              dispatch(StorePrimaryColor(ele?.color));
              setisOpenThemeModal(false);
            }}
          />
        </CustomModal>
      )}

      {logoutModal && (
        <CustomModal
          showModal={logoutModal}
          onClose={() => setlogoutModal(false)}
        >
          <LogoutModal
            title="LOGOUT SUCCESS"
            msg="You have been successfully logout"
          />
        </CustomModal>
      )}
    </>
  );
};

export default Header;
