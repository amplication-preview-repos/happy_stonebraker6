import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserBubblesResolverBase } from "./base/userBubbles.resolver.base";
import { UserBubbles } from "./base/UserBubbles";
import { UserBubblesService } from "./userBubbles.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserBubbles)
export class UserBubblesResolver extends UserBubblesResolverBase {
  constructor(
    protected readonly service: UserBubblesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
