import { CurrentUserProvider } from "./domains/user/current-user.tsx";
import { UserForm } from "./domains/user/user-form.tsx";

export function App() {
  return (
    <CurrentUserProvider>
      <UserForm user={null} />
    </CurrentUserProvider>
  );
}
