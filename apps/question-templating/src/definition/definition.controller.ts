import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DefinitionService } from "./definition.service";
import { DefinitionControllerBase } from "./base/definition.controller.base";

@swagger.ApiTags("definitions")
@common.Controller("definitions")
export class DefinitionController extends DefinitionControllerBase {
  constructor(
    protected readonly service: DefinitionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
