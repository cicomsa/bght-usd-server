import {
  JsonController,
  Get,
  Param,
  Put,
  Body,
  NotFoundError,
  Post,
  HttpCode,
  //   Authorized,
  Delete
} from 'routing-controllers';
import Meal from './entity';

@JsonController()
export default class MealController {
  // @Authorized()
  @Get('/meals')
  async allMeals() {
    const meals = await Meal.find();
    return { meals };
  }

  // @Authorized()
  @Get('/meals/:id')
  getMeal(@Param('id') id: number) {
    return Meal.findOneById(id);
  }

  // @Authorized()
  @Put('/meals/:id')
  async updateMeal(@Param('id') id: number, @Body() update: Partial<Meal>) {
    const meal = await Meal.findOneById(id);
    if (!meal) throw new NotFoundError('Cannot find meal');

    return Meal.merge(meal, update).save();
  }

  // @Authorized()
  @Post('/meals')
  @HttpCode(201)
  addMeal(@Body() meal: Meal) {
    return meal.save();
  }

  // @Authorized()
  @Delete('/meals/:id')
  async deleteMeal(@Param('id') id: number) {
    const meal = await Meal.findOneById(id);
    if (!meal) throw new NotFoundError('Cannot find meal');
    return Meal.remove(meal);
  }

  // @Authorized()
  // @Get('/categorymeals/:id([0-9]+)')
  // @HttpCode(200)
  // getCategoryProducts(@Param('id') category: string) {
  //   const categorymeals = Meal.find({ category });
  //   return categorymeals;
  // }
}
