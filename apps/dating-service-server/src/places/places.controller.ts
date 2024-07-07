import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlacesService } from "./places.service";
import { PlacesControllerBase } from "./base/places.controller.base";

@swagger.ApiTags("places")
@common.Controller("places")
export class PlacesController extends PlacesControllerBase {
  constructor(
    protected readonly service: PlacesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
