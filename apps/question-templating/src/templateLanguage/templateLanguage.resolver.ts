import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TemplateLanguageResolverBase } from "./base/templateLanguage.resolver.base";
import { TemplateLanguage } from "./base/TemplateLanguage";
import { TemplateLanguageService } from "./templateLanguage.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TemplateLanguage)
export class TemplateLanguageResolver extends TemplateLanguageResolverBase {
  constructor(
    protected readonly service: TemplateLanguageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
