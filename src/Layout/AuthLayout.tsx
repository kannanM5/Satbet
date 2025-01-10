import { Outlet, useNavigate } from "react-router-dom";
import Header from "../SharedComponents/Header";
import { useEffect, useState } from "react";
import Footer from "../SharedComponents/Footer";
import CustomModal from "../Components/CustomModal";
import LoginModal, { LoginModalFormikProps } from "../Modals/LoginModal";
import RegisterModal, {
  RegisterFromikModalProps,
} from "../Modals/RegisterModal";
import SubHeader from "../SharedComponents/SubHeader";
import { loginService, profileService } from "../Services/Services";
import { setCookie } from "../GeneralUtilities/Cookie";
import { StoreUserData } from "../Store/Slices/AuthSlice";
import { useDispatch } from "react-redux";
import LogoutModal from "../Modals/LogoutModal";

const AuthLayout = () => {
  const navigate = useNavigate();
  const [loginModal, setloginModal] = useState(false);
  const [registerModal, setregisterModal] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch();
  const [registerSuccessModal, setregisterSuccessModal] = useState(false);

  useEffect(() => {
    if (registerSuccessModal) {
      setTimeout(() => {
        setregisterSuccessModal(false);
      }, 5000);
    }
  }, [registerSuccessModal]);

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
        // if (response.status === 1) {

        setCookie("login", response);
        dispatch(StoreUserData(response));
        handleCloseLoginModal();
        navigate("/dashboard");

        // } else {
        // }
      })
      .catch((err) => {
        console.log("error", err);
      })
      .finally(() => {
        setTimeout(() => {
          setisLoading(false);
        }, 10000);
      });
  };

  const handleRegiser = (data: RegisterFromikModalProps) => {
    setisLoading(true);
    const payload = {
      userName: data?.userName || "",
      password: data?.password || "",
      affiliateTag: "",
      firstName: "",
      lastName: "",
      email: data?.email || "",
      phone: data?.mobileNUmber || "",
      phoneCountryIsdcodeId: data?.countryCode?.id || "",
      address1: "",
      address2: "",
      address3: "",
      state: "",
      city: "",
      zipCode: "",
      activeStatus: 0,
      actionUserName: "",
      brandName: "WaitRose",
      playerCurrencyId: 2,
      userAccountTypeId: 7,
      reportingHirearchyUserId: 793, // constant
      playerNotification: {
        allNotifications: 0,
        dnd: 0,
        email: 0,
        phone: 0,
        sms: 0,
        telegram: 0,
        whatsapp: 0,
      },
    };

    console.log(JSON.stringify(payload));

    profileService(payload)
      .then((res) => {
        const response = res.data;

        console.log(JSON.stringify(response), "responses");

        // if (response.status === 1) {

        // setCookie("login", JSON.stringify(response?.captchaToken));
        navigate("/");
        // dispatch(StoreProfileData(response?.captchaToken));
        handleCloseLoginModal();
        handleCloseRegisterModal();
        setregisterSuccessModal(true);

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
      });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleCloseLoginModal = () => {
    setloginModal(false);
  };

  const handleCloseRegisterModal = () => {
    setregisterModal(false);
  };

  return (
    <>
      <Header
        onClickLogin={() => setloginModal(true)}
        onClickRegister={() => {
          setregisterModal(true);
        }}
      />

      <SubHeader />

      <Outlet />

      <Footer handleClickTop={scrollToTop} />

      {loginModal && (
        <CustomModal
          title="REGISTER"
          showModal={loginModal}
          onClose={handleCloseLoginModal}
        >
          <LoginModal
            isLoading={isLoading}
            onClickBtn={(val) => {
              handlelogin(val);
            }}
          />
        </CustomModal>
      )}

      {registerModal && (
        <CustomModal
          title="REGISTER"
          showModal={registerModal}
          onClose={handleCloseRegisterModal}
        >
          <RegisterModal
            isLoading={isLoading}
            onClickBtn={(val) => {
              handleRegiser(val);
            }}
          />
        </CustomModal>
      )}

      {registerSuccessModal && (
        <CustomModal
          showModal={registerSuccessModal}
          onClose={() => setregisterSuccessModal(false)}
        >
          <LogoutModal
            title="REGISTER SUCCESS"
            msg="You have been successfully registered"
          />
        </CustomModal>
      )}
    </>
  );
};

export default AuthLayout;
