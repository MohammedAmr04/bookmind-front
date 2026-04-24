import HeaderDashboard from "@/components/layouts/dashboard-layout/header-dashboard";
import Sidebar from "@/components/layouts/dashboard-layout/sidebar-dashboard";
import { SidebarInset } from "@/components/ui/sidebar";

type Props = {
  children: React.ReactNode;
};

export default function LayoutDashboard({ children }: Props) {
  return (
    <>
      <Sidebar />
      <SidebarInset>
        <HeaderDashboard />
        <main className="h-screen">{children}</main>
      </SidebarInset>
    </>
  );
}
