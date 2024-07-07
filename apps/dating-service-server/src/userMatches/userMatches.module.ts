import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserMatchesModuleBase } from "./base/userMatches.module.base";
import { UserMatchesService } from "./userMatches.service";
import { UserMatchesController } from "./userMatches.controller";
import { UserMatchesResolver } from "./userMatches.resolver";

@Module({
  imports: [UserMatchesModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserMatchesController],
  providers: [UserMatchesService, UserMatchesResolver],
  exports: [UserMatchesService],
})
export class UserMatchesModule {}
