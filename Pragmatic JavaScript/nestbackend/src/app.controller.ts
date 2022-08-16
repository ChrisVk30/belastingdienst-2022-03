import { Body, Controller, Get, Header, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Product } from './entities/product';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  static products: Product[] = [
    { id: 4, description: 'Muis', price: 99.95 },
    { id: 8, description: 'Laptop', price: 1450 },
    { id: 15, description: 'Pen', price: 0.40 },
  ];

  @Get('/iets-van-een-pagina')
  @Render('index')
  getPrettyPage() {
    return {
      products: AppController.products
    };
  }

  @Get()
  // @Header('content-type', 'application/json')
  getAllProducts(): Product[] {
    return AppController.products;
  }

  @Post()
  addProduct(@Body() newProduct: Product) {
    AppController.products.push(newProduct);
    return 'Thanks!';
  }
}
