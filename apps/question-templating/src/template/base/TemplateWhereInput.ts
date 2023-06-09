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
import { ContentListRelationFilter } from "../../content/base/ContentListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { TemplateLanguageListRelationFilter } from "../../templateLanguage/base/TemplateLanguageListRelationFilter";

@InputType()
class TemplateWhereInput {
  @ApiProperty({
    required: false,
    type: () => ContentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ContentListRelationFilter)
  @IsOptional()
  @Field(() => ContentListRelationFilter, {
    nullable: true,
  })
  content?: ContentListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  description?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => TemplateLanguageListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TemplateLanguageListRelationFilter)
  @IsOptional()
  @Field(() => TemplateLanguageListRelationFilter, {
    nullable: true,
  })
  templateLanguages?: TemplateLanguageListRelationFilter;
}

export { TemplateWhereInput as TemplateWhereInput };
