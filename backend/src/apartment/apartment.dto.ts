import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from "class-validator";
import { Apartment } from "./apartment.entity";
import { ApiProperty } from "@nestjs/swagger";

export class ApartmentDto implements Omit<Apartment, "id" | "isArchived"> {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  address: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty()
  listingPrice: number;

  @IsNumber()
  @IsPositive()
  @ApiProperty()
  numberOfBedrooms: number;

  @IsNumber()
  @IsPositive()
  @ApiProperty()
  numberOfBathrooms: number;

  @IsNumber()
  @IsPositive()
  @ApiProperty()
  squareFootage: number;

  @IsNumber()
  @IsPositive()
  @ApiProperty()
  monthlyRent: number;

  @IsBoolean()
  @ApiProperty()
  isFurnished: boolean;
}
