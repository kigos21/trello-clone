// eslint-disable-next-line react/prop-types
export default function NavButton({ children }) {
  return (
    <button className="rounded-md px-3 py-1 hover:bg-slate-700">
      {children}
    </button>
  );
}
