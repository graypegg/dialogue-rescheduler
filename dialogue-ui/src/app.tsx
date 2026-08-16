import { QueryClientProvider } from "./domains/api/query-client-provider.tsx";
import { CurrentUserProvider } from "./domains/auth/hooks/current-user.tsx";
import { Router } from "./router.tsx";
import { Main } from "./ui/layout/main.tsx";
import { BrowserRouter } from "react-router";

export function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider>
        <CurrentUserProvider>
          <Main>
            <Router />
          </Main>
        </CurrentUserProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
