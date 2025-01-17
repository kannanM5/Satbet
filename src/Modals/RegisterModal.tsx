import CustomTextBox from "../Components/CustomTextBox";
import CustomButton from "../Components/CustomButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomDropdown from "../Components/CustomDropdown";
import CustomCheckBox from "../Components/CustomCheckbox";
import { useEffect, useState } from "react";
import {
  countryDropdownService,
  currencyDropdownService,
} from "../Services/Services";
import { useTheme } from "../Utility/Contexts";
import {
  CountryCodeDetails,
  PlayerCurrencyDetails,
} from "../@types/reducer_types";
import BouncingDotsLoader from "../Components/BouncingLoader";
import { usePrimaryColor } from "../Utility/StoreData";

const numberRegex = /^[0-9]*$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]$/;

type RegisterModalProps = {
  onClickBtn: (val: RegisterFromikModalProps) => void;
  isLoading?: boolean;
};

export type RegisterFromikModalProps = {
  userName: string;
  password: string;
  confirmPassword: string;
  mobileNUmber: string;
  isChecked: boolean;
  country: CountryCodeDetails | null;
  countryCode: CountryCodeDetails | null;
  currency: PlayerCurrencyDetails | null;
  isCheckedYears: boolean;
  email: string;
};

const validationSchema = Yup.object().shape({
  userName: Yup.string().required("Enter an username"),
  password: Yup.string()
    .required("Enter a password")
    .matches(
      passwordRegex,
      "Password must have 1 upper and lower case letter, 1 number and 1 special character and have minmum 8 characters"
    ),
  confirmPassword: Yup.string()
    .required("Confirm password is required")

    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  mobileNUmber: Yup.string()
    .required("Enter your mobile number")
    .test(
      "isValidNUmber",
      "Mobile number must only contain digits",
      function (val) {
        if (!val) {
          return false;
        }

        return numberRegex.test(val);
      }
    ),
  isChecked: Yup.boolean().oneOf(
    [true],
    "You must accept the Terms and Conditions"
  ),
  isCheckedYears: Yup.boolean().oneOf(
    [true],
    "You must confirm you are an adult"
  ),
  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email"),
});

const RegisterModal = ({ onClickBtn, isLoading }: RegisterModalProps) => {
  const [country, setcountry] = useState<CountryCodeDetails[]>([]);
  const [currency, setcurrency] = useState<PlayerCurrencyDetails[]>([]);
  const primaryColor = usePrimaryColor();
  const { isDarkTheme } = useTheme();

  const themeStyles = {
    backgroundColor: isDarkTheme ? "#121212" : "#fff",
    color: isDarkTheme ? "#000" : "#fff",
  };

  const { values, errors, touched, handleChange, handleSubmit, setFieldValue } =
    useFormik<RegisterFromikModalProps>({
      initialValues: {
        userName: "",
        password: "",
        confirmPassword: "",
        mobileNUmber: "",
        isChecked: false,
        country: null,
        countryCode: null,
        currency: null,
        isCheckedYears: false,
        email: "",
      },
      validationSchema,
      onSubmit: () => {
        onClickBtn(values);
      },
    });

  useEffect(() => {
    handleCountryDropdown();
    handleCurrencyDropdown();

    return () => {};
  }, []);

  const handleCountryDropdown = () => {
    countryDropdownService()
      .then((res) => {
        const response = res.data;
        setcountry(response);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };

  const handleCurrencyDropdown = () => {
    currencyDropdownService()
      .then((res) => {
        const response = res.data;
        setcurrency(response);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };

  return (
    <div style={{ margin: "0px 20px" }}>
      <p
        style={{
          textAlign: "center",
          color: themeStyles.color,
          fontSize: "20px",
          fontFamily: "var(--regular)",
        }}
      >
        AUTOMATIC REGISTER
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
        maxLength={16}
      />

      <CustomTextBox
        placeholder="Confirm Password"
        value={values.confirmPassword}
        onChange={handleChange("confirmPassword")}
        isSecure
        maxLength={16}
        errorText={
          errors.confirmPassword && touched.confirmPassword
            ? errors.confirmPassword
            : ""
        }
      />

      <CustomDropdown
        data={country}
        fieldName="name"
        value={values.country}
        onChange={(val) => {
          setFieldValue("country", val);
          console.log(val);
        }}
        defaultTitle="Select Country"
      />

      <div className="d-flex justify-content-between">
        <div className="col-3">
          <CustomDropdown
            data={country}
            fieldName="code"
            value={values.countryCode}
            defaultTitle="Code"
            onChange={(val) => {
              console.log(val);
              setFieldValue("countryCode", val);
            }}
          />
        </div>
        <div className="col-8">
          <CustomTextBox
            placeholder="Mobile Number"
            value={values.mobileNUmber}
            onChange={handleChange("mobileNUmber")}
            maxLength={16}
            errorText={
              errors.mobileNUmber && touched.mobileNUmber
                ? errors.mobileNUmber
                : ""
            }
          />
        </div>
      </div>

      <CustomTextBox
        placeholder="Email"
        value={values.email}
        onChange={handleChange("email")}
        errorText={errors.email && touched.email ? errors.email : ""}
      />

      <CustomDropdown
        data={currency}
        fieldName="name"
        value={values.currency}
        defaultTitle="Select currency"
        onChange={(val) => {
          setFieldValue("currency", val);
          console.log(val);
        }}
      />

      <CustomCheckBox
        label="I am at least 18 years old"
        checked={values.isCheckedYears}
        onChange={() => {
          setFieldValue("isCheckedYears", !values.isCheckedYears);
        }}
        errorText={
          errors.isCheckedYears && touched.isCheckedYears
            ? errors.isCheckedYears
            : ""
        }
      />

      <CustomCheckBox
        label="I agree to Terms and Conditions"
        checked={values.isChecked}
        onChange={() => {
          setFieldValue("isChecked", !values.isChecked);
        }}
        errorText={
          errors.isChecked && touched.isChecked ? errors.isChecked : ""
        }
      />

      <div className="d-flex justify-content-center">
        {isLoading ? (
          <BouncingDotsLoader noOfBalls={3} style={{ margin: "20px" }} />
        ) : (
          <CustomButton
            title="REGISTER"
            onClick={handleSubmit}
            style={{
              // background: "linear-gradient(180deg, #EBBA48 0%, #BA8B00 100%",
              color: "black",
              height: "45px",
              width: "30%",
              margin: "20px 0",
              backgroundColor: primaryColor,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default RegisterModal;
