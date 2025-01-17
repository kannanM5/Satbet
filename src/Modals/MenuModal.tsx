import { useDispatch } from "react-redux";
import RightIcon from "../Assests/Png/dropright_icon.svg";
import CustomButton from "../Components/CustomButton";
import { StoreSelectedMenu } from "../Store/Slices/AuthSlice";
import { menuData } from "../Utility/StaticData";
import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";
import useThemes from "../Hooks/useThemes";
import { useUserData } from "../Utility/StoreData";

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
  const getThemeColors = useThemes();
  const userData = useUserData();

  return (
    <div onClick={onCloseMenuModal}>
      <div
        className={classes.menuModal}
        style={{
          background: getThemeColors.bgColor,
        }}
      >
        <p
          style={{
            // color: getThemeColors.textColor,
            color: "rgba(206, 203, 203, 0.6)",
            fontFamily: "var(--regular)",
            fontSize: "14px",
            // opacity: 0.7,
          }}
        >
          Hi,
          <span
            style={{
              fontSize: "14x",
              color: "white",
              fontWeight: "var(--weightSemibold)",
              fontFamily: "var(--regular)",
            }}
          >
            {" "}
            {userData?.userName}
          </span>
        </p>

        <div
          style={{
            background: `linear-gradient(45deg,transparent, ${getThemeColors.primaryColor}, transparent)`,
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
                          color: getThemeColors.textColor,
                          fontFamily: "var(--regular)",
                        }}
                      >
                        {ele?.title}
                      </p>
                    </div>
                    <img src={RightIcon} alt="menu-icon" />
                  </div>

                  <div
                    style={{
                      background: `linear-gradient(45deg,transparent,${getThemeColors.primaryColor}, transparent)`,
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
            backgroundColor: getThemeColors.primaryColor,
            color: getThemeColors.textColor,
          }}
        />
      </div>
    </div>
  );
};

export default MenuModal;
