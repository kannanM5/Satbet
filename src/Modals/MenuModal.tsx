import { useDispatch } from "react-redux";
import RightIcon from "../Assests/Png/dropright_icon.svg";
import CustomButton from "../Components/CustomButton";
import { StoreSelectedMenu } from "../Store/Slices/AuthSlice";
import { menuData } from "../Utility/StaticData";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../Utility/Contexts";
import RightBlueIcon from "../Assests/Png/dropright_icon_blue.png";
import classes from "./Modal.module.css";

type MenuModalProps = {
  onClickItem: () => void;
  onClickLogout: () => void;
  onCloseMenuModal?: () => void;
};

const MenuModal = ({
  onClickItem,
  onClickLogout,
  onCloseMenuModal,
}: MenuModalProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isDarkTheme, primaryColor } = useTheme();

  const themeStyles = {
    backgroundColor: isDarkTheme
      ? "linear-gradient(180deg, #333 0%, #111 100%)"
      : "linear-gradient(180deg, #ddd 0%, #fff 100%)",
    color: isDarkTheme ? "#fff" : "#000",
  };

  return (
    <div onClick={onCloseMenuModal}>
      <div
        className={classes.menuModal}
        style={{
          background: themeStyles?.backgroundColor,
        }}
      >
        <p style={{ color: themeStyles.color }}>Hi User</p>

        <div
          style={{
            background: `linear-gradient(45deg,transparent, ${primaryColor}, transparent)`,
            height: "1px",
            margin: "8px 0px",
          }}
        />
        <div>
          {menuData.map((ele, ind) => {
            return (
              <div
                key={ind}
                style={{
                  padding: "6px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  dispatch(StoreSelectedMenu(ele?.id));
                  onClickItem();
                  navigate(ele?.path);
                }}
              >
                <>
                  <div
                    style={{ margin: "50x 0px" }}
                    className={`d-flex align-items-center justify-content-between`}
                  >
                    <div className="d-flex">
                      <img src={ele?.image} alt="menu-icon" />
                      <p
                        className={classes.menuItem}
                        style={{
                          color: themeStyles.color,
                        }}
                      >
                        {ele?.title}
                      </p>
                    </div>
                    <img
                      src={
                        primaryColor === "#ebba48" ? RightIcon : RightBlueIcon
                      }
                      alt="menu-icon"
                    />
                  </div>

                  <div
                    style={{
                      background: `linear-gradient(45deg,transparent,${primaryColor}, transparent)`,
                      height: "1px",
                      margin: "5px 0px",
                    }}
                  />
                </>
              </div>
            );
          })}
        </div>

        <CustomButton
          title="LOGOUT"
          onClick={onClickLogout}
          style={{
            height: "35px",
            margin: "5px 0px",
            backgroundColor: primaryColor,
            color: themeStyles.color,
          }}
        />
      </div>
    </div>
  );
};

export default MenuModal;
