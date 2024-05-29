import dashboard from "../assets/icons/dashboard.svg";
import profile from "../assets/icons/profile.svg";
import bank from "../assets/icons/bank.svg";
import wallet from "../assets/icons/wallet.svg";

const RoutesPath = [
  {
    id: 1,
    title: "Dashboard",
    path: "/",
    icons: dashboard,
  },
  {
    id: 2,
    title: "Banks",
    path: "/bank",
    icons: bank,
  },
  {
    id: 3,
    title: "Wallet",
    path: "/wallet",
    icons: wallet,
  },
  {
    id: 4,
    title: "Profile",
    path: "/profile",
    icons: profile,
  },
];

export default RoutesPath;
