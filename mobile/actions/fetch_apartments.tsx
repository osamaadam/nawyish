import { Apartment } from "../types/apartment";

export async function fetchApartments({
  page = 1,
  pageSize = 10,
}: {
  page: number;
  pageSize?: number;
}): Promise<Apartment[]> {
  const url = new URL("/api/apartments", "http://192.168.1.103:3000");
  url.searchParams.set("page", page.toString());
  url.searchParams.set("pageSize", pageSize.toString());

  const response = await fetch(url);

  return await response.json();
}
