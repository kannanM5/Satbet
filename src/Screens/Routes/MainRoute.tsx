import Dashboardlayout from "../../Layout/Dashboardlayout";
import AccountSetting from "../Dashboard/AccountSetting";
import BankInfo from "../Dashboard/BankInfo";
import Bonus from "../Dashboard/Bonus";
import Dashboard from "../Dashboard/Dashboard";
import Kyc from "../Dashboard/Kyc";
import Profile from "../Dashboard/Profile";
import ReferAFriend from "../Dashboard/ReferAFriend";
import AllTransaction from "../Dashboard/Transaction/AllTransaction";
import BonusHistory from "../Dashboard/Transaction/BonusHistory";
import BonusReport from "../Dashboard/Transaction/BonusReport";
import DepositSummary from "../Dashboard/Transaction/DepositSummary";
import ExchangePl from "../Dashboard/Transaction/ExchangePl";
import GameHistory from "../Dashboard/Transaction/GameHistory";
import Message from "../Dashboard/Transaction/Message";
import WithdrawSummary from "../Dashboard/Transaction/WithdrawSummary";
import Wallet from "../Dashboard/Wallet";
import Withdraw from "../Dashboard/Withdraw";

export const MainRoute = {
  element: <Dashboardlayout />,
  children: [
    { path: "dashboard", element: <Dashboard /> },
    {
      path: "withdraw",
      element: <Withdraw />,
    },
    {
      path: "bonus",
      element: <Bonus />,
    },
    {
      path: "wallet",
      element: <Wallet />,
    },
    {
      path: "profile",
      element: <Profile />,
    },

    {
      path: "kyc",
      element: <Kyc />,
    },
    {
      path: "transaction",
      children: [
        {
          path: "alltransaction",
          element: <AllTransaction />,
        },
        {
          path: "depositSummary",
          element: <DepositSummary />,
        },
        {
          path: "withdrawSummary",
          element: <WithdrawSummary />,
        },
        {
          path: "gameHistory",
          element: <GameHistory />,
        },
        {
          path: "exchangePl",
          element: <ExchangePl />,
        },
        {
          path: "bonusHistory",
          element: <BonusHistory />,
        },
        {
          path: "bonusReport",
          element: <BonusReport />,
        },
        {
          path: "message",
          element: <Message />,
        },
      ],
    },
    {
      path: "referFriend",
      element: <ReferAFriend />,
    },
    {
      path: "bankInfo",
      element: <BankInfo />,
    },
    {
      path: "accountSetting",
      element: <AccountSetting />,
    },
  ],
};
