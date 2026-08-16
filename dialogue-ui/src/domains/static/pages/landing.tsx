import { useCurrentUser } from "../../auth/hooks/current-user.tsx";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export function LandingPage() {
  const navigate = useNavigate();

  const { currentUser, isLoading } = useCurrentUser();
  useEffect(() => {
    if (!currentUser && !isLoading) {
      navigate("/log-in");
    }
  }, [currentUser, isLoading, navigate]);

  return (
    <section>
      <h2>Imagine the rescheduler ui here</h2>
    </section>
  );
}
