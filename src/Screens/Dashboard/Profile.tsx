import CustomButton from "../../Components/CustomButton";
import CustomTextBox from "../../Components/CustomTextBox";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useUserData } from "../../Utility/StoreData";
import { useEffect, useState } from "react";
import { useTheme } from "../../Utility/Contexts";
import {
  countryDropdownService,
  getPlayerprofileService,
  updataPlayerprofileService,
} from "../../Services/Services";
import CustomDropdown from "../../Components/CustomDropdown";
import Loader from "../../SharedComponents/Loader";
import { CountryCodeDetails } from "../../@types/reducer_types";
// import CustomDropdown from "../../Components/CustomDropdown";

type CurrencyApiProps = {
  id: number;
  code: string;
  name: string;
};

type CountryApiProps = {
  createdAt: string;
  createdBy: string;
  id: 1;
  isdCode: string;
  lastUpdatedAt: string;
  lastUpdatedBy: string;
  name: string;
};

type ProfileFormikValues = {
  userName: string;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  dob: string;
  country: string;
  city: string;
  currency: CurrencyApiProps | null;
  state: string;
  mobile: string;
  pincode: string;
  selectedCountry: CountryApiProps | null;
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Enter your first name"),
  lastName: Yup.string().required("Enter ypur last name"),
  dob: Yup.string().required("Select your DOB"),
  pincode: Yup.string().required("Please enter pincode"),
});

