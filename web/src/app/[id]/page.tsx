import { fetchApartment } from "@/actions/fetchApartment";
import Image from "next/image";
import "./style.scss";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const apartment = await fetchApartment(params.id);
  return (
    <main className="apartment-page-container">
      <section className="apartment-page">
        <figure className="apartment-page__image">
          <Image
            src={`https://source.unsplash.com/random/400x300?house,${apartment.id}`}
            alt={apartment.address}
            width={400}
            height={300}
          />
        </figure>
        <h1 className="apartment-page__title">{apartment.address}</h1>
        <p className="apartment-page__description">{apartment.description}</p>
        <Table
          rows={[
            {
              title: "Bathrooms",
              description: apartment.numberOfBathrooms.toString(),
            },
            {
              title: "Bedrooms",
              description: apartment.numberOfBedrooms.toString(),
            },
            {
              title: "Square footage",
              description: apartment.squareFootage.toString(),
            },
            {
              title: "Furnished",
              description: apartment.isFurnished ? "Yes" : "No",
            },
            {
              title: "Monthly rent",
              description:
                Number(apartment.monthlyRent).toLocaleString() + " EGP",
            },
          ]}
        />
        <p className="apartment-page__price">
          {Number(apartment.listingPrice).toLocaleString()} EGP
        </p>
      </section>
    </main>
  );
}

function Table({ rows }: { rows: { title: string; description: string }[] }) {
  return (
    <ul className="apartment-page__details">
      {rows.map((row) => (
        <Row title={row.title} description={row.description} key={row.title} />
      ))}
    </ul>
  );
}

function Row({ title, description }: { title: string; description: string }) {
  return (
    <li>
      <span className="apartment-page__details-title">{title}</span>
      <span className="apartment-page__details-description">{description}</span>
    </li>
  );
}
