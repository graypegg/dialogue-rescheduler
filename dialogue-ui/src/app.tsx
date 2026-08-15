import { QueryClientProvider } from "./domains/api/query-client-provider.tsx";
import { CurrentUserProvider } from "./domains/auth/hooks/current-user.tsx";
import { Router } from "./router.tsx";

export function App() {
  return (
    <QueryClientProvider>
      <CurrentUserProvider>
        <Router />
      </CurrentUserProvider>
    </QueryClientProvider>
  );
}
