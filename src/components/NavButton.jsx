// eslint-disable-next-line react/prop-types
export default function NavButton({ children, className }) {
  return (
    <button
      className={
        "flex items-center gap-1 rounded-md px-3 py-1 hover:bg-slate-700 " +
        className
      }
    >
      {children}
    </button>
  );
}
