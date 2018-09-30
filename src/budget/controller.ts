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
import Budget from './entity';

@JsonController()
export default class BudgetController {
  @Get('/budgets')
  async allBudgets() {
    const budgets = await Budget.find();
    return { budgets };
  }

  @Put('/budgets/:id')
  async updateBudget(@Param('id') id: number, @Body() update: Partial<Budget>) {
    const budget = await Budget.findOneById(id);
    if (!budget) throw new NotFoundError('Cannot find budget');

    return Budget.merge(budget, update).save();
  }

  // @Authorized()
  @Post('/budgets')
  @HttpCode(201)
  addCategory(@Body() budget: Budget) {
    return budget.save();
  }

  @Delete('/budgets/:id')
  async deleteBudget(@Param('id') id: number) {
    const budget = await Budget.findOneById(id);
    if (!budget) throw new NotFoundError('Cannot find budget');
    return Budget.remove(budget);
  }
}
