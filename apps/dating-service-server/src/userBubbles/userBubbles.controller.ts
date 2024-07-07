import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserBubblesService } from "./userBubbles.service";
import { UserBubblesControllerBase } from "./base/userBubbles.controller.base";

@swagger.ApiTags("userBubbles")
@common.Controller("userBubbles")
export class UserBubblesController extends UserBubblesControllerBase {
  constructor(
    protected readonly service: UserBubblesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
