import { ArrowUpRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string;
  description: string;
  trend: string;
  icon: LucideIcon;
}

export default function KPICard({
  title,
  value,
  description,
  trend,
  icon: Icon,
}: KPICardProps) {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div className="rounded-xl bg-primary/10 p-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>

        <div className="flex items-center gap-1 text-sm font-medium text-green-600">
          <ArrowUpRight className="h-4 w-4" />

          {trend}
        </div>
      </div>

      <h3 className="mt-6 text-sm font-medium text-muted-foreground">
        {title}
      </h3>

      <p className="mt-2 text-4xl font-bold">{value}</p>

      <p className="mt-2 text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  );
}