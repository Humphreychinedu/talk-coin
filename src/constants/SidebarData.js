import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as ROUTES from "./Paths";

export const SidebarData = [
  {
    title: "Dashboard",
    path: ROUTES.DASHBOARD,
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Account",
    path: ROUTES.ACCOUNT,
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Share Fund",
    path: ROUTES.SHARE_FUND,
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Investment",
    path: ROUTES.INVESTMENT,
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Withdraw",
    path: ROUTES.WITHDRAW,
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: ROUTES.SUPPORT,
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
