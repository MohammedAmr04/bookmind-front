"use client";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

export default function HeaderDashboard() {
  const isMobile = useIsMobile();
  return (
    <header>
      {isMobile && <SidebarTrigger />}
      <h1>Header</h1>
    </header>
  );
}
