import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserActionsModuleBase } from "./base/userActions.module.base";
import { UserActionsService } from "./userActions.service";
import { UserActionsController } from "./userActions.controller";
import { UserActionsResolver } from "./userActions.resolver";

@Module({
  imports: [UserActionsModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserActionsController],
  providers: [UserActionsService, UserActionsResolver],
  exports: [UserActionsService],
})
export class UserActionsModule {}
