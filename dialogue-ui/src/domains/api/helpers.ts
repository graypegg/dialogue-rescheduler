interface ResponseSidecar {
  status: number;
}

type ResponseEnvelope<T> = T & { _sidecar: ResponseSidecar };

function makeResponseSidecar(res: Response) {
  return {
    status: res.status,
  };
}

function wrapInResponseEnvelope<T>(res: Response, data: T): ResponseEnvelope<T> {
  return {
    ...data,
    _sidecar: makeResponseSidecar(res),
  };
}

export function apiUrl(path: string) {
  return `${import.meta.env.VITE_API_BASE_URL}${path}`;
}

export async function fetchAs<DTO>(path: string, options: RequestInit = {}) {
  const res = await fetch(apiUrl(path), options);
  return wrapInResponseEnvelope<DTO>(res, await res.json());
}
