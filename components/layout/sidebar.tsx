"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import { sidebarItems } from "@/constants/navigation";
import { cn } from "@/lib/utils";

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="hidden w-72 border-r border-slate-200 bg-white lg:flex lg:flex-col shadow-sm">
            <div className="border-b p-6">
                <Logo />
            </div>

            <nav className="flex-1 space-y-2 p-4">
                {sidebarItems.map((item) => {
                    const Icon = item.icon;
                    const active = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300",
                                active
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "hover:bg-slate-100 hover:translate-x-1"
                            )}
                        >
                            <Icon size={20} />
                            {item.title}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}