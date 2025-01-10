import CustomTextBox from "../Components/CustomTextBox";
import CustomButton from "../Components/CustomButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import classes from "./Modal.module.css";
import { useEffect } from "react";
import { captchaService } from "../Services/Services";
import RefreshImage from "../Assests/Png/refresh.png";
import BouncingDotsLoader from "../Components/BouncingLoader";

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
};

const validationSchema = Yup.object().shape({
  userName: Yup.string().required("Enter an username"),
  password: Yup.string().required("Enter a password"),
  captcha: Yup.string().required("Enter a capcha"),
});

const LoginModal = ({ onClickBtn, isLoading }: LoginModalProps) => {
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

        // if (response.status === 1) {

        const captchaSrc = `data:image/png;base64,${response.captchaImage}`;

        setFieldValue("captcha", response);
        setValues({
          ...values,
          captchaImg: captchaSrc,
          captchaToken: response?.captchaToken,
          captcha: "",
        });

        // } else {
        // }
      })
      .catch((err) => {
        console.log("error", err);
      })
      .finally(() => {});
  };

  return (
    <div style={{ margin: "0px 20px" }}>
      <p style={{ textAlign: "center", color: "white" }}>LOGIN</p>
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
  );
};

export default LoginModal;
