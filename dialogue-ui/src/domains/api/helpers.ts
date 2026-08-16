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
  const body = await res.json();
  if (res.status < 200 || res.status > 299) {
    throw new APIError(res, body);
  }
  return body as DTO;
}

class APIError extends Error {
  constructor(
    public res: Response,
    public body: Record<string, any>,
  ) {
    super();
  }

  get message() {
    if ("error" in this.body) return this.body.error;

    if (this.res.status === 422 && this.isWellFormattedRailsValidationSlop) {
      return this.parseAsRailsValidationSlop();
    }

    return "Something went wrong.";
  }

  private get isWellFormattedRailsValidationSlop() {
    return Object.keys(this.body).every((field) => Array.isArray(this.body[field]));
  }

  private parseAsRailsValidationSlop() {
    // Not my favourite validation serialization format haha.
    // Normally, I'd parse this out to match fields to their inputs... easy enough later on.

    const fullError = Object.keys(this.body)
      .map((field) =>
        this.body[field].map((error: string) => `${field.replace("_", " ")} ${error}`),
      )
      .join(" and ");

    return fullError.charAt(0).toUpperCase() + fullError.slice(1);
  }
}
