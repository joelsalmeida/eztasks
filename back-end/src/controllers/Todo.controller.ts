import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { ITodo, ITodoUpdate } from 'src/interfaces/ITodo';
import { CustomExceptionFilter } from 'src/middlewares/CustomExceptionFilter';
import { JoiValidationPipe } from 'src/middlewares/JoiValidationPipe';
import { CreateTodoSchema } from 'src/schemas/TodoSchemas';
import { TodoService } from '../services/Todo.service';

@Controller('todos')
@UseFilters(new CustomExceptionFilter())
export class TodoController {
  constructor(private _todoService: TodoService) {}

  @Post()
  create(@Body(new JoiValidationPipe(CreateTodoSchema)) todoData: ITodo) {
    return this._todoService.create(todoData);
  }

  @Get()
  getAll() {
    return this._todoService.getAll();
  }

  @Put(':id')
  update(
    @Param() param: { id: string },
    @Body(new JoiValidationPipe(CreateTodoSchema)) todoData: ITodoUpdate,
  ) {
    return this._todoService.update(param.id, todoData);
  }

  @Delete(':id')
  remove(@Param() param: { id: string }) {
    return this._todoService.remove(param.id);
  }
}
