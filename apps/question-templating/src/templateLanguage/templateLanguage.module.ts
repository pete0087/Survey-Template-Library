import { Module } from "@nestjs/common";
import { TemplateLanguageModuleBase } from "./base/templateLanguage.module.base";
import { TemplateLanguageService } from "./templateLanguage.service";
import { TemplateLanguageController } from "./templateLanguage.controller";
import { TemplateLanguageResolver } from "./templateLanguage.resolver";

@Module({
  imports: [TemplateLanguageModuleBase],
  controllers: [TemplateLanguageController],
  providers: [TemplateLanguageService, TemplateLanguageResolver],
  exports: [TemplateLanguageService],
})
export class TemplateLanguageModule {}
