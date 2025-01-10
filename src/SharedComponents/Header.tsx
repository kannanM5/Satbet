import { useNavigate } from "react-router-dom";
import classes from "./SharedComponent.module.css";
import logo from "../Assests/Png/saibet_logo.png";
import CustomButton from "../Components/CustomButton";
import { useUserData } from "../Utility/StoreData";
import { useState } from "react";
import MenuModal from "../Modals/MenuModal";
import Dollar from "../Assests/Png/dollar.png";
import Account from "../Assests/Png/account_circle.png";
import DropIcon from "../Assests/Png/expand_more.png";
import MessageIcon from "../Assests/Png/message.png";
import { useDispatch } from "react-redux";
import { StoreSelectedMenu, StoreUserData } from "../Store/Slices/AuthSlice";
import { deleteCookie } from "../GeneralUtilities/Cookie";
import { useTheme } from "../Utility/Contexts";
import LogoutModal from "../Modals/LogoutModal";
import CustomModal from "../Components/CustomModal";
import { getSubStringText } from "../Utility/GeneralUtilities";
import { themeColor } from "../Utility/StaticData";
import ThemeModal from "../Modals/ThemeModal";

type HeaderProps = {
  onClickLogin: () => void;
  onClickRegister: () => void;
};

const Header = ({ onClickLogin, onClickRegister }: HeaderProps) => {
  const token = useUserData();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useUserData();
  const [menuModal, setmenuModal] = useState(false);
  const [logoutModal, setlogoutModal] = useState(false);
  const [isOpenThemeModal, setisOpenThemeModal] = useState(false);

  const { isDarkTheme, toggleTheme, primaryColor, setprimaryColor } =
    useTheme();

  const themeStyles = {
    backgroundColor: isDarkTheme ? "#121212" : "#fff",
    color: isDarkTheme ? "#fff" : "#000",
  };

  return (
    <>
      <div
        className={`${classes.header}`}
        style={{ backgroundColor: themeStyles.backgroundColor }}
      >
        <div
          className={` ${classes.leftHeader}`}
          style={{ backgroundColor: primaryColor }}
        >
          <div
            className={classes.imageContainer}
            style={{ backgroundColor: primaryColor }}
          >
            <img
              src={logo}
              alt="logo"
              className={classes.headerImage}
              style={{ width: "150px", height: "100px", objectFit: "contain" }}
            />
          </div>
        </div>

        <div className={classes.middleContainer}>
          <CustomButton
            title={isDarkTheme ? "Dark" : "Light"}
            onClick={toggleTheme}
            style={{
              color: themeStyles?.color,
              height: "35px",
              width: "110px",
              marginRight: "10px",
              backgroundColor: primaryColor,
            }}
          />

          <CustomButton
            title={"Themes"}
            onClick={() => setisOpenThemeModal(true)}
            style={{
              height: "35px",
              width: "110px",
              color: themeStyles?.color,
              backgroundColor: primaryColor,
            }}
          />
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
                <img src={MessageIcon} alt="Message" />
                <div
                  style={{
                    width: "15px",
                    height: "15px",
                    borderRadius: "10px",
                    backgroundColor: primaryColor,
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
                      color: themeStyles?.color,
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
                  // fontSize: "14px",
                  fontWeight: 600,
                  color: themeStyles?.color,
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
                  transition: "transform 0.3s ease", // Smooth transition
                }}
                style={{
                  width: "100px",
                  height: "35px",
                  color: themeStyles?.color,
                  background: primaryColor,
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
                  width: "80px",
                  height: "35px",
                  marginRight: "10px",
                  fontWeight: 600,
                  color: themeStyles?.color,
                  background:
                    "linear-gradient(rgb(73, 72, 72) 0%, rgb(17, 17, 17) 100%)",
                }}
              />
              <CustomButton
                title="REGISTER"
                onClick={onClickRegister}
                className={classes.registerBtn}
                style={{
                  width: "100px",
                  height: "35px",
                  color: themeStyles?.color,
                  backgroundColor: primaryColor,
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
          <ThemeModal
            data={themeColor}
            onClickTheme={(ele) => {
              setprimaryColor(ele.color);
              setisOpenThemeModal(false);
              localStorage.setItem("primaryColor", ele?.color);
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
