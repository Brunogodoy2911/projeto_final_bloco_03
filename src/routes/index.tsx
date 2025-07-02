import { BrowserRouter } from "react-router";
import { AppRoutes } from "./AppRoutes";

export function Routes() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
