import { Injectable } from '@nestjs/common';
import { ITodo, ITodoUpdate } from 'src/interfaces/ITodo';
import { TodoModel } from '../models/Todo.model';

@Injectable()
export class TodoService {
  constructor(private _todoModel: TodoModel) {}

  create(todoData: ITodo) {
    return this._todoModel.create(todoData);
  }

  getAll() {
    return this._todoModel.getAll();
  }

  update(id: string, todoData: ITodoUpdate) {
    return this._todoModel.update(id, todoData);
  }

  remove(id: string) {
    return this._todoModel.remove(id);
  }
}
