import Header from "../SharedComponents/Header";
import SubHeader from "../SharedComponents/SubHeader";
import { Outlet } from "react-router-dom";
import Footer from "../SharedComponents/Footer";
import MenuSubHeader from "../SharedComponents/MenuSubHeader";
import { useTheme } from "../Utility/Contexts";

const Dashboardlayout = () => {
  const { isDarkTheme } = useTheme();

  const themeStyles = {
    backgroundColor: isDarkTheme ? "#121212" : "#fff",
    color: isDarkTheme ? "#fff" : "#000",
  };

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

      <div style={{ backgroundColor: themeStyles.backgroundColor }}>
        <Outlet />
      </div>

      <Footer handleClickTop={scrollToTop} />
    </div>
  );
};

export default Dashboardlayout;
