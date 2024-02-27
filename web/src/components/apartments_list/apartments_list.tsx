"use client";

import { fetchApartments } from "@/actions/fetchApartments";
import ApartmentCard from "@/components/apartment_card/apartment_card";
import { Apartment } from "@/types/apartment";
import { useCallback, useEffect, useRef, useState } from "react";
import "./style.scss";
import { useInView } from "react-intersection-observer";

export default function ApartmentsList() {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [page, setPage] = useState(0);

  const { ref } = useInView({
    rootMargin: "200px",
    onChange: (inView) => {
      if (inView) {
        setPage((prev) => prev + 1);
      }
    },
  });

  const loadApartments = useCallback(
    async (page: number) => {
      const res = await fetchApartments({ page });

      setApartments((prev) => [...prev, ...res]);
    },
    [setApartments]
  );

  useEffect(() => {
    if (page === 0) {
      return;
    }
    loadApartments(page);
  }, [loadApartments, page]);

  return (
    <article className="main-container">
      {apartments.map((apartment) => (
        <ApartmentCard key={apartment.id} apartment={apartment} />
      ))}
      <div ref={ref} />
    </article>
  );
}
