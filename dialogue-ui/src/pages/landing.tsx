import { useCurrentUser } from "../domains/auth/hooks/current-user.tsx";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { SchedulingsTable } from "../domains/schedulings/schedulings-table.tsx";

export function LandingPage() {
  const navigate = useNavigate();

  const { currentUser, isLoading } = useCurrentUser();
  useEffect(() => {
    if (!currentUser && !isLoading) {
      navigate("/log-in");
    }
  }, [currentUser, isLoading, navigate]);

  return <SchedulingsTable />;
}
