import { BarChart3, Users, DollarSign, ShoppingCart, TrendingUp, UserCheck, Calendar, Target } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Overview", url: "/", icon: BarChart3 },
  { title: "Acquisitions", url: "/acquisitions", icon: Users },
  { title: "Revenue", url: "/revenue", icon: DollarSign },
  { title: "Transactions", url: "/transactions", icon: ShoppingCart },
  { title: "Retention", url: "/retention", icon: UserCheck },
  { title: "LTV Analysis", url: "/ltv", icon: TrendingUp },
];

export function AnalyticsSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar className={isCollapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-analytics-card border-r border-analytics-border">
        <div className="p-6 border-b border-analytics-border">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-accent rounded-lg flex items-center justify-center">
              <BarChart3 className="h-5 w-5 text-accent-foreground" />
            </div>
            {!isCollapsed && (
              <div>
                <h2 className="font-semibold text-foreground">Analytics Pro</h2>
                <p className="text-sm text-analytics-text-light">Startup Dashboard</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup className="px-3">
          <SidebarGroupLabel className="text-analytics-text-light px-3 py-2">
            Dashboard
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                          isActive 
                            ? "bg-primary text-primary-foreground shadow-sm" 
                            : "text-analytics-text hover:bg-secondary"
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      {!isCollapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}