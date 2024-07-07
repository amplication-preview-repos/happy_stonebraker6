import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlacesServiceBase } from "./base/places.service.base";

@Injectable()
export class PlacesService extends PlacesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
