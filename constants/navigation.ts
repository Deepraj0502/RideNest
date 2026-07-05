import {
  LayoutDashboard,
  Users,
  Bus,
  Route,
  MapPinned,
  CreditCard,
  FileBarChart,
  Settings,
} from "lucide-react";

export const sidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Students",
    href: "/students",
    icon: Users,
  },
  {
    title: "Drivers",
    href: "/drivers",
    icon: Bus,
  },
  {
    title: "Routes",
    href: "/routes",
    icon: Route,
  },
  {
    title: "Live Tracking",
    href: "/tracking",
    icon: MapPinned,
  },
  {
    title: "Payments",
    href: "/payments",
    icon: CreditCard,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: FileBarChart,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];