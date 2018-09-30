import {
  JsonController,
  Get,
  Param,
  Put,
  Body,
  NotFoundError,
  Post,
  HttpCode,
  // Authorized,
  Delete
} from 'routing-controllers';
import Category from './entity';

@JsonController()
export default class CategoryController {
  @Get('/categories')
  async allCategories() {
    const categories = await Category.find();
    return { categories };
  }

  @Get('/categories/:id')
  getCategory(@Param('id') id: number) {
    return Category.findOneById(id);
  }

  @Put('/categories/:id')
  async updateCategory(
    @Param('id') id: number,
    @Body() update: Partial<Category>
  ) {
    const category = await Category.findOneById(id);
    if (!category) throw new NotFoundError('Cannot find category');

    return Category.merge(category, update).save();
  }

  // @Authorized()
  @Post('/categories')
  @HttpCode(201)
  addCategory(@Body() category: Category) {
    return category.save();
  }

  @Delete('/categories/:id')
  async deleteCategory(@Param('id') id: number) {
    const category = await Category.findOneById(id);
    if (!category) throw new NotFoundError('Cannot find category');
    return Category.remove(category);
  }
}
