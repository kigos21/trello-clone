import { FaSquarePollHorizontal } from "react-icons/fa6";

import DashboardButton from "./DashboardButton";
import Board from "./Board";

import { workspaceButtons, boards } from "../data";

export default function YourWorkspaces() {
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
