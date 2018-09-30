import {
  JsonController,
  Post,
  Param,
  HttpCode,
  NotFoundError,
  Get,
  Body,
  Put,
  Delete
  //   Authorized
} from 'routing-controllers';
import Product from './entity';

@JsonController()
export default class ProductController {
  @Get('/groceries')
  async allProducts() {
    const products = await Product.find();
    return { products };
  }

  //   @Authorized()
  @Get('/products/:id')
  @HttpCode(200)
  getProduct(@Param('id') id: number) {
    return Product.findOneById(id);
  }

  //   @Authorized()
  @Get('/categoryproducts/:id([0-9]+)')
  @HttpCode(200)
  getCategoryProducts(@Param('id') categoryNo: number) {
    const categoryproducts = Product.find({ categoryNo });
    return categoryproducts;
  }

  // @Authorized()
  @Post('/products')
  @HttpCode(201)
  async addProduct(@Body() Product: Product) {
    return await Product.save();
  }

  //   @Authorized()
  @Put('/products/:id')
  async updateProduct(
    @Param('id') id: number,
    @Body() update: Partial<Product>
  ) {
    const product = await Product.findOneById(id);
    if (!product) throw new NotFoundError('Cannot find product');

    return Product.merge(product, update).save();
  }

  //   @Authorized()
  @Get('/mealproducts/:id([0-9]+)')
  @HttpCode(200)
  getMealProducts(@Param('id') mealNo: number) {
    const mealproducts = Product.find({ mealNo });
    return mealproducts;
  }

  //   @Authorized()
  @Delete('/products/:id')
  async deleteProduct(@Param('id') id: number) {
    const product = await Product.findOneById(id);
    if (!product) throw new NotFoundError('Cannot find product');

    return Product.remove(product);
  }
}
