import classes from "../Components/component.module.css";
import { useTheme } from "../Utility/Contexts";
import { games } from "../Utility/StaticData";

const GamesSection = () => {
  const { isDarkTheme } = useTheme();

  const themeStyles = {
    backgroundColor: isDarkTheme ? "#121212" : "#fff",
    color: isDarkTheme ? "#fff" : "#000",
  };

  return (
    <div
      className={`${classes.gamesSection}`}
      style={{ backgroundColor: themeStyles.backgroundColor }}
    >
      <div className={`${classes.container} container`}>
        <div className={`row pb-5 pt-5 ${classes.gamesSectionTitle}`}>
          <p
            className="col-8"
            style={{
              color: themeStyles.color,
              fontSize: "24px",
            }}
          >
            Recently Added Games
          </p>
          <p
            className="col-4"
            style={{
              color: "white",
              fontSize: "18px",
              textAlign: "right",
              cursor: "pointer",
            }}
          >
            See More
          </p>
        </div>

        <div className={`row ${classes.gameContainer}`}>
          {games.map((ele, ind) => (
            <div className={`col-lg-2 col-md-3 col-sm-4 col-6 mb-4`} key={ind}>
              <img
                src={ele.image}
                alt="game"
                className={`${classes.gameItem}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamesSection;
