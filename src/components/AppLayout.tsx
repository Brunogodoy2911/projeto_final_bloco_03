import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function AppLayout() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-100 ">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
