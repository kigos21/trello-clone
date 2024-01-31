import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoHelpCircleOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";

import NavButton from "./NavButton";
import NavDropdown from "./NavDropdown";
import NavCircleButton from "./NavCircleButton";

export default function Header() {
  return (
    <div className="flex justify-between p-2 text-sm">
      <LeftSideNav />
      <RightSideNav />
    </div>
  );
}

function LeftSideNav() {
  const dropdownTitles = ["Workspaces", "Recent", "Starred", "Templates"];

  return (
    <div className="flex items-center gap-2">
      <NavButton>
        <BsFillGrid3X3GapFill className="my-1" />
      </NavButton>

      <NavButton>
        <span className="font-bold">Trello</span>
      </NavButton>

      {dropdownTitles.map((title) => (
        <NavButton key={title}>
          <NavDropdown title={title} />
        </NavButton>
      ))}

      <button className="rounded-md bg-blue-300 px-3 py-1 text-[#172b4d]">
        Create
      </button>
    </div>
  );
}

function RightSideNav() {
  return (
    <div className="flex gap-1">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search"
        className="rounded-md border border-slate-700 bg-[#22272b] px-3"
      />

      <NavCircleButton>
        <IoIosNotificationsOutline className="text-xl" />
      </NavCircleButton>

      <NavCircleButton>
        <IoHelpCircleOutline className="text-xl" />
      </NavCircleButton>

      <NavCircleButton>
        <RxAvatar className="text-xl" />
      </NavCircleButton>
    </div>
  );
}
