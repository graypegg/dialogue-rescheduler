import { UserForm } from "./domains/user/user-form.tsx";
import { QueryClientProvider } from "./domains/api/query-client-provider.tsx";
import { CurrentUserProvider } from "./domains/user/current-user.tsx";

export function App() {
  return (
    <QueryClientProvider>
      <CurrentUserProvider>
        <UserForm user={null} />
      </CurrentUserProvider>
    </QueryClientProvider>
  );
}
