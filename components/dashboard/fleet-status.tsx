import SectionCard from "./section-card";

const vans = [
  {
    id: "Van 01",
    status: "Running",
    students: 23,
  },
  {
    id: "Van 02",
    status: "Running",
    students: 18,
  },
  {
    id: "Van 03",
    status: "Offline",
    students: 0,
  },
];

export default function FleetStatus() {
  return (
    <SectionCard title="Fleet Status">
      <div className="space-y-4">
        {vans.map((van) => (
          <div
            key={van.id}
            className="flex items-center justify-between rounded-xl border p-4"
          >
            <div>
              <p className="font-semibold">{van.id}</p>

              <p className="text-sm text-muted-foreground">
                {van.students} Students
              </p>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                van.status === "Running"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {van.status}
            </span>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}