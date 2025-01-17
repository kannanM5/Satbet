import LeftImage from "../Assests/Png/slider.webp";
import RightImage from "../Assests/Png/slider5.jpg";
import { usePrimaryColor } from "../Utility/StoreData";
import classes from "./component.module.css";

const DashboardSection = () => {
  const primaryColor = usePrimaryColor();

  return (
    <div
      style={{ backgroundColor: primaryColor }}
      className={`d-flex justify-content-center ${classes.dashboardSection}`}
    >
      <img src={LeftImage} alt="img" />

      <img src={RightImage} alt="img" />
    </div>
  );
};

export default DashboardSection;
