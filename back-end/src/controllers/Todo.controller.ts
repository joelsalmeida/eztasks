import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ITodo, ITodoUpdate } from 'src/interfaces/ITodo';
import { TodoService } from '../services/Todo.service';

@Controller('todos')
export class TodoController {
  constructor(private _todoService: TodoService) {}

  @Post()
  create(@Body() todoData: ITodo) {
    return this._todoService.create(todoData);
  }

  @Get()
  getAll() {
    return this._todoService.getAll();
  }

  @Put(':id')
  update(@Param() param: { id: string }, @Body() todoData: ITodoUpdate) {
    return this._todoService.update(param.id, todoData);
  }

  @Delete(':id')
  remove(@Param() param: { id: string }) {
    return this._todoService.remove(param.id);
  }
}
