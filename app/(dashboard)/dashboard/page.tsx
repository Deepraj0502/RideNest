import {
  Bus,
  CreditCard,
  Users,
  UserCheck,
} from "lucide-react";

import DashboardHeader from "@/components/dashboard/dashboard-header";
import KPICard from "@/components/dashboard/kpi-card";
import FleetStatus from "@/components/dashboard/fleet-status";
import RecentActivity from "@/components/dashboard/recent-activity";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader user="Deepraj" />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <KPICard
          title="Students"
          value="328"
          description="+12 this week"
          trend="8%"
          icon={Users}
        />

        <KPICard
          title="Active Vans"
          value="12"
          description="2 offline"
          trend="2%"
          icon={Bus}
        />

        <KPICard
          title="Drivers"
          value="14"
          description="1 on leave"
          trend="3%"
          icon={UserCheck}
        />

        <KPICard
          title="Revenue"
          value="₹82,540"
          description="Collected today"
          trend="11%"
          icon={CreditCard}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <FleetStatus />
        <RecentActivity />
      </div>
    </div>
  );
}