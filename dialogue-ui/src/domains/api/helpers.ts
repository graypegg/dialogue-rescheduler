import type { DTOEnvelope } from "./dto.ts";

export function apiUrl(path: string) {
  return `${import.meta.env.VITE_API_BASE_URL}${path}`;
}

export async function fetchAs<DTO, Local>(
  Envelope: typeof DTOEnvelope<DTO, Local>,
  path: string,
  options: RequestInit = {},
) {
  const res = await fetch(apiUrl(path), options);
  return new Envelope({ dto: await res.json() });
}
