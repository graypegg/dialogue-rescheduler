import { QueryClientProvider } from "./domains/api/query-client-provider.tsx";
import { CurrentUserProvider } from "./domains/auth/hooks/current-user.tsx";
import { Router } from "./router.tsx";
import { Main } from "./layout/main.tsx";
import { BrowserRouter } from "react-router";

export function App() {
  return (
    <QueryClientProvider>
      <CurrentUserProvider>
        <BrowserRouter>
          <Main>
            <Router />
          </Main>
        </BrowserRouter>
      </CurrentUserProvider>
    </QueryClientProvider>
  );
}
