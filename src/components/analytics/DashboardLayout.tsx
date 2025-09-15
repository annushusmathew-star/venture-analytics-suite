import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AnalyticsSidebar } from "./AnalyticsSidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-analytics-bg">
        <AnalyticsSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-16 bg-analytics-card border-b border-analytics-border flex items-center px-6 gap-4">
            <SidebarTrigger className="text-analytics-text hover:text-foreground" />
            <div className="flex-1">
              <h1 className="text-xl font-semibold text-foreground">
                Ecommerce Analytics Dashboard
              </h1>
              <p className="text-sm text-analytics-text-light">
                Track your key metrics and performance indicators
              </p>
            </div>
          </header>
          
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}