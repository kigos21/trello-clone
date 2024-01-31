// eslint-disable-next-line react/prop-types
export default function DashboardButton({ icon, title }) {
  return (
    <button className="flex items-center gap-1 rounded-md bg-[#282d33] px-2 py-1 text-sm hover:bg-slate-700">
      {icon}
      <span>{title}</span>
    </button>
  );
}
