export function apiUrl(path: string) {
  return `${import.meta.env.VITE_API_BASE_URL}${path}`;
}

export async function fetchAs<DTO>(path: string, options: RequestInit = {}) {
  const res = await fetch(apiUrl(path), options);
  return (await res.json()) as DTO;
}
