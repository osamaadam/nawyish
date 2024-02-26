import { Injectable } from "@nestjs/common";
import { Apartment } from "./apartment.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class ApartmentService {
  constructor(
    @InjectRepository(Apartment)
    private readonly apartmentRepository: Repository<Apartment>
  ) {}

  async getApartments({
    page = 1,
    pageSize = 10,
  }: {
    page?: number;
    pageSize?: number;
  }): Promise<Apartment[]> {
    return this.apartmentRepository.find({
      take: pageSize,
      skip: (page - 1) * pageSize,
      where: {
        isArchived: false,
      },
    });
  }

  async getApartment(id: number): Promise<Apartment> {
    return this.apartmentRepository.findOneBy({ id });
  }

  async createApartments(
    apartments: Omit<Apartment, "id">[]
  ): Promise<Apartment[]> {
    return this.apartmentRepository.save(apartments);
  }

  async getCount(): Promise<number> {
    return this.apartmentRepository.count();
  }
}
