import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TemplateLanguageServiceBase } from "./base/templateLanguage.service.base";

@Injectable()
export class TemplateLanguageService extends TemplateLanguageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
