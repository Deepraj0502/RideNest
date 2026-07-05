import SectionCard from "./section-card";

const activities = [
  "Rahul boarded Van 02",
  "Payment received from Priya",
  "Van 05 started trip",
  "Driver Amit checked in",
];

export default function RecentActivity() {
  return (
    <SectionCard title="Recent Activity">
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center gap-3"
          >
            <div className="h-2 w-2 rounded-full bg-primary" />

            <p className="text-sm">{activity}</p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}