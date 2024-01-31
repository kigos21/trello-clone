import { MdKeyboardArrowDown } from "react-icons/md";

// eslint-disable-next-line react/prop-types
export default function WorkspaceDropdown({ icon, title }) {
  return (
    <button className="flex w-full  items-center justify-between rounded-lg p-3 hover:bg-slate-700">
      <div className="flex items-center gap-2">
        {icon}
        <span className="font-semibold">{title}</span>
      </div>
      <MdKeyboardArrowDown />
    </button>
  );
}
