/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserBubbles } from "./UserBubbles";
import { UserBubblesCountArgs } from "./UserBubblesCountArgs";
import { UserBubblesFindManyArgs } from "./UserBubblesFindManyArgs";
import { UserBubblesFindUniqueArgs } from "./UserBubblesFindUniqueArgs";
import { DeleteUserBubblesArgs } from "./DeleteUserBubblesArgs";
import { UserBubblesService } from "../userBubbles.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserBubbles)
export class UserBubblesResolverBase {
  constructor(
    protected readonly service: UserBubblesService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "UserBubbles",
    action: "read",
    possession: "any",
  })
  async _userBubblesItemsMeta(
    @graphql.Args() args: UserBubblesCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [UserBubbles])
  @nestAccessControl.UseRoles({
    resource: "UserBubbles",
    action: "read",
    possession: "any",
  })
  async userBubblesItems(
    @graphql.Args() args: UserBubblesFindManyArgs
  ): Promise<UserBubbles[]> {
    return this.service.userBubblesItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => UserBubbles, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "UserBubbles",
    action: "read",
    possession: "own",
  })
  async userBubbles(
    @graphql.Args() args: UserBubblesFindUniqueArgs
  ): Promise<UserBubbles | null> {
    const result = await this.service.userBubbles(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => UserBubbles)
  @nestAccessControl.UseRoles({
    resource: "UserBubbles",
    action: "delete",
    possession: "any",
  })
  async deleteUserBubbles(
    @graphql.Args() args: DeleteUserBubblesArgs
  ): Promise<UserBubbles | null> {
    try {
      return await this.service.deleteUserBubbles(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
