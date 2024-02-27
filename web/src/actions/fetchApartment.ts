import { Apartment } from "@/types/apartment";

export async function fetchApartment(id: string): Promise<Apartment> {
  const url = new URL(
    `/api/apartments/${id}`,
    process.env.NEXT_PUBLIC_API_BASE_URL
  );

  const res = await fetch(url);

  return res.json();
}
