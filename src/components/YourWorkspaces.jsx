import { FaSquarePollHorizontal } from "react-icons/fa6";
import { FaTrello } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { HiCog } from "react-icons/hi";
import { GrUpgrade } from "react-icons/gr";

import DashboardButton from "./DashboardButton";
import Board from "./Board";

export default function YourWorkspaces() {
  const workspaceButtons = [
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

  const boards = [
    { title: "Grp 5 - 3ITE", className: "bg-black text-white" },
    { title: "Lorem ipsum", className: "bg-red-900 text-white" },
    { title: "Dolor sit", className: "bg-yellow-900 text-white" },
    { title: "Amet consectatur", className: "bg-blue-900 text-white" },
    { title: "Adipisicing elit", className: "bg-green-900 text-white" },
    { title: "Maiores optio", className: "bg-violet-900 text-white" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <h1 className="mt-6 font-bold uppercase">Your Workspaces</h1>

      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <FaSquarePollHorizontal className="text-2xl" />
          <span className="font-semibold">ICS26010 - SE Group 5</span>
        </div>

        <div className="flex items-center gap-2">
          {workspaceButtons.map((button) => (
            <DashboardButton
              key={button.title}
              icon={button.icon}
              title={button.title}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {boards.map((board) => (
          <Board
            key={board.title}
            title={board.title}
            className={board.className}
          />
        ))}
        <Board
          title="Create new board"
          className="font-sm flex items-center justify-center bg-[#282d33] text-sm font-normal hover:bg-slate-700"
        />
      </div>

      <div className="mt-12">
        <DashboardButton title="View all closed boards" />
      </div>
    </div>
  );
}
