import { Route, Routes } from "react-router";
import { SignUpPage } from "./pages/sign-up.tsx";
import { LandingPage } from "./pages/landing.tsx";
import { LogInPage } from "./pages/log-in.tsx";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/log-in" element={<LogInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </Routes>
  );
}
