import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  description?: string;
}

export function MetricCard({ 
  title, 
  value, 
  change, 
  changeType = "neutral", 
  icon: Icon,
  description 
}: MetricCardProps) {
  const getChangeColor = () => {
    switch (changeType) {
      case "positive":
        return "text-success";
      case "negative":
        return "text-destructive";
      default:
        return "text-analytics-text-light";
    }
  };

  return (
    <Card className="bg-analytics-card border-analytics-border shadow-card hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-analytics-text-light">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-analytics-text-light" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        <div className="flex items-center gap-2 mt-1">
          {change && (
            <span className={`text-xs font-medium ${getChangeColor()}`}>
              {change}
            </span>
          )}
          {description && (
            <span className="text-xs text-analytics-text-light">
              {description}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}