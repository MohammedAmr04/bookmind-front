import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export default function SidebarDashboard() {
  return (
    <Sidebar>
      <SidebarHeader>Markly</SidebarHeader>
      <SidebarContent>
        <SidebarMenuItem>Item 1</SidebarMenuItem>
        <SidebarMenuItem>Item 2</SidebarMenuItem>
        <SidebarMenuItem>Item 3</SidebarMenuItem>
      </SidebarContent>
    </Sidebar>
  );
}
