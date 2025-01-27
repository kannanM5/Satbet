import CustomTextBox from "../Components/CustomTextBox";
import CustomButton from "../Components/CustomButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import classes from "./Modal.module.css";
import { useEffect, useState } from "react";
import { captchaService, loginService } from "../Services/Services";
import RefreshImage from "../Assests/Png/refresh.png";
import BouncingDotsLoader from "../Components/BouncingLoader";
import { setCookie } from "../GeneralUtilities/Cookie";
import { StoreUserData } from "../Store/Slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import CustomModal from "../Components/CustomModal";
import LogoutModal from "./LogoutModal";

export type LoginModalFormikProps = {
  userName: string;
  password: string;
  captchaImg: string;
  captcha: string;
  captchaToken: string;
};

type LoginModalProps = {
  onClickBtn: (val: LoginModalFormikProps) => void;
  isLoading?: boolean;
  onclose: () => void;
};

const validationSchema = Yup.object().shape({
  userName: Yup.string().required("Enter an username"),
  password: Yup.string().required("Enter a password"),
  captcha: Yup.string().required("Enter a capcha"),
});

const LoginModal = ({ onClickBtn, onclose }: LoginModalProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(false);
  // const [loginSuccessModal, setloginSuccessModal] = useState(false);
  const {
    values,
    errors,
    setValues,
    setFieldValue,
    touched,
    handleChange,
    handleSubmit,
  } = useFormik<LoginModalFormikProps>({
    initialValues: {
      userName: "",
      password: "",
      captchaImg: "",
      captcha: "",
      captchaToken: "",
    },
    validationSchema,
    onSubmit: () => {
      handlelogin(values);
      onClickBtn(values);
    },
  });

  useEffect(() => {
    handleGetCapcha();
  }, []);

  const handleGetCapcha = () => {
    captchaService()
      .then((res) => {
        const response = res.data;

        const captchaSrc = `data:image/png;base64,${response.captchaImage}`;

        setFieldValue("captcha", response);
        setValues({
          ...values,
          captchaImg: captchaSrc,
          captchaToken: response?.captchaToken,
          captcha: "",
        });
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const handlelogin = (data: LoginModalFormikProps) => {
    setisLoading(true);
    const payload = {
      userName: data?.userName || "",
      password: data?.password || "",
      captchaToken: data?.captchaToken,
      captchaInput: data?.captcha,
    };

    loginService(payload)
      .then((res) => {
        const response = res.data;

        console.log(response, "response");
        // if (response.status === 1) {

        setCookie("login", response);
        dispatch(StoreUserData(response));

        navigate("/dashboard");
        onclose();
        // setloginSuccessModal(true);

        // } else {
        // }
      })
      .catch((err) => {
        console.log("error", err);
      })
      .finally(() => {
        // setTimeout(() => {
        setisLoading(false);
        // }, 10000);

        // setTimeout(() => {
        //   setloginSuccessModal(false);
        // }, 10000);
      });
  };

  return (
    <>
      <div style={{ margin: "0px 20px" }}>
        <p
          style={{
            textAlign: "center",
            color: "white",
            fontFamily: "var(--regular)",
          }}
        >
          LOGIN
        </p>
        <CustomTextBox
          value={values.userName}
          onChange={handleChange("userName")}
          placeholder="Username"
          errorText={errors.userName && touched.userName ? errors.userName : ""}
        />
        <CustomTextBox
          placeholder="Password"
          value={values.password}
          onChange={handleChange("password")}
          isSecure
          errorText={errors.password && touched.password ? errors.password : ""}
        />

        <div className="d-flex align-items-center">
          <div
            className="mt-3"
            style={{ background: "transparent", width: "90px" }}
          >
            <img
              src={values?.captchaImg}
              alt="captcha_image"
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          <img
            onClick={() => {
              // setFieldValue("captcha", "");

              handleGetCapcha();
            }}
            src={RefreshImage}
            alt="refresh_image"
            style={{
              width: "20px",
              height: "auto",
              margin: "0 10px",
              objectFit: "contain",
              marginTop: "15px",
            }}
          />
        </div>

        <CustomTextBox
          placeholder="Enter capcha"
          value={values.captcha}
          onChange={handleChange("captcha")}
          errorText={errors.captcha && touched.captcha ? errors.captcha : ""}
        />

        <span className={classes.needHelp}>Need Help?</span>

        <div className="d-flex justify-content-center">
          {isLoading ? (
            <BouncingDotsLoader noOfBalls={3} style={{ margin: "20px" }} />
          ) : (
            <CustomButton
              title="LOGIN"
              onClick={handleSubmit}
              style={{
                background: "linear-gradient(180deg, #EBBA48 0%, #BA8B00 100%",
                color: "black",
                height: "45px",
                width: "30%",
                margin: "20px 0",
              }}
            />
          )}
        </div>
      </div>
      {/* 
      {loginSuccessModal && (
        <CustomModal
          showModal={loginSuccessModal}
          onClose={() => setloginSuccessModal(false)}
        >
          <LogoutModal
            title="Login SUCCESS"
            msg="You have been successfully logged in"
          />
        </CustomModal>
      )} */}
    </>
  );
};

export default LoginModal;
