export default async function ApartmentsPage() {
  const apartments = await fetchApartments({ page: 1 });

  return (
    <div>
      <pre>{JSON.stringify(apartments, null, 2)}</pre>
    </div>
  );
}

async function fetchApartments({
  page,
  pageSize = 10,
}: {
  page: number;
  pageSize?: number;
}) {
  const url = new URL("/api/apartments", "http://localhost:3000");
  url.searchParams.set("page", page.toString());
  url.searchParams.set("pageSize", pageSize.toString());

  const res = await fetch(url);

  return res.json();
}
