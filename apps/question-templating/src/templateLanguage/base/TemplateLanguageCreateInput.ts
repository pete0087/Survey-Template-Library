/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LanguageCreateNestedManyWithoutTemplateLanguagesInput } from "./LanguageCreateNestedManyWithoutTemplateLanguagesInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { TemplateCreateNestedManyWithoutTemplateLanguagesInput } from "./TemplateCreateNestedManyWithoutTemplateLanguagesInput";

@InputType()
class TemplateLanguageCreateInput {
  @ApiProperty({
    required: true,
    type: () => LanguageCreateNestedManyWithoutTemplateLanguagesInput,
  })
  @ValidateNested()
  @Type(() => LanguageCreateNestedManyWithoutTemplateLanguagesInput)
  @IsOptional()
  @Field(() => LanguageCreateNestedManyWithoutTemplateLanguagesInput, {
    nullable: true,
  })
  language?: LanguageCreateNestedManyWithoutTemplateLanguagesInput;

  @ApiProperty({
    required: true,
    type: () => TemplateCreateNestedManyWithoutTemplateLanguagesInput,
  })
  @ValidateNested()
  @Type(() => TemplateCreateNestedManyWithoutTemplateLanguagesInput)
  @IsOptional()
  @Field(() => TemplateCreateNestedManyWithoutTemplateLanguagesInput, {
    nullable: true,
  })
  template?: TemplateCreateNestedManyWithoutTemplateLanguagesInput;
}

export { TemplateLanguageCreateInput as TemplateLanguageCreateInput };
