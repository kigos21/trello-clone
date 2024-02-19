import { IoIosNotificationsOutline } from "react-icons/io";
import { IoHelpCircleOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { FaTrello } from "react-icons/fa";
import { HiTemplate } from "react-icons/hi";
import { GoHomeFill } from "react-icons/go";
import { FaSquarePollHorizontal } from "react-icons/fa6";
import { IoGridOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { HiCog } from "react-icons/hi";
import { GrUpgrade } from "react-icons/gr";

export const dropdownTitles = ["Workspaces", "Recent", "Starred", "Templates"];

export const circleIcons = [
  { icon: <IoIosNotificationsOutline className="text-xl" /> },
  { icon: <IoHelpCircleOutline className="text-xl" /> },
  { icon: <RxAvatar className="text-xl" /> },
];

export const sideNavButtons = [
  { icon: <FaTrello />, isActive: true, title: "Boards" },
  { icon: <HiTemplate />, isActive: false, title: "Templates" },
  { icon: <GoHomeFill />, isActive: false, title: "Home" },
];

export const workspaces = [
  {
    icon: <FaSquarePollHorizontal className="text-2xl text-green-500" />,
    title: "ICS26010 - SE Group 5",
  },
];

export const workspaceButtons = [
  {
    icon: <FaTrello />,
    title: "Boards",
  },
  {
    icon: <IoGridOutline />,
    title: "Views",
  },
  {
    icon: <GoPerson />,
    title: "Members",
  },
  {
    icon: <HiCog />,
    title: "Settings",
  },
  {
    icon: <GrUpgrade />,
    title: "Upgrade",
  },
];

export const boards = [
  {
    title: "Grp 5 - 3ITE",
    className: "bg-black text-white",
    isFavorite: false,
  },
  {
    title: "Lorem ipsum",
    className: "bg-red-900 text-white",
    isFavorite: false,
  },
  {
    title: "Dolor sit",
    className: "bg-yellow-900 text-white",
    isFavorite: false,
  },
  {
    title: "Amet consectatur",
    className: "bg-blue-900 text-white",
    isFavorite: false,
  },
  {
    title: "Adipisicing elit",
    className: "bg-green-900 text-white",
    isFavorite: false,
  },
  {
    title: "Maiores optio",
    className: "bg-violet-900 text-white",
    isFavorite: false,
  },
];
