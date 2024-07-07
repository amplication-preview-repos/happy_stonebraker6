import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserMatchesService } from "./userMatches.service";
import { UserMatchesControllerBase } from "./base/userMatches.controller.base";

@swagger.ApiTags("userMatches")
@common.Controller("userMatches")
export class UserMatchesController extends UserMatchesControllerBase {
  constructor(
    protected readonly service: UserMatchesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
