/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SaleWhereUniqueInput } from "./SaleWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SaleUpdateInput } from "./SaleUpdateInput";

@ArgsType()
class UpdateSaleArgs {
  @ApiProperty({
    required: true,
    type: () => SaleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SaleWhereUniqueInput)
  @Field(() => SaleWhereUniqueInput, { nullable: false })
  where!: SaleWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SaleUpdateInput,
  })
  @ValidateNested()
  @Type(() => SaleUpdateInput)
  @Field(() => SaleUpdateInput, { nullable: false })
  data!: SaleUpdateInput;
}

export { UpdateSaleArgs as UpdateSaleArgs };
