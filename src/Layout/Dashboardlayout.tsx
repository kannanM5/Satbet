import Header from "../SharedComponents/Header";
import SubHeader from "../SharedComponents/SubHeader";
import { Outlet } from "react-router-dom";
import Footer from "../SharedComponents/Footer";
import MenuSubHeader from "../SharedComponents/MenuSubHeader";

import useThemes from "../Hooks/useThemes";

const Dashboardlayout = () => {
  const getThemeColors = useThemes();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Header onClickLogin={() => {}} onClickRegister={() => {}} />

      <SubHeader />
      <MenuSubHeader />

      <div
        style={{ backgroundColor: getThemeColors.isMode ? "white" : "#222" }}
      >
        <Outlet />
      </div>

      <Footer handleClickTop={scrollToTop} />
    </div>
  );
};

export default Dashboardlayout;
