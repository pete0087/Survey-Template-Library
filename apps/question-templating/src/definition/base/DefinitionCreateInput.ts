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
import { IsInt, ValidateNested, IsOptional } from "class-validator";
import { RatingCreateNestedManyWithoutDefinitionsInput } from "./RatingCreateNestedManyWithoutDefinitionsInput";
import { Type } from "class-transformer";

@InputType()
class DefinitionCreateInput {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  description!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  rate!: number;

  @ApiProperty({
    required: false,
    type: () => RatingCreateNestedManyWithoutDefinitionsInput,
  })
  @ValidateNested()
  @Type(() => RatingCreateNestedManyWithoutDefinitionsInput)
  @IsOptional()
  @Field(() => RatingCreateNestedManyWithoutDefinitionsInput, {
    nullable: true,
  })
  ratings?: RatingCreateNestedManyWithoutDefinitionsInput;
}

export { DefinitionCreateInput as DefinitionCreateInput };