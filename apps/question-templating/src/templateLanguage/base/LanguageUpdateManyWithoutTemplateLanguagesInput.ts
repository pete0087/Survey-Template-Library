/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { LanguageWhereUniqueInput } from "../../language/base/LanguageWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class LanguageUpdateManyWithoutTemplateLanguagesInput {
  @Field(() => [LanguageWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LanguageWhereUniqueInput],
  })
  connect?: Array<LanguageWhereUniqueInput>;

  @Field(() => [LanguageWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LanguageWhereUniqueInput],
  })
  disconnect?: Array<LanguageWhereUniqueInput>;

  @Field(() => [LanguageWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LanguageWhereUniqueInput],
  })
  set?: Array<LanguageWhereUniqueInput>;
}

export { LanguageUpdateManyWithoutTemplateLanguagesInput as LanguageUpdateManyWithoutTemplateLanguagesInput };
