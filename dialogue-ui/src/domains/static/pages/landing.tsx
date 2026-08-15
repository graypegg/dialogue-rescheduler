import { useCurrentUser } from "../../auth/hooks/current-user.tsx";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export function LandingPage() {
  const navigate = useNavigate();

  const { currentUser, isLoading } = useCurrentUser();
  useEffect(() => {
    if (!currentUser && !isLoading) {
      navigate("/login");
    }
  }, [currentUser, isLoading, navigate]);

  return (
    <section>
      <h2>Missing Link</h2>
    </section>
  );
}
