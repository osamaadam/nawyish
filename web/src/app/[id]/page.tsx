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
        <ul className="apartment-page__details">
          <li>
            <span className="apartment-page__details-title">Bathrooms</span>
            <span className="apartment-page__details-description">
              {apartment.numberOfBathrooms}
            </span>
          </li>
          <li>
            <span className="apartment-page__details-title">Bedrooms</span>
            <span className="apartment-page__details-description">
              {apartment.numberOfBedrooms}
            </span>
          </li>
          <li>
            <span className="apartment-page__details-title">Area</span>
            <span className="apartment-page__details-description">
              {apartment.squareFootage} m<sup>2</sup>
            </span>
          </li>
        </ul>
        <p className="apartment-page__price">
          {Number(apartment.listingPrice).toLocaleString()} EGP
        </p>
      </section>
    </main>
  );
}
