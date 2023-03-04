import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateProductCategoryDto {
  @IsNotEmpty()
  @IsString()
  category_name: string;

  @IsString()
  @IsNotEmpty()
  category_description: string;

  category_slug: string;
  category_image: string;
}
