import Logo from "../Assests/Png/LOGO.png";
import Payment1 from "../Assests/Png/payment (1).png";
import Payment2 from "../Assests/Png/payment (2).png";
import Payment3 from "../Assests/Png/payment (3).png";
import Payment7 from "../Assests/Png/payment (8).png";
import { quickLinks, socialMediaLinks } from "../Utility/StaticData";
import GoToTop from "../Assests/Png/goToTop.png";
import classes from "../SharedComponents/SharedComponent.module.css";
import useThemes from "../Hooks/useThemes";

type FooterProps = {
  handleClickTop: () => void;
};

type TitleProps = {
  title: string;
};

const Footer = ({ handleClickTop }: FooterProps) => {
  const getThemeColors = useThemes();
  const Title = ({ title }: TitleProps) => {
    return (
      <p
        className={`${classes.footerTitle}`}
        style={{
          color: getThemeColors.primaryColor,
          padding: "20px 0",
          fontWeight: "var(--weightBold)",
          whiteSpace: "nowrap",
          fontFamily: "var(--regular)",
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
          backgroundColor: getThemeColors.bgColor,
          borderTop: "1px solid #58585",
        }}
      >
        <div className={`container px-2`}>
          <div className={`d-flex flex-wrap`}>
            <div className="col-lg-3 col-12 px-2">
              <img
                src={Logo}
                alt="Logo"
                className={`pb-3 pt-3 ${classes.footerLogo}`}
                style={{ maxWidth: "150px" }}
              />
              <p
                style={{
                  color: getThemeColors.textColor,
                  opacity: 0.5,
                  fontFamily: "var(--regular)",
                  // fontWeight: "var(--weightRegular)",
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

            <div className="col-lg-3 col-12 px-2">
              <Title title="QUICK LINKS" />
              <div className={`${classes.quickLinksContainer}`}>
                {quickLinks.map((ele, ind) => {
                  return (
                    <p
                      key={ind}
                      style={{
                        color: getThemeColors.textColor,
                        marginBottom: "10px",
                        opacity: 0.4,
                        whiteSpace: "nowrap",
                        fontFamily: "var(--regular)",
                      }}
                    >
                      {ele?.title}
                    </p>
                  );
                })}
              </div>
            </div>

            <div className="col-lg-3 col-12 px-2">
              <Title title="PAYMENT METHODS" />
              <div className={classes.paymentFooter}>
                <img
                  src={Payment1}
                  alt="Payment Method"
                  style={{ width: "200px", height: "auto" }}
                />
              </div>
            </div>

            <div className="col-lg-3 col-12 px-2">
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
                      color: getThemeColors.textColor,
                      marginLeft: "10px",
                      opacity: 0.5,
                      whiteSpace: "nowrap",
                      fontFamily: "var(--regular)",
                    }}
                  >
                    +91 98766777667
                  </p>
                </div>
              </div>
              <div>
                <Title title="HOW TO" />

                <div className={`${classes.howToContainer}`}>
                  <p
                    style={{
                      color: getThemeColors.textColor,
                      opacity: 0.4,
                      fontSize: "14px",
                      marginBottom: "5px",
                      textTransform: "capitalize",
                      fontFamily: "var(--regular)",
                    }}
                  >
                    How to send money
                  </p>
                  <p
                    style={{
                      color: getThemeColors.textColor,
                      opacity: 0.4,
                      fontSize: "14px",
                      textTransform: "capitalize",
                      fontFamily: "var(--regular)",
                    }}
                  >
                    How to add beneficiary
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: getThemeColors.primaryColor,
          height: "60px",
        }}
        className={`${classes.CopyrightsContainer} d-flex align-items-center`}
      >
        <div className={`container`}>
          <div
            className={`col-lg-12 d-flex align-items-center  justify-content-between ${classes.copyRightsInner}`}
          >
            <p
              style={{
                cursor: "pointer",
                color: getThemeColors.isMode ? "white" : "black",
                fontFamily: "var(--regular)",
              }}
            >
              Copyrights 2025 © Satbet | All Rights Reserved.
            </p>

            <p
              onClick={handleClickTop}
              style={{
                fontWeight: "var(--weightSemibold)",
                cursor: "pointer",
                paddingRight: "5px",
                color: getThemeColors.isMode ? "white" : "black",
                fontFamily: "var(--regular)",
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
