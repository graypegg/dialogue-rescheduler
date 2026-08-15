import { BrowserRouter, Route, Routes } from "react-router";
import { SignUpPage } from "./domains/user/pages/sign-up.tsx";
import { LandingPage } from "./domains/static/pages/landing.tsx";
import { LoginPage } from "./domains/auth/pages/login.tsx";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}
