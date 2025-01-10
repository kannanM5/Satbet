import Logo from "../Assests/Png/LOGO.png";
import Payment1 from "../Assests/Png/payment (1).png";
import Payment2 from "../Assests/Png/payment (2).png";
import Payment3 from "../Assests/Png/payment (3).png";
import Payment7 from "../Assests/Png/payment (8).png";
import { quickLinks, socialMediaLinks } from "../Utility/StaticData";
import GoToTop from "../Assests/Png/goToTop.png";
import classes from "../SharedComponents/SharedComponent.module.css";
import { useTheme } from "../Utility/Contexts";

type FooterProps = {
  handleClickTop: () => void;
};

type TitleProps = {
  title: string;
};

const Footer = ({ handleClickTop }: FooterProps) => {
  const { isDarkTheme, primaryColor } = useTheme();

  const themeStyles = {
    backgroundColor: isDarkTheme ? "#121212" : "#fff",
    color: isDarkTheme ? "#fff" : "#000",
  };

  const Title = ({ title }: TitleProps) => {
    return (
      <p
        style={{
          color: primaryColor,
          padding: "20px 0",
          fontWeight: 700,
        }}
      >
        {title}
      </p>
    );
  };
  return (
    <>
      <div
        className={`${classes.footerContainer}`}
        style={{
          backgroundColor: themeStyles.backgroundColor,
        }}
      >
        <div className={`${classes.container} container`}>
          <div
            className={`row d-flex flex-wrap
               justify-content-between`}
            // style={{ overflow: "hidden" }}
          >
            <div className="col-lg-2 col-12">
              <img
                src={Logo}
                alt="Logo"
                className="pb-3 pt-3"
                style={{ maxWidth: "150px" }}
              />
              <p
                style={{
                  color: themeStyles.color,
                  opacity: 0.6,
                }}
              >
                We are Satbet, a friendly and honest online casino in India that
                delivers a great portfolio of games, from slots to the latest
                live dealer titles. We believe in offering entertainment in a
                secure environment and focus our efforts on providing fast and
                simple access for mobile gamblers to enjoy.
              </p>

              <div
                className={`d-flex pt-3 pb-3 gap-2 ${classes.socialMediaLinks}`}
              >
                {socialMediaLinks.map((ele, ind) => {
                  return (
                    <img
                      style={{ width: "25px", height: "auto" }}
                      key={ind}
                      src={ele.image}
                      alt="icons"
                    />
                  );
                })}
              </div>
            </div>

            <div className="col-lg-2 col-12">
              <Title title="QUICK LINKS" />
              <div className={`${classes.quickLinksContainer}`}>
                {quickLinks.map((ele, ind) => {
                  return (
                    <p
                      key={ind}
                      style={{
                        color: themeStyles.color,
                        marginBottom: "10px",
                        opacity: 0.4,
                      }}
                    >
                      {ele?.title}
                    </p>
                  );
                })}
              </div>
            </div>

            <div className="col-lg-2 col-12">
              <Title title="PAYMENT METHODS" />
              <div className={classes.paymentFooter}>
                <img
                  src={Payment1}
                  alt="Payment Method"
                  style={{ width: "200px", height: "auto" }}
                />
              </div>
            </div>

            <div className="col-lg-2 col-12">
              <Title title="RESPONSIBLE GAMING" />

              <div className={`${classes.gamingSubContainer}`}>
                <div style={{ display: "flex" }}>
                  <img
                    src={Payment2}
                    alt="Payment Method"
                    style={{ marginRight: "12px" }}
                    className={`${classes.gamingImg}`}
                  />
                  <img
                    src={Payment3}
                    alt="Payment Method"
                    className={`${classes.gamingImg}`}
                  />
                </div>

                <div
                  className={`d-flex align-items-center pt-4 pb-4 ${classes.whatsappContainer}`}
                >
                  <img src={Payment7} alt="Payment Method" />
                  <p
                    style={{
                      color: themeStyles.color,
                      marginLeft: "10px",
                      opacity: 0.5,
                    }}
                  >
                    +91 98766777667
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-12">
              <Title title="HOW TO" />

              <div className={`${classes.howToContainer}`}>
                <p
                  style={{
                    color: themeStyles.color,
                    opacity: 0.4,
                    fontSize: "14px",
                    marginBottom: "5px",
                    textTransform: "capitalize",
                  }}
                >
                  How to send money
                </p>
                <p
                  style={{
                    color: themeStyles.color,
                    opacity: 0.4,
                    fontSize: "14px",
                    textTransform: "capitalize",
                  }}
                >
                  How to add beneficiary
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundColor: primaryColor, height: "60px" }}
        className={`${classes.CopyrightsContainer}`}
      >
        <div className="container">
          <div
            className={`d-flex align-items-center justify-content-between ${classes.copyWritesInnerContainer}`}
          >
            <p
              style={{
                flex: 1,
                cursor: "pointer",
                textAlign: "left",
                color: themeStyles.color,
              }}
            >
              Copyrights 2025 © Satbet | All Rights Reserved.
            </p>

            <p
              onClick={handleClickTop}
              style={{
                fontWeight: 600,
                cursor: "pointer",
                paddingRight: "5px",
                textAlign: "right",
                color: themeStyles.color,
              }}
            >
              Go to top
              <img
                src={GoToTop}
                alt="go_to_top"
                style={{ objectFit: "contain", width: "20px" }}
              />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
