import { IsNotEmpty, Min, Max } from 'class-validator';

export class Product {
  id: number;

  @IsNotEmpty()
  description: string;

  @Min(1)
  @Max(10000)
  price: number;
}
