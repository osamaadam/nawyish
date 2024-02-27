import { Apartment } from "@/types/apartment";

export async function fetchApartments({
  page,
  pageSize = 6,
}: {
  page: number;
  pageSize?: number;
}): Promise<Apartment[]> {
  try {
    const url = new URL("/api/apartments", "http://localhost:3000");
    url.searchParams.set("page", page.toString());
    url.searchParams.set("pageSize", pageSize.toString());

    const res = await fetch(url);

    return res.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
}
