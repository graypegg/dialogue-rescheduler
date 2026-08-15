export interface UserReadDTO {
  user: {
    id: number;
    user_name: string;
  };
}

export interface UserWriteDTO {
  user: {
    user_name: string;
    password: string;
  };
}
