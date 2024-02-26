import { Controller, Get, Param, Query } from "@nestjs/common";
import { ApartmentService } from "./apartment.service";

@Controller("apartments")
export class ApartmentController {
  constructor(private readonly apartmentService: ApartmentService) {}

  @Get("/")
  getApartments(
    @Query("page") page: number,
    @Query("pageSize") pageSize: number
  ) {
    return this.apartmentService.getApartments({ page, pageSize });
  }

  @Get("/:id")
  getApartment(@Param("id") id: number) {
    return this.apartmentService.getApartment(id);
  }
}
