import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserActionsService } from "./userActions.service";
import { UserActionsControllerBase } from "./base/userActions.controller.base";

@swagger.ApiTags("userActions")
@common.Controller("userActions")
export class UserActionsController extends UserActionsControllerBase {
  constructor(
    protected readonly service: UserActionsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
