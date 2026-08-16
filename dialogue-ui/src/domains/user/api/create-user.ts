import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchAs } from "../../api/helpers.ts";

import type { UserFormState } from "../types/user-form-state.ts";
import { toUserWriteDTO } from "../types/user.ts";
import type { UserWriteDTO } from "../types/dto.ts";
import { makeCurrentUserQueryKey } from "../../auth/api/current-user.ts";
import { useNavigate } from "react-router";

function postUser(userWriteDTO: UserWriteDTO) {
  return fetchAs("/users", { method: "post", body: JSON.stringify(userWriteDTO) });
}

export function useCreateUser() {
  const navigate = useNavigate();
  const client = useQueryClient();

  return useMutation({
    mutationFn: (userFormState: UserFormState) => postUser(toUserWriteDTO(userFormState)),
    onSuccess: async (result) => {
      await client.setQueryData(makeCurrentUserQueryKey(), () => result);
      navigate("/");
    },
  });
}
