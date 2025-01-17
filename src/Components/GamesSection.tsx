import classes from "../Components/component.module.css";
import useThemes from "../Hooks/useThemes";
import { games } from "../Utility/StaticData";

const GamesSection = () => {
  const getThemeColors = useThemes();
  return (
    <div
      className={`${classes.gamesSection}`}
      style={{ backgroundColor: getThemeColors.bgColor }}
    >
      <div className={`${classes.container} container`}>
        <div className={`row pb-5 pt-5 ${classes.gamesSectionTitle}`}>
          <p
            className="col-8"
            style={{
              color: getThemeColors.textColor,
              fontSize: "24px",
              fontFamily: "var(--medium)",
            }}
          >
            Recently Added Games
          </p>
          <p
            className="col-4"
            style={{
              color: getThemeColors.textColor,
              fontSize: "18px",
              textAlign: "right",
              cursor: "pointer",
              fontFamily: "var(--regular)",
            }}
          >
            See More
          </p>
        </div>

        <div className={`row ${classes.gameContainer}`}>
          {games.map((ele, ind) => (
            <div
              className={`col-lg-2 col-md-3 col-sm-4 col-xs-5 mb-4 ${classes.gameItemContainer}`}
              key={ind}
            >
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
