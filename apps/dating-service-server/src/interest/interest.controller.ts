import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InterestService } from "./interest.service";
import { InterestControllerBase } from "./base/interest.controller.base";

@swagger.ApiTags("interests")
@common.Controller("interests")
export class InterestController extends InterestControllerBase {
  constructor(
    protected readonly service: InterestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
