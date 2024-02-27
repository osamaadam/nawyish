import ApartmentCard from "@/components/apartment_card/apartment_card";
import { Apartment } from "@/types/apartment";
import "./style.scss";

export default async function ApartmentsPage() {
  const apartments = await fetchApartments({ page: 1 });

  return (
    <main className="main-container">
      {apartments.map((apartment) => (
        <ApartmentCard key={apartment.id} apartment={apartment} />
      ))}
    </main>
  );
}

async function fetchApartments({
  page,
  pageSize = 10,
}: {
  page: number;
  pageSize?: number;
}): Promise<Apartment[]> {
  const url = new URL("/api/apartments", "http://localhost:3000");
  url.searchParams.set("page", page.toString());
  url.searchParams.set("pageSize", pageSize.toString());

  const res = await fetch(url);

  return res.json();
}
