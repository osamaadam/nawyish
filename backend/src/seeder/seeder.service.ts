import { Injectable, Logger } from "@nestjs/common";
import { ApartmentService } from "src/apartment/apartment.service";
import { faker } from "@faker-js/faker";
import { Apartment } from "src/apartment/apartment.entity";

@Injectable()
export class SeederService {
  constructor(
    private readonly apartmentService: ApartmentService,
    private readonly logger: Logger
  ) {}

  async seed() {
    try {
      await this.seedApartments();
    } catch (err) {
      this.logger.error(err, err.stack, this.constructor.name);
    }
  }

  private async seedApartments(num = 100) {
    if (await this.isApartmentSeeded()) {
      this.logger.log("Apartments already seeded", this.constructor.name);
      return;
    }
    const apartments = Array.from({ length: num }, () => this.genApartment());

    const seededApartments =
      await this.apartmentService.createApartments(apartments);

    this.logger.log(
      `Seeded ${seededApartments.length} apartments`,
      this.constructor.name
    );

    return seededApartments;
  }

  private async isApartmentSeeded() {
    const count = await this.apartmentService.getCount();
    this.logger.log(`Apartment count: ${count}`, this.constructor.name);

    return count > 0;
  }

  private genApartment(): Omit<Apartment, "id"> {
    return {
      address: faker.location.streetAddress(),
      description: faker.lorem.paragraph(),
      isArchived: false,
      isFurnished: faker.datatype.boolean(),
      listingPrice: faker.number.float({
        min: 100_000,
        max: 100_000_000,
        multipleOf: 5,
      }),
      monthlyRent: faker.number.float({
        min: 500,
        max: 10_000,
        multipleOf: 5,
      }),
      numberOfBathrooms: faker.number.int({ min: 1, max: 5 }),
      numberOfBedrooms: faker.number.int({ min: 1, max: 5 }),
      squareFootage: faker.number.float({
        min: 500,
        max: 5_000,
        multipleOf: 5,
      }),
    };
  }
}
