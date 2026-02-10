import Sidebar from "./SideBar";
import Topbar from "./TopBar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex flex-1 flex-col">
        <Topbar />

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4
                         dark:bg-gray-950 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
