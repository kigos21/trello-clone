import { MdKeyboardArrowDown } from "react-icons/md";

// eslint-disable-next-line react/prop-types
export default function NavDropdown({ title }) {
  return (
    <div className="flex items-center gap-1">
      <span>{title}</span>
      <MdKeyboardArrowDown className="text-xl" />
    </div>
  );
}
