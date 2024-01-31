import { MdKeyboardArrowDown } from "react-icons/md";

export default function WorkspaceDropdown({ icon, title }) {
  return (
    <button className="flex w-full items-center justify-between p-3">
      <div className="flex items-center gap-2">
        {icon}
        <span className="font-semibold">{title}</span>
      </div>
      <MdKeyboardArrowDown />
    </button>
  );
}
