import { Apartment } from "../types/apartment";

export async function fetchApartments({
  baseUrl,
  page = 1,
  pageSize = 10,
}: {
  baseUrl: string | URL;
  page: number;
  pageSize?: number;
}): Promise<Apartment[]> {
  const url = new URL("/api/apartments", baseUrl);
  url.searchParams.set("page", page.toString());
  url.searchParams.set("pageSize", pageSize.toString());

  const response = await fetch(url);

  return await response.json();
}
