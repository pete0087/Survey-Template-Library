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
import { DefinitionWhereInput } from "./DefinitionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DefinitionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DefinitionWhereInput,
  })
  @ValidateNested()
  @Type(() => DefinitionWhereInput)
  @IsOptional()
  @Field(() => DefinitionWhereInput, {
    nullable: true,
  })
  every?: DefinitionWhereInput;

  @ApiProperty({
    required: false,
    type: () => DefinitionWhereInput,
  })
  @ValidateNested()
  @Type(() => DefinitionWhereInput)
  @IsOptional()
  @Field(() => DefinitionWhereInput, {
    nullable: true,
  })
  some?: DefinitionWhereInput;

  @ApiProperty({
    required: false,
    type: () => DefinitionWhereInput,
  })
  @ValidateNested()
  @Type(() => DefinitionWhereInput)
  @IsOptional()
  @Field(() => DefinitionWhereInput, {
    nullable: true,
  })
  none?: DefinitionWhereInput;
}
export { DefinitionListRelationFilter as DefinitionListRelationFilter };
