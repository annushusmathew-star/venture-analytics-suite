// Mock data for the analytics dashboard

export const kpiMetrics = {
  totalAcquisitions: {
    value: "24,589",
    change: "+12.5%",
    changeType: "positive" as const,
    description: "from last month"
  },
  activeUsers: {
    value: "8,432",
    change: "+8.2%", 
    changeType: "positive" as const,
    description: "DAU"
  },
  totalRevenue: {
    value: "$156,890",
    change: "+15.3%",
    changeType: "positive" as const,
    description: "from last month"
  },
  arpu: {
    value: "$18.64",
    change: "+2.1%",
    changeType: "positive" as const,
    description: "monthly ARPU"
  },
  transactions: {
    value: "3,247",
    change: "+6.8%",
    changeType: "positive" as const,
    description: "this month"
  },
  avgTransactionsPerUser: {
    value: "1.34",
    change: "-0.5%",
    changeType: "negative" as const,
    description: "per user"
  },
  weeklyRetention: {
    value: "68.5%",
    change: "+3.2%",
    changeType: "positive" as const,
    description: "7-day retention"
  },
  weeklyLtv: {
    value: "$127.43",
    change: "+4.7%",
    changeType: "positive" as const,
    description: "weekly LTV"
  },
  cumulativeLtv: {
    value: "$284.50",
    change: "+11.8%",
    changeType: "positive" as const,
    description: "total LTV"
  }
};

export const acquisitionData = [
  { name: "Jan", value: 1200 },
  { name: "Feb", value: 1350 },
  { name: "Mar", value: 1180 },
  { name: "Apr", value: 1420 },
  { name: "May", value: 1680 },
  { name: "Jun", value: 1950 },
  { name: "Jul", value: 2100 },
  { name: "Aug", value: 1890 },
  { name: "Sep", value: 2250 },
  { name: "Oct", value: 2400 },
  { name: "Nov", value: 2180 },
  { name: "Dec", value: 2589 }
];

export const revenueData = [
  { name: "Jan", value: 12400 },
  { name: "Feb", value: 13500 },
  { name: "Mar", value: 11800 },
  { name: "Apr", value: 14200 },
  { name: "May", value: 16800 },
  { name: "Jun", value: 19500 },
  { name: "Jul", value: 21000 },
  { name: "Aug", value: 18900 },
  { name: "Sep", value: 22500 },
  { name: "Oct", value: 24000 },
  { name: "Nov", value: 21800 },
  { name: "Dec", value: 25890 }
];

export const transactionData = [
  { name: "Week 1", value: 245 },
  { name: "Week 2", value: 312 },
  { name: "Week 3", value: 198 },
  { name: "Week 4", value: 287 },
  { name: "Week 5", value: 334 },
  { name: "Week 6", value: 298 },
  { name: "Week 7", value: 356 },
  { name: "Week 8", value: 421 },
  { name: "Week 9", value: 389 },
  { name: "Week 10", value: 445 },
  { name: "Week 11", value: 398 },
  { name: "Week 12", value: 467 }
];

export const arpuData = [
  { name: "Jan", value: 16.20 },
  { name: "Feb", value: 16.85 },
  { name: "Mar", value: 15.90 },
  { name: "Apr", value: 17.10 },
  { name: "May", value: 17.65 },
  { name: "Jun", value: 18.20 },
  { name: "Jul", value: 18.45 },
  { name: "Aug", value: 17.95 },
  { name: "Sep", value: 18.75 },
  { name: "Oct", value: 19.10 },
  { name: "Nov", value: 18.35 },
  { name: "Dec", value: 18.64 }
];

export const retentionData = [
  { name: "Week 1", value: 65.2 },
  { name: "Week 2", value: 67.1 },
  { name: "Week 3", value: 64.8 },
  { name: "Week 4", value: 66.9 },
  { name: "Week 5", value: 68.3 },
  { name: "Week 6", value: 67.5 },
  { name: "Week 7", value: 69.1 },
  { name: "Week 8", value: 68.8 },
  { name: "Week 9", value: 67.9 },
  { name: "Week 10", value: 69.4 },
  { name: "Week 11", value: 68.2 },
  { name: "Week 12", value: 68.5 }
];

export const ltvData = [
  { name: "Week 1", value: 95.50, weekly: 95.50, cumulative: 95.50 },
  { name: "Week 2", value: 140.25, weekly: 102.30, cumulative: 140.25 },
  { name: "Week 3", value: 168.80, weekly: 88.90, cumulative: 168.80 },
  { name: "Week 4", value: 195.45, weekly: 115.60, cumulative: 195.45 },
  { name: "Week 5", value: 218.90, weekly: 123.20, cumulative: 218.90 },
  { name: "Week 6", value: 235.60, weekly: 108.70, cumulative: 235.60 },
  { name: "Week 7", value: 252.80, weekly: 134.80, cumulative: 252.80 },
  { name: "Week 8", value: 267.90, weekly: 125.40, cumulative: 267.90 },
  { name: "Week 9", value: 275.40, weekly: 118.90, cumulative: 275.40 },
  { name: "Week 10", value: 281.75, weekly: 142.10, cumulative: 281.75 },
  { name: "Week 11", value: 283.20, weekly: 119.80, cumulative: 283.20 },
  { name: "Week 12", value: 284.50, weekly: 127.43, cumulative: 284.50 }
];