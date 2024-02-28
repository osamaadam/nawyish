import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { ApartmentService } from "./apartment.service";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { ApartmentDto } from "./apartment.dto";

@ApiTags("apartments")
@Controller("apartments")
export class ApartmentController {
  constructor(private readonly apartmentService: ApartmentService) {}

  @Get("/")
  getApartments(
    @Query("page") page?: number,
    @Query("pageSize") pageSize?: number
  ) {
    return this.apartmentService.getApartments({ page, pageSize });
  }

  @Get("/:id")
  getApartment(@Param("id") id: number) {
    return this.apartmentService.getApartment(id);
  }

  @Post("/")
  @ApiBody({ type: ApartmentDto })
  createApartment(@Body() apartment: ApartmentDto) {
    return this.apartmentService.createApartments([apartment]);
  }
}
