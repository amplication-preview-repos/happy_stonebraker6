import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserBubblesModuleBase } from "./base/userBubbles.module.base";
import { UserBubblesService } from "./userBubbles.service";
import { UserBubblesController } from "./userBubbles.controller";
import { UserBubblesResolver } from "./userBubbles.resolver";

@Module({
  imports: [UserBubblesModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserBubblesController],
  providers: [UserBubblesService, UserBubblesResolver],
  exports: [UserBubblesService],
})
export class UserBubblesModule {}
