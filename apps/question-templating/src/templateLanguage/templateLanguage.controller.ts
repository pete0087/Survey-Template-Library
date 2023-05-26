import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TemplateLanguageService } from "./templateLanguage.service";
import { TemplateLanguageControllerBase } from "./base/templateLanguage.controller.base";

@swagger.ApiTags("templateLanguages")
@common.Controller("templateLanguages")
export class TemplateLanguageController extends TemplateLanguageControllerBase {
  constructor(
    protected readonly service: TemplateLanguageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
