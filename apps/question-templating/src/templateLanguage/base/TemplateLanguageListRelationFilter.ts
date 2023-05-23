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
import { TemplateLanguageWhereInput } from "./TemplateLanguageWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TemplateLanguageListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TemplateLanguageWhereInput,
  })
  @ValidateNested()
  @Type(() => TemplateLanguageWhereInput)
  @IsOptional()
  @Field(() => TemplateLanguageWhereInput, {
    nullable: true,
  })
  every?: TemplateLanguageWhereInput;

  @ApiProperty({
    required: false,
    type: () => TemplateLanguageWhereInput,
  })
  @ValidateNested()
  @Type(() => TemplateLanguageWhereInput)
  @IsOptional()
  @Field(() => TemplateLanguageWhereInput, {
    nullable: true,
  })
  some?: TemplateLanguageWhereInput;

  @ApiProperty({
    required: false,
    type: () => TemplateLanguageWhereInput,
  })
  @ValidateNested()
  @Type(() => TemplateLanguageWhereInput)
  @IsOptional()
  @Field(() => TemplateLanguageWhereInput, {
    nullable: true,
  })
  none?: TemplateLanguageWhereInput;
}
export { TemplateLanguageListRelationFilter as TemplateLanguageListRelationFilter };
