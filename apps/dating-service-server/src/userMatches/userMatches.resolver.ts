import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserMatchesResolverBase } from "./base/userMatches.resolver.base";
import { UserMatches } from "./base/UserMatches";
import { UserMatchesService } from "./userMatches.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserMatches)
export class UserMatchesResolver extends UserMatchesResolverBase {
  constructor(
    protected readonly service: UserMatchesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
