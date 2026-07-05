"use client";

import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

export default function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <div className="flex w-80 items-center">
        <Search className="mr-2 h-4 w-4 text-slate-500" />
        <Input
          placeholder="Search students, routes, drivers..."
          className="rounded-full bg-slate-100 border-none shadow-none"
        />
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5 cursor-pointer text-slate-600" />
        </Button>

        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
            D
          </div>

          <div>
            <p className="text-sm font-semibold">Deepraj</p>
            <p className="text-xs text-slate-500">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}