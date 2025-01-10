import { jsonInstance } from "./Axios";

export const captchaService = () => {
  return jsonInstance.get(
    "main-api-gateway/player-management-gateway/player-management/api/v1/player-login/captcha"
  );
};

export const loginService = (data: any) => {
  const headers = {
    username: data.userName,
    password: data.password,
    captchaToken: data.captchaToken,
    captchaInput: data.captchaInput,
    userAccountTypeId: 7,
  };

  const payload = {};

  return jsonInstance.post(
    "main-api-gateway/player-management-gateway/player-management/api/v1/player-login/validate-user-credentials-retrieve-user-profile",
    payload,
    { headers }
  );
};

export const profileService = (data: object) => {
  return jsonInstance.post(
    "main-api-gateway/player-management-gateway/player-management/api/v1/player-profiles/createPlayerProfile",
    data
  );
};

export const getPlayerprofileService = (id: number) => {
  return jsonInstance.get(
    `main-api-gateway/player-management-gateway/player-management/api/v1/player-profiles/getPlayerProfileById/${id}`
  );
};

export const updataPlayerprofileService = (id: number, data: object) => {
  return jsonInstance.put(
    `main-api-gateway/player-management-gateway/player-management/api/v1/player-profiles/updatePlayerProfile/${id}`,
    data
  );
};

export const countryDropdownService = () => {
  return jsonInstance.get(
    "main-api-gateway/commons-apis-gateway/common-apis/api/v1/country-details/retrieveAll"
  );
};

export const currencyDropdownService = () => {
  return jsonInstance.get(
    "main-api-gateway/commons-apis-gateway/common-apis/api/v1/currency-details/retrieveAll"
  );
};
