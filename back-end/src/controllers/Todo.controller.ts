import { Controller, Get } from '@nestjs/common';
import { TodoService } from '../services/Todo.service';

@Controller('todos')
export class TodoController {
  constructor(private _todoService: TodoService) {}

  @Get()
  getAll() {
    return this._todoService.getAll();
  }
}
