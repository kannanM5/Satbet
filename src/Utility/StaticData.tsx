import WiThdrawIcon from "../Assests/Png/withdraw_icon.svg";
import BonusIcon from "../Assests/Png/bonus_icon.svg";
import ProfileIcon from "../Assests/Png/profile.svg";
import WalletIcon from "../Assests/Png/wallet.svg";
import KYCIcon from "../Assests/Png/kyc.svg";
import TransactionHistoryIcon from "../Assests/Png/transactionhistory_icon.svg";
import Exchange from "../Assests/Png/exchange.png";
import Sports from "../Assests/Png/sports.png";

import Casino from "../Assests/Png/casino.png";
import LiveCasino from "../Assests/Png/live.png";
import Promotions from "../Assests/Png/promotions.png";

import Game1 from "../Assests/Png/game1.jpg";
import Game2 from "../Assests/Png/game2.jpg";
import Game3 from "../Assests/Png/game3.jpg";
import Game4 from "../Assests/Png/game4.jpg";
import Game5 from "../Assests/Png/game5.jpg";
import Facebook from "../Assests/Png/facebook.png";
import Telegram from "../Assests/Png/telegram.png";
import Skype from "../Assests/Png/skype.png";
import Instagram from "../Assests/Png/instagram.png";
import Youtube from "../Assests/Png/youtube.png";
import Whatsapp from "../Assests/Png/whatapp.png";

export const menuData = [
  {
    id: 1,
    title: "WITHDRAW",
    image: WiThdrawIcon,
    path: "/withdraw",
  },
  {
    id: 2,
    title: "BONUS",
    image: BonusIcon,
    path: "/bonus",
  },
  {
    id: 3,
    title: "WALLET",
    image: WalletIcon,
    path: "/wallet",
  },
  {
    id: 4,
    title: "PROFILE",
    image: ProfileIcon,
    path: "/profile",
  },
  {
    id: 5,
    title: "KYC",
    image: KYCIcon,
    path: "/kyc",
  },

  {
    id: 6,
    title: "TRANSACTION HISTORY",
    image: TransactionHistoryIcon,
    path: "/transaction",
  },
  {
    id: 7,
    title: "REFER A FRIEND",
    image: WiThdrawIcon,
    path: "referFriend",
  },
  {
    id: 8,
    title: "BANK INFORMATION",
    image: WiThdrawIcon,
    path: "bankInfo",
  },
  {
    id: 9,
    title: "ACCOUNT SETTINGS",
    image: WiThdrawIcon,
    path: "accountSetting",
  },
];

export const transactionData = [
  {
    id: 1,
    title: "All transactions",
    image: WiThdrawIcon,
    path: "transaction/alltransaction",
  },
  {
    id: 2,
    title: "Deposit summary",
    image: WiThdrawIcon,
    path: "transaction/depositSummary",
  },
  {
    id: 3,
    title: "withdraw summary",
    image: WiThdrawIcon,
    path: "transaction/withdrawSummary",
  },
  {
    id: 4,
    title: "game history",
    image: WiThdrawIcon,
    path: "transaction/gameHistory",
  },
  {
    id: 5,
    title: "Exchange PL",
    image: WiThdrawIcon,
    path: "transaction/exchangePl",
  },

  {
    id: 6,
    title: "Bonus history",
    image: WiThdrawIcon,
    path: "transaction/bonusHistory",
  },
  {
    id: 7,
    title: "bonus report",
    image: WiThdrawIcon,
    path: "transaction/bonusReport",
  },
  {
    id: 8,
    title: "Message",
    image: WiThdrawIcon,
    path: "transaction/message",
  },
];

export const subHeaderData = [
  {
    id: 1,
    title: "exchange",
    image: Exchange,
  },
  {
    id: 2,
    title: "sports",
    image: Sports,
  },
  {
    id: 3,
    title: "casino",
    image: Casino,
  },
  {
    id: 4,
    title: "live casino",
    image: LiveCasino,
  },
  {
    id: 5,
    title: "promotions",
    image: Promotions,
  },
];

export const quickLinks = [
  {
    id: 1,
    title: "About us",
  },
  {
    id: 2,
    title: "Terms and conditions",
  },
  {
    id: 3,
    title: "Affiliates",
  },
  {
    id: 4,
    title: "Disclaimer",
  },
  {
    id: 5,
    title: "Responsible gaming",
  },
  {
    id: 6,
    title: "KYC",
  },
  {
    id: 7,
    title: "Privacy",
  },
  {
    id: 8,
    title: "Site map",
  },
];

export const games = [
  {
    id: 1,
    image: Game1,
  },
  {
    id: 2,
    image: Game2,
  },
  {
    id: 3,
    image: Game3,
  },
  {
    id: 4,
    image: Game4,
  },

  {
    id: 5,
    image: Game5,
  },
  {
    id: 1,
    image: Game1,
  },
  {
    id: 2,
    image: Game2,
  },
  {
    id: 3,
    image: Game3,
  },
  {
    id: 4,
    image: Game4,
  },

  {
    id: 5,
    image: Game5,
  },
  {
    id: 5,
    image: Game5,
  },
  {
    id: 5,
    image: Game5,
  },
];

export const socialMediaLinks = [
  {
    id: 1,
    image: Facebook,
  },
  {
    id: 2,
    image: Whatsapp,
  },
  {
    id: 3,
    image: Skype,
  },
  {
    id: 4,
    image: Telegram,
  },
  {
    id: 5,
    image: Youtube,
  },
  {
    id: 6,
    image: Instagram,
  },
];

export type themeColorProps = {
  id: number;
  name: string;
  color: string;
};

export const themeColorData: themeColorProps[] = [
  { id: 1, name: "Yellow", color: "#ebba48" },
  { id: 2, name: "Blue", color: "rgba(0, 0, 255, 1)" },
  { id: 3, name: "Red", color: "rgba(255, 0, 0, 1)" },
  { id: 3, name: "Orange", color: "rgba(255, 165, 0, 1)" },
  { id: 4, name: "Pink", color: "rgb(222, 11, 144)" },
];
