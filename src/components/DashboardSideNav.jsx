import SideNavButton from "./SideNavButton";
import WorkspaceDropdown from "./WorkspaceDropdown";

import { sideNavButtons, workspaces } from "../data";

export default function DashboardSideNav() {
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
