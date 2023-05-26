/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Content } from "../../content/base/Content";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { TemplateLanguage } from "../../templateLanguage/base/TemplateLanguage";

@ObjectType()
class Template {
  @ApiProperty({
    required: false,
    type: () => [Content],
  })
  @ValidateNested()
  @Type(() => Content)
  @IsOptional()
  content?: Array<Content>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  description!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: () => [TemplateLanguage],
  })
  @ValidateNested()
  @Type(() => TemplateLanguage)
  @IsOptional()
  templateLanguages?: Array<TemplateLanguage>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Template as Template };
