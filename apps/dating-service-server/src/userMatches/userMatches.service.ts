import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserMatchesServiceBase } from "./base/userMatches.service.base";

@Injectable()
export class UserMatchesService extends UserMatchesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
