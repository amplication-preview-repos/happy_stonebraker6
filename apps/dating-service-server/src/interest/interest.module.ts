import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InterestModuleBase } from "./base/interest.module.base";
import { InterestService } from "./interest.service";
import { InterestController } from "./interest.controller";
import { InterestResolver } from "./interest.resolver";

@Module({
  imports: [InterestModuleBase, forwardRef(() => AuthModule)],
  controllers: [InterestController],
  providers: [InterestService, InterestResolver],
  exports: [InterestService],
})
export class InterestModule {}
