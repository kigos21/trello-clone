// eslint-disable-next-line react/prop-types
export default function NavCircleButton({ children }) {
  return (
    <button className="aspect-square rounded-full px-2 py-1 hover:bg-slate-700">
      {children}
    </button>
  );
}
