export function apiUrl(path: string) {
  return `${import.meta.env.VITE_API_BASE_URL}${path}`;
}

const defaultRequestOptions = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

export async function fetchAs<DTO>(url: string, options: RequestInit = {}) {
  const res = await fetch(apiUrl(url), { ...defaultRequestOptions, ...options });
  return (await res.json()) as DTO;
}
