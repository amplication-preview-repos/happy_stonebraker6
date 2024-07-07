import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlacesModuleBase } from "./base/places.module.base";
import { PlacesService } from "./places.service";
import { PlacesController } from "./places.controller";
import { PlacesResolver } from "./places.resolver";

@Module({
  imports: [PlacesModuleBase, forwardRef(() => AuthModule)],
  controllers: [PlacesController],
  providers: [PlacesService, PlacesResolver],
  exports: [PlacesService],
})
export class PlacesModule {}
