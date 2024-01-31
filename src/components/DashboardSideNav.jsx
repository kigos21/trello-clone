import { FaTrello } from "react-icons/fa";
import { HiTemplate } from "react-icons/hi";
import { GoHomeFill } from "react-icons/go";
import { FaSquarePollHorizontal } from "react-icons/fa6";

import SideNavButton from "./SideNavButton";
import WorkspaceDropdown from "./WorkspaceDropdown";

export default function DashboardSideNav() {
  const sideNavButtons = [
    { icon: <FaTrello />, isActive: true, title: "Boards" },
    { icon: <HiTemplate />, isActive: false, title: "Templates" },
    { icon: <GoHomeFill />, isActive: false, title: "Home" },
  ];

  const workspaces = [
    { icon: <FaSquarePollHorizontal />, title: "ICS26010 - SE Group 5" },
  ];

  return (
    <div>
      <div className="flex flex-col gap-1 border-b border-b-slate-700 pb-1">
        {sideNavButtons.map((button) => (
          <SideNavButton key={button.title} isActive={button.isActive}>
            {button.icon}
            <span>{button.title}</span>
          </SideNavButton>
        ))}
      </div>

      <span className="mt-4 block px-3 text-sm">Workspaces</span>
      <div className="mt-1 flex flex-col">
        {workspaces.map((workspace) => (
          <WorkspaceDropdown
            key={workspace.title}
            icon={workspace.icon}
            title={workspace.title}
          />
        ))}
      </div>
    </div>
  );
}
