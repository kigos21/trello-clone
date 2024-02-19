// eslint-disable-next-line react/prop-types
export default function SideNavButton({ children, isActive }) {
  return (
    // conditional rendering #1
    <button
      className={`flex w-full items-center gap-3 rounded-lg p-3 text-sm hover:bg-slate-700 ${isActive && "bg-[#1c2b41]"}`}
    >
      {children}
    </button>
  );
}