const Profile = () => {
  const userData = useUserData();
  const [country, setcountry] = useState<CountryCodeDetails[]>([]);
  const [isLoading, setisLoading] = useState(false);
  const { primaryColor } = useTheme();

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    setValues,
    setFieldValue,
  } = useFormik<ProfileFormikValues>({
    initialValues: {
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      dob: "",
      country: "",
      city: "",
      currency: null,
      state: "",
      mobile: "",
      pincode: "",
      selectedCountry: null,
    },
    validationSchema,
    onSubmit: () => {
      handleUpdatePlayerProfile(values);
    },
  });

  useEffect(() => {
    handleGetProfileData();
    handleCountryDropdown();
  }, [userData]);

  const handleGetProfileData = () => {
    setisLoading(true);
    getPlayerprofileService(userData?.id)
      .then((res) => {
        const response = res.data;

        console.log(response, "response");

        const selectedCountry = country?.find(
          (ele) => ele?.id === response?.countryIsdcodeDetails?.id
        );
        console.log(selectedCountry, "selectedCountry");

        setValues((prevValues) => ({
          ...prevValues,
          userName: response?.userName || "",
          firstName: response?.firstName || "",
          lastName: response?.lastName || "",
          email: response?.email || "",
          address: "",
          dob: response?.dob || "",
          country: response?.countryIsdcodeDetails || null,
          city: response?.city || "",
          currency: response?.playerCurrencyDetails || null,
          state: response?.state || "",
          mobile: response?.phone || "",
          pincode: response?.zipCode || "",
          selectedCountry: response?.countryIsdcodeDetails,
        }));
      })
      .catch((err) => {
        console.log(err, "error");
      })
      .finally(() => {
        setisLoading(false);
      });
  };

  const handleUpdatePlayerProfile = (data: ProfileFormikValues) => {
    setisLoading(true);
    const payload = {
      userName: data?.userName || "",
      firstName: data?.userName || "",
      lastName: data?.lastName || "",
      email: data?.email || "",
      address: data?.address || "",
      dob: data?.dob || "",
      // country: data?.country || "",
      city: data?.city || "",
      // currency: data?.currency || "",
      state: data?.state || "",
      mobile: data?.mobile || "",
      pincode: data?.pincode || "",
    };
    updataPlayerprofileService(userData?.id, payload)
      .then((res) => {
        const response = res.data;

        console.log(response, "response");
      })
      .catch((err) => {
        console.log(err, "error");
      })
      .finally(() => {
        setisLoading(false);
      });
  };

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

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div
        style={{
          border: "1px solid #565656",
          maxWidth: "1000px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          margin: "20px",
        }}
      >
        <h6
          style={{
            textTransform: "uppercase",
            color: primaryColor,
            textAlign: "center",
            padding: "15px",
            backgroundColor: "#3A3A3A",
          }}
        >
          your personal data
        </h6>

        <div className="container">
          <div className="row d-flex justify-content-center p-2">
            <div className="col-lg-6">
              <CustomTextBox
                value={values.userName}
                onChange={handleChange("userName")}
                placeholder="Username"
                isDisabled
                style={{ height: "45px" }}
                errorText={
                  errors.userName && touched.userName ? errors.userName : ""
                }
              />
            </div>

            <div className="col-lg-6">
              <CustomTextBox
                value={values.firstName}
                onChange={handleChange("firstName")}
                placeholder="First name"
                style={{ height: "45px" }}
                errorText={
                  errors.firstName && touched.firstName ? errors.firstName : ""
                }
              />
            </div>
            <div className="col-lg-6">
              <CustomTextBox
                value={values.email}
                onChange={handleChange("email")}
                placeholder="Email"
                style={{ height: "45px" }}
                isDisabled
                errorText={errors.email && touched.email ? errors.email : ""}
              />
            </div>

            <div className="col-lg-6">
              <CustomTextBox
                value={values.lastName}
                onChange={handleChange("lastName")}
                placeholder="Last name"
                style={{ height: "45px" }}
                errorText={
                  errors.lastName && touched.lastName ? errors.lastName : ""
                }
              />
            </div>

            <div className="col-lg-6">
              <CustomTextBox
                value={values.dob}
                onChange={handleChange("dob")}
                placeholder="Date of birth"
                style={{ height: "45px" }}
                errorText={errors.dob && touched.dob ? errors.dob : ""}
              />
            </div>

            <div className="col-lg-6">
              <CustomTextBox
                value={values.state}
                onChange={handleChange("state")}
                placeholder="State"
                style={{ height: "45px" }}
                errorText={errors.state && touched.state ? errors.state : ""}
              />
            </div>

            <div className="col-lg-6">
              {/* <CustomTextBox
                value={values.country}
                onChange={handleChange("country")}
                placeholder="Country"
                style={{ height: "45px" }}
                errorText={
                  errors.country && touched.country ? errors.country : ""
                }
              /> */}

              <CustomDropdown
                data={country}
                fieldName="name"
                value={values.selectedCountry}
                onChange={(val) => {
                  setFieldValue("selectedCountry", val);
                }}
                defaultTitle="Select Country"
              />

              {/* <CustomTextBox
                value={values.country?.name || ""}
                onChange={handleChange("country")}
                placeholder="Currency"
                isDisabled
                style={{ height: "45px" }}
                errorText={
                  errors.country && touched.country ? errors.country : ""
                }
              /> */}
            </div>

            <div className="col-lg-6">
              <CustomTextBox
                value={values.city}
                onChange={handleChange("city")}
                placeholder="City"
                style={{ height: "45px" }}
                errorText={errors.city && touched.city ? errors.city : ""}
              />
            </div>

            <div className="col-lg-6">
              <CustomTextBox
                value={values.mobile}
                onChange={handleChange("mobile")}
                placeholder="Mobile number"
                style={{ height: "45px" }}
                errorText={errors.mobile && touched.mobile ? errors.mobile : ""}
              />
            </div>

            <div className="col-lg-6">
              <CustomTextBox
                value={values.address}
                onChange={handleChange("address")}
                placeholder="Address"
                style={{ height: "45px" }}
                errorText={
                  errors.address && touched.address ? errors.address : ""
                }
              />
            </div>

            <div className="col-lg-6">
              <CustomTextBox
                value={values.currency?.name || ""}
                onChange={handleChange("currency")}
                placeholder="Currency"
                isDisabled
                style={{ height: "45px" }}
                errorText={
                  errors.currency && touched.currency ? errors.currency : ""
                }
              />
            </div>

            <div className="col-lg-6">
              <CustomTextBox
                value={values.pincode}
                onChange={handleChange("pincode")}
                placeholder="Pincode"
                // isDisabled
                style={{ height: "45px" }}
                errorText={
                  errors.pincode && touched.pincode ? errors.pincode : ""
                }
              />
            </div>

            <CustomButton
              title="UPDATE"
              onClick={handleSubmit}
              style={{
                width: "100px",
                height: "35px",
                backgroundColor: primaryColor,
                // background:
                //   "linear-gradient(180deg,rgb(244, 210, 132) 0%, #BA8B00 100%)",
                position: "relative",
                fontSize: "13px",
                margin: "15px 0",
              }}
            />
          </div>
        </div>
      </div>

      {isLoading && <Loader />}
    </div>
  );
};

export default Profile;
