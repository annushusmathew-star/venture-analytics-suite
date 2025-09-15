import { DashboardLayout } from "@/components/analytics/DashboardLayout";
import { MetricCard } from "@/components/analytics/MetricCard";
import { AnalyticsChart } from "@/components/analytics/AnalyticsChart";
import { 
  Users, 
  DollarSign, 
  ShoppingCart, 
  TrendingUp, 
  UserCheck, 
  Target,
  Activity,
  Zap,
  Calendar
} from "lucide-react";
import { 
  kpiMetrics, 
  acquisitionData, 
  revenueData, 
  transactionData,
  arpuData,
  retentionData,
  ltvData
} from "@/lib/mockData";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MetricCard
            title="Total Acquisitions"
            value={kpiMetrics.totalAcquisitions.value}
            change={kpiMetrics.totalAcquisitions.change}
            changeType={kpiMetrics.totalAcquisitions.changeType}
            description={kpiMetrics.totalAcquisitions.description}
            icon={Users}
          />
          <MetricCard
            title="Active Users (DAU)"
            value={kpiMetrics.activeUsers.value}
            change={kpiMetrics.activeUsers.change}
            changeType={kpiMetrics.activeUsers.changeType}
            description={kpiMetrics.activeUsers.description}
            icon={Activity}
          />
          <MetricCard
            title="Total Revenue"
            value={kpiMetrics.totalRevenue.value}
            change={kpiMetrics.totalRevenue.change}
            changeType={kpiMetrics.totalRevenue.changeType}
            description={kpiMetrics.totalRevenue.description}
            icon={DollarSign}
          />
          <MetricCard
            title="ARPU"
            value={kpiMetrics.arpu.value}
            change={kpiMetrics.arpu.change}
            changeType={kpiMetrics.arpu.changeType}
            description={kpiMetrics.arpu.description}
            icon={Target}
          />
          <MetricCard
            title="Transactions"
            value={kpiMetrics.transactions.value}
            change={kpiMetrics.transactions.change}
            changeType={kpiMetrics.transactions.changeType}
            description={kpiMetrics.transactions.description}
            icon={ShoppingCart}
          />
          <MetricCard
            title="Avg Transactions/User"
            value={kpiMetrics.avgTransactionsPerUser.value}
            change={kpiMetrics.avgTransactionsPerUser.change}
            changeType={kpiMetrics.avgTransactionsPerUser.changeType}
            description={kpiMetrics.avgTransactionsPerUser.description}
            icon={UserCheck}
          />
          <MetricCard
            title="Weekly Retention"
            value={kpiMetrics.weeklyRetention.value}
            change={kpiMetrics.weeklyRetention.change}
            changeType={kpiMetrics.weeklyRetention.changeType}
            description={kpiMetrics.weeklyRetention.description}
            icon={Zap}
          />
          <MetricCard
            title="Weekly LTV"
            value={kpiMetrics.weeklyLtv.value}
            change={kpiMetrics.weeklyLtv.change}
            changeType={kpiMetrics.weeklyLtv.changeType}
            description={kpiMetrics.weeklyLtv.description}
            icon={TrendingUp}
          />
          <MetricCard
            title="Cumulative LTV"
            value={kpiMetrics.cumulativeLtv.value}
            change={kpiMetrics.cumulativeLtv.change}
            changeType={kpiMetrics.cumulativeLtv.changeType}
            description={kpiMetrics.cumulativeLtv.description}
            icon={Calendar}
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnalyticsChart
            title="User Acquisitions Over Time"
            data={acquisitionData}
            type="area"
            color="hsl(var(--chart-1))"
            description="Monthly user acquisition trends"
          />
          <AnalyticsChart
            title="Revenue Growth"
            data={revenueData}
            type="bar"
            color="hsl(var(--chart-2))"
            description="Monthly revenue performance"
          />
          <AnalyticsChart
            title="Transaction Volume"
            data={transactionData}
            type="line"
            color="hsl(var(--chart-3))"
            description="Weekly transaction trends"
          />
          <AnalyticsChart
            title="ARPU Trends"
            data={arpuData}
            type="area"
            color="hsl(var(--chart-4))"
            description="Average revenue per user monthly"
          />
        </div>

        {/* Retention and LTV Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnalyticsChart
            title="Weekly Retention Rate"
            data={retentionData}
            type="line"
            color="hsl(var(--chart-5))"
            description="7-day user retention percentage"
          />
          <AnalyticsChart
            title="LTV Analysis"
            data={ltvData}
            type="line"
            dataKey="cumulative"
            color="hsl(var(--chart-1))"
            description="Cumulative customer lifetime value"
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
