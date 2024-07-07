import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserBubblesServiceBase } from "./base/userBubbles.service.base";

@Injectable()
export class UserBubblesService extends UserBubblesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
