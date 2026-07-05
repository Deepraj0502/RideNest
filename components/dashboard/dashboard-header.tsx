import { CalendarDays } from "lucide-react";

interface DashboardHeaderProps {
  user: string;
}

export default function DashboardHeader({
  user,
}: DashboardHeaderProps) {
  const greeting = (() => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";

    return "Good Evening";
  })();

  const date = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          {greeting}, {user} 👋
        </h1>

        <p className="mt-1 text-muted-foreground">
          Here's what's happening across your fleet today.
        </p>
      </div>

      <div className="flex items-center gap-2 rounded-xl border bg-card px-4 py-2 shadow-sm">
        <CalendarDays className="h-5 w-5" />

        <span className="text-sm font-medium">{date}</span>
      </div>
    </div>
  );
}