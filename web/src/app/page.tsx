import { fetchApartments } from "@/actions/fetchApartments";
import ApartmentsList from "@/components/apartments_list/apartments_list";

export default async function ApartmentsPage() {
  const apartments = await fetchApartments({ page: 1 });

  return (
    <main>
      <ApartmentsList />
    </main>
  );
}
