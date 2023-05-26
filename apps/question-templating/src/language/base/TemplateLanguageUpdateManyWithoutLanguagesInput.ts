/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TemplateLanguageWhereUniqueInput } from "../../templateLanguage/base/TemplateLanguageWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TemplateLanguageUpdateManyWithoutLanguagesInput {
  @Field(() => [TemplateLanguageWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TemplateLanguageWhereUniqueInput],
  })
  connect?: Array<TemplateLanguageWhereUniqueInput>;

  @Field(() => [TemplateLanguageWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TemplateLanguageWhereUniqueInput],
  })
  disconnect?: Array<TemplateLanguageWhereUniqueInput>;

  @Field(() => [TemplateLanguageWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TemplateLanguageWhereUniqueInput],
  })
  set?: Array<TemplateLanguageWhereUniqueInput>;
}

export { TemplateLanguageUpdateManyWithoutLanguagesInput as TemplateLanguageUpdateManyWithoutLanguagesInput };
