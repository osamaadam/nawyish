import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Apartment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  description: string;

  @Column()
  listingPrice: number;

  @Column()
  numberOfBedrooms: number;

  @Column()
  numberOfBathrooms: number;

  @Column()
  squareFootage: number;

  @Column()
  monthlyRent: number;

  @Column()
  isFurnished: boolean;

  @Column({ default: false })
  isArchived?: boolean;
}
