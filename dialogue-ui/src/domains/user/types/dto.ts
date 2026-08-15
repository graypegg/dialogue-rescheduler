import { DTOEnvelope } from "../../api/dto.ts";
import type { User } from "./user.ts";

export class UserReadDTO extends DTOEnvelope<
  {
    id: number;
    user_name: string;
  },
  User
> {}

export class UserWriteDTO extends DTOEnvelope<
  {
    user_name: string;
    password: string;
  },
  User
> {
  asDTO() {
    return this.dto;
  }
  asLocal() {
    return { id: -1, user_name: this.dto?.user_name ?? "" };
  }
}
