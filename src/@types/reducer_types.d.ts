export type ReducerProps = {
  login: LoginReducerProps;
  themes: ThemeReducerProps;
};

export type LoginReducerProps = {
  userData: UserProfileData;
  profileData: null;
  selectedMenu: number;
  transactionMenu: number;
};

export type ThemeReducerProps = {
  isDarkMode: boolean;
  primaryColor: string;
  darkTheme: string;
};

export type UserProfileData = {
  actionUserName: string;
  activeStatus: number;
  address1: string;
  address2: string;
  address3: string;
  affiliateTag: string;
  brandName: string;
  city: string;
  countryDetails: string;
  countryId: number;
  countryIsdcodeDetails: CountryCodeDetails;
  createdAt: string;
  createdBy: string;
  dob: string;
  email: string;
  firstName: string;
  gender: string;
  id: number;
  isPlayerAcceptTAndC: boolean;
  isPlayerAge18Plus: boolean;
  lastName: string;
  lastUpdatedAt: string;
  lastUpdatedBy: string;
  password: string;
  phone: string;
  phoneCountryIsdcodeId: number;
  playerCurrencyDetails: PlayerCurrencyDetails;
  playerCurrencyId: number;
  playerNotification: PlayerNotificationDetails;
  userAccountTypeId: number;
  userName: string;
  zipCode: string;
  realPlayer: number;
  reportingHirearchyUserId: number;
  state: string;
};

export type CountryCodeDetails = {
  id: number;
  name: string;
  isdCode: string;
  createdAt: string;
};

export type PlayerCurrencyDetails = {
  id: number;
  code: string;
  name: string;
};

type PlayerNotificationDetails = {
  id: number;
  playerId: number;
  allNotifications: number;

  dnd: number;
  email: number;
  phone: number;
  sms: number;
  telegram: number;
};

// {
//   "id": 807,
//   "brandName": "",
//   "userAccountTypeId": 7,
//   "userAccountTypeDetails": {
//       "id": 7,
//       "createdAt": "2024-09-25T14:34:25",
//       "createdBy": "OGPSuperAdmin",
//       "description": "Player",
//       "hirearchy": "7",
//       "lastUpdatedAt": "2024-09-25T14:34:25",
//       "lastUpdatedBy": "OGPSuperAdmin",
//       "userAccountType": "Player"
//   },
//   "playerCurrencyId": 2,
//   "playerCurrencyDetails": {
//       "id": 2,
//       "code": "EUR",
//       "name": "Euro"
//   },
//   "userName": "tester",
//   "password": "$argon2i$v=19$m=4096,t=1,p=1$gLxFfWX2O2ZgdE5wTRdwCg$yiVFqg8vOZ3ISbFGqipe7Uupx+Kj1EZWGGWs3DsEb90",
//   "affiliateTag": "",
//   "firstName": "",
//   "lastName": "",
//   "dob": null,
//   "countryId": 0,
//   "countryDetails": null,
//   "email": "tester@gmail.com",
//   "phone": "789789876",
//   "countryIsdcodeDetails": {
//       "id": 1,
//       "name": "Afghanistan",
//       "isdCode": "93",
//       "createdAt": "2024-09-25T13:48:50",
//       "createdBy": "OGPSuperAdmin",
//       "lastUpdatedAt": "2024-09-25T13:48:50",
//       "lastUpdatedBy": "OGPSuperAdmin"
//   },
//   "phoneCountryIsdcodeId": 1,
//   "address1": "",
//   "address2": "",
//   "address3": "",
//   "state": "",
//   "city": "",
//   "zipCode": "",
//   "gender": null,
//   "activeStatus": 1,
//   "realPlayer": 0,
//   "createdAt": "2025-01-06T09:25:36",
//   "createdBy": "",
//   "lastUpdatedAt": "2025-01-06T09:25:36",
//   "lastUpdatedBy": "",
//   "actionUserName": null,
//   "reportingHirearchyUserId": 793,
//   "playerNotification": {
//       "id": 101,
//       "playerId": 807,
//       "allNotifications": 0,
//       "dnd": 0,
//       "email": 0,
//       "phone": 0,
//       "sms": 0,
//       "telegram": 0,
//       "whatsapp": 0,
//       "createdAt": "2025-01-06T09:25:36",
//       "createdBy": "",
//       "lastUpdatedAt": "2025-01-06T09:25:36",
//       "lastUpdatedBy": ""
//   },
//   "isPlayerAge18Plus": null,
//   "isPlayerAcceptTAndC": null,
//   "playerRegistrationDate": null
// }
