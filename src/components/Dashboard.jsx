import DashboardSideNav from "./DashboardSideNav";
import YourWorkspaces from "./YourWorkspaces";

export default function Dashboard() {
  return (
    <div className="mx-auto my-10 flex max-w-6xl gap-8">
      <div className="min-h-[80dvh] basis-1/4">
        <DashboardSideNav />
      </div>

      <div className="min-h-[80dvh] basis-3/4">
        <YourWorkspaces />
      </div>
    </div>
  );
}
