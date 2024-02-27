import { Apartment } from "@/types/apartment";
import "./style.scss";
import Image from "next/image";
import Link from "next/link";

type ApartmentCardProps = {
  apartment: Apartment;
};

export default function ApartmentCard({ apartment }: ApartmentCardProps) {
  return (
    <article className="apartment-card">
      <figure className="apartment-card__image">
        <Image
          src={`https://source.unsplash.com/random/400x300?house,${apartment.id}`}
          alt={apartment.address}
          width={400}
          height={300}
        />
      </figure>
      <Link className="link-no-style" href={`/${apartment.id}`}>
        <header className="apartment-card__title">
          <h2>{apartment.address}</h2>
        </header>
      </Link>
      <section className="apartment-card__description">
        <p>{apartment.description}</p>
      </section>
      <footer className="apartment-card__price">
        <p>{Number(apartment.listingPrice).toLocaleString()} EGP</p>
      </footer>
    </article>
  );
}
