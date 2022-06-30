import { Injectable } from '@nestjs/common';
import { TodoModel } from '../models/Todo.model';

@Injectable()
export class TodoService {
  constructor(private _todoModel: TodoModel) {}

  getAll() {
    return this._todoModel.getAll();
  }
}
