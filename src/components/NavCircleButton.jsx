// eslint-disable-next-line react/prop-types
export default function NavCircleButton({ icon, notificationCount }) {
  return (
    // conditional rendering #2
    <div className="relative">
      {notificationCount > 0 && (
        <div className="absolute rounded-full bg-red-500 px-1 text-xs text-slate-700">
          {notificationCount}
        </div>
      )}
      <button className="aspect-square rounded-full px-2 py-1 hover:bg-slate-700">
        {icon}
      </button>
    </div>
  );
}
