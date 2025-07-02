import React from "react";
import { Outlet } from "react-router";

export function AppLayout() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-100 ">
      <Outlet />
    </main>
  );
}
