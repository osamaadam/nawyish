import { Logger, Module, OnApplicationBootstrap } from "@nestjs/common";
import { ApartmentModule } from "src/apartment/apartment.module";
import { SeederService } from "./seeder.service";

@Module({
  imports: [ApartmentModule],
  providers: [SeederService, Logger],
  exports: [SeederService],
})
export class SeederModule implements OnApplicationBootstrap {
  constructor(private readonly seederService: SeederService) {}

  async onApplicationBootstrap() {
    await this.seederService.seed();
  }
}
