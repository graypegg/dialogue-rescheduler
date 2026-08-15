export interface UserReadDTO {
  id: number;
  user_name: string;
}

export interface UserWriteDTO {
  user_name: string;
  password: string;
}
